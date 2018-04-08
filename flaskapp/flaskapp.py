# -*- coding: utf-8 -*-

import logging
from fhirclient import client

from flask import Flask, request, redirect, session

# app setup
smart_defaults = {
    'app_id': 'FHIRLink',
    'api_base': 'https://sb-fhir-stu3.smarthealthit.org/smartstu3/data',
    'redirect_uri': 'http://localhost:8800/smart/oauth_resp/',
}

epic_defaults = {
    'app_id': '',
    'api_base': 'https://open-ic.epic.com/argonaut/api/FHIR/argonaut',
    'redirect_uri': 'http://localhost:8800/fhir/oauth_resp',
}

app = Flask(__name__)


def _save_state(state):
    session['state'] = state


def _save_epic_state(state):
    session['epic_state'] = state


def _get_smart():
    state = session.get('state')
    if state:
        return client.FHIRClient(state=state, save_func=_save_state)
    else:
        return client.FHIRClient(settings=smart_defaults, save_func=_save_state)


def _get_epic():
    state = session.get('epic_state')
    if state:
        return client.FHIRClient(state=state, save_func=_save_epic_state)
    else:
        return client.FHIRClient(settings=epic_defaults, save_func=_save_epic_state)


def _logout():
    if 'state' in session:
        smart = _get_smart()
        smart.reset_patient()
    if 'epic_state' in session:
        smart = _get_epic()
        smart.reset_patient()


def _reset():
    if 'state' in session:
        del session['state']
    if 'epic_state' in session:
        del session['epic_state']


def _get_prescriptions(smart):
    bundle = MedicationRequest.where({'patient': smart.patient_id}).perform(smart.server)
    pres = [be.resource for be in bundle.entry] if bundle is not None and bundle.entry is not None else None
    if pres is not None and len(pres) > 0:
        return pres
    return None


def _get_medication_by_ref(ref, smart):
    med_id = ref.split("/")[1]
    return Medication.read(med_id, smart.server).code


def _med_name(med):
    if med.coding:
        name = next(
            (coding.display for coding in med.coding if coding.system == 'http://www.nlm.nih.gov/research/umls/rxnorm'),
            None)
        if name:
            return name
    if med.text and med.text:
        return med.text
    return "Unnamed Medication(TM)"


def _get_med_name(prescription, client=None):
    if prescription.medicationCodeableConcept is not None:
        med = prescription.medicationCodeableConcept
        return _med_name(med)
    elif prescription.medicationReference is not None and client is not None:
        med = _get_medication_by_ref(prescription.medicationReference.reference, client)
        return _med_name(med)
    else:
        return 'Error: medication not found'


# views

@app.route('/')
@app.route('/index.html')
def index():
    """ The app's main page.
    """
    smart = _get_smart()
    epic = _get_epic()
    body = "<h1>Hello</h1>"

    if smart.ready and smart.patient is not None:  # "ready" may be true but the access token may have expired, making smart.patient = None
        name = smart.human_name(
            smart.patient.name[0] if smart.patient.name and len(smart.patient.name) > 0 else 'Unknown')

        # generate simple body text
        body += "<p>You are authorized and ready to make API requests for <em>{0}</em>.</p>".format(name)
        pres = _get_prescriptions(smart)
        if pres is not None:
            body += "<p>{0} prescriptions: <ul><li>{1}</li></ul></p>".format(
                "His" if 'male' == smart.patient.gender else "Her",
                '</li><li>'.join([_get_med_name(p, smart) for p in pres]))
        else:
            body += "<p>(There are no prescriptions for {0})</p>".format(
                "him" if 'male' == smart.patient.gender else "her")
        body += """<p><a href="/logout">Change patient</a></p>"""
    else:
        auth_url = smart.authorize_url
        if auth_url is not None:
            body += """<p>Please <a href="{0}">authorize</a>.</p>""".format(auth_url)
        else:
            body += """<p>Running against a no-auth server, nothing to demo here. """
        body += """<p><a href="/reset" style="font-size:small;">Reset</a></p>"""
    if epic.ready and epic.patient is not None:  # "ready" may be true but the access token may have expired, making smart.patient = None
        name = epic.human_name(
            epic.patient.name[0] if epic.patient.name and len(epic.patient.name) > 0 else 'Unknown')

        # generate simple body text
        body += "<p>You are authorized and ready to make API requests for <em>{0}</em>.</p>".format(name)
        pres = _get_prescriptions(epic)
        if pres is not None:
            body += "<p>{0} prescriptions: <ul><li>{1}</li></ul></p>".format(
                "His" if 'male' == epic.patient.gender else "Her",
                '</li><li>'.join([_get_med_name(p, epic) for p in pres]))
        else:
            body += "<p>(There are no prescriptions for {0})</p>".format(
                "him" if 'male' == epic.patient.gender else "her")
        body += """<p><a href="/logout">Change patient</a></p>"""
    else:
        auth_url = epic_oauth_link
        generated_auth_url = epic.authorize_url
        import urllib.parse as p
        state = p.parse_qs(p.urlsplit(generated_auth_url).query)["state"]
        auth_url += "&state=" + state[0]

        if auth_url is not None:
            body += """<p>Please <a href="{0}">authorize</a>.</p>""".format(auth_url)
        else:
            body += """<p>Running against a no-auth server, nothing to demo here. """
        body += """<p><a href="/reset" style="font-size:small;">Reset</a></p>"""

    return body


@app.route('/smart/oauth_resp/')
def smart_callback():
    """ OAuth2 callback interception.
    """
    smart = _get_smart()
    try:
        smart.handle_callback(request.url)
    except Exception as e:
        return """<h1>Authorization Error</h1><p>{0}</p><p><a href="/">Start over</a></p>""".format(e)
    return redirect('/')


@app.route('/fhir/oauth_resp/')
def epic_callback():
    """ OAuth2 callback interception.
    """
    epic = _get_epic()
    try:
        epic.handle_callback(request.url)
    except Exception as e:
        return """<h1>Authorization Error</h1><p>{0}</p><p><a href="/">Start over</a></p>""".format(e)
    return redirect('/')


@app.route('/logout')
def logout():
    _logout()
    return redirect('/')


@app.route('/reset')
def reset():
    _reset()
    return redirect('/')


# start the app
if '__main__' == __name__:
    import flaskbeaker

    flaskbeaker.FlaskBeaker.setup_app(app)

    logging.basicConfig(level=logging.DEBUG)
    app.run(debug=True, port=8800)
