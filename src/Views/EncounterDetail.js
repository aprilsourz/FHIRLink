import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-grid-system'
import {
  Card, CardActions, CardHeader, CardMedia, CardTitle, CardText,
} from 'material-ui/Card';
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton'
import { greenA700, grey600, grey100, blue100 } from 'material-ui/styles/colors'
import { Link } from 'react-router-dom'

import Dialog from './TimeLine/Dialog'
import image from './TimeLine/uxceo-128.jpg'

import encounter from '../json/encounter-1.json'

const paperStyleTop = {
  width: '96%',
  margin: 20,
  display: 'inline-block',
  padding: '1em'
}

const paperStyleBottom = {
  width: '96%',
  margin: 20,
  display: 'inline-block',
  padding: '1em'
}

const CheckIcon = styled.i`
  color: ${greenA700};
`

const CheckIconCol = styled(Col) `

`

const EncounterDetail = (props) => {
  const html = { __html: encounter.text.div }
  return (
    <Row>
      <Col md={8} offset={{ md: 2 }}>
        <Card
          containerStyle={{ marginTop: '1.5em' }}
        >
          <CardHeader
            title={`ID: ${encounter.id}`}
          >
            <div style={{ float: 'right' }}>
              <Link to={props.match.url.replace('detail', 'timeline')}>
                <RaisedButton>
                  Back
              </RaisedButton>
              </Link>
            </div>
          </CardHeader>
          <Paper
            style={paperStyleTop}
          >
            <Row>
              <Col md={12}>
                <p><strong>{encounter.diagnosis[0].condition.display}</strong></p>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <span>{encounter.type[0].coding[0].display} - {encounter.length.value} {encounter.length.unit}</span>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <span style={{ color: grey600 }}>{encounter.reason[0].text}</span>
              </Col>
              <CheckIconCol md={4}>
                <span><CheckIcon className='fa fa-check-circle' /> {encounter.status}</span>
              </CheckIconCol>
            </Row>
          </Paper>

          <Paper
            style={paperStyleBottom}
          >

            <ListRow>
              <Col md={12}>
                <strong>ID:</strong> {encounter.id}
              </Col>
            </ListRow>
            <ListRow>
              <Col md={12}>
                <strong>Identifier:</strong> {encounter.identifier[0].value}
              </Col>
            </ListRow>
            <ListRow>
              <Col md={12}>
                <strong>Status:</strong> {encounter.status}
              </Col>
            </ListRow>
            <ListRow>
              <Col md={12}>
                <strong>Type:</strong> {encounter.type[0].coding[0].display}
              </Col>
            </ListRow>
            <ListRow>
              <Col md={12}>
                <strong>Priority:</strong> {encounter.priority.coding[0].display}</Col>
            </ListRow>
            <ListRow>
              <Col md={12}>
                <strong>Subject:</strong> {encounter.subject.display} - {encounter.subject.reference}</Col>
            </ListRow>
            <ListRow>
              <Col md={12}>
                <strong>Participant:</strong> {encounter.participant[0].individual.display ? encounter.participant[0].individual.display + ' - ' : null} {encounter.participant[0].individual.reference}  </Col>
            </ListRow>
            <ListRow>
              <Col md={12}>
                <strong>Length:</strong> {encounter.length.value} {encounter.length.unit}  </Col>
            </ListRow>
            <ListRow>
              <Col md={12}>
                <strong>Reason:</strong> {encounter.reason[0].text}</Col>
            </ListRow>
            <ListRow>
              <Col md={12}>
                <strong>Diagnosis:</strong> {encounter.diagnosis[0].condition.display}</Col>
            </ListRow>
            <ListRow>
              <Col md={12}>
                <strong>Service Provider:</strong> {encounter.serviceProvider.reference}</Col>
            </ListRow>
          </Paper>
        </Card>
      </Col>
    </Row >
  )

}

const ListRow = styled(Row) `
  border-bottom: 1px solid ${grey100};
                                                  padding-top: 0.4em;
                                                  padding-bottom: 0.4em;
                                                `

export default EncounterDetail