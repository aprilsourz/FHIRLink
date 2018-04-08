import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components'
import Access from './TimeLine/Access'
import NoAccess from './TimeLine/NoAccess'
import { grey400, grey900 } from 'material-ui/styles/colors'
import { Row, Col } from 'react-grid-system'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


import Dialog from './TimeLine/Dialog'
import image from './TimeLine/uxceo-128.jpg'




class TimeLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      requests: false,
      access: false
    }
  }

  toggle = (state) => {
    this.setState({ open: state })
  }

  request = () => {
    this.setState({ requested: true })
    window.localStorage.requested = true
  }

  componentDidMount() {
    if (window.localStorage.requested) {
      this.setState({ access: true })
    }
  }



  render() {
    if (window.location.href.includes('one')) {
      if (!this.state.access) {
        return (
          <Row>
            <Col md={12}>
              <Card
                containerStyle={{ backgroundColor: '#ececec', marginTop: '1.5em' }}
              >
                <CardHeader
                  title="Patient Name"
                  subtitle='ID: 1232AD'
                  avatar={image}
                  style={{ backgroundColor: 'white', borderBotton: 'rgb(224, 224, 224)' }}
                />
                <VerticalTimeline>
                  <Access
                    date='01/14/2018'
                    providerName='James Jones M.D.'
                    specialty='Surgery (General)'
                    service='Apendectomy'
                    place='Boston Childrens Hospital'
                    url={this.props.match.url}
                  />
                  <NoAccess
                    date='01/30/2018'
                    place='St Elizabeths Hospital'
                    text='New Visit'
                    toggle={() => this.toggle(true)}
                    url={this.props.match.url}
                    requested={this.state.requested}
                  />
                </VerticalTimeline>
              </Card>
            </Col>
            <Dialog
              request={this.request}
              toggle={this.toggle} open={this.state.open} />
          </Row >
        )
      } else {
        return (
          <div>
            <Row>
              <Col md={12}>
                <Card
                  containerStyle={{ backgroundColor: '#ececec', marginTop: '1.5em' }}
                >
                  <CardHeader
                    title="Patient Name"
                    subtitle='ID: 1232AD'
                    avatar={image}
                    style={{ backgroundColor: 'white', borderBotton: 'rgb(224, 224, 224)' }}
                  />
                  <VerticalTimeline>
                    <Access
                      date='01/14/2018'
                      providerName='James Jones M.D.'
                      specialty='Surgery (General)'
                      service='Apendectomy'
                      place='Boston Childrens Hospital'
                      url={this.props.match.url}
                    />
                    <Access
                      date='01/14/2018'
                      providerName='James Jones M.D.'
                      specialty='Surgery (General)'
                      service='Apendectomy'
                      place='Boston Childrens Hospital'
                      url={this.props.match.url}
                    />
                  </VerticalTimeline>
                </Card>
              </Col>
              <Dialog
                request={this.request}
                toggle={this.toggle} open={this.state.open} />
            </Row >
          </div>
        )
      }
    }
    return (
      <Row>
        <Col md={12}>
          <Card
            containerStyle={{ backgroundColor: '#ececec', marginTop: '1.5em' }}
          >
            <CardHeader
              title="Patient Name"
              subtitle='ID: 1232AD'
              avatar={image}
              style={{ backgroundColor: 'white', borderBotton: 'rgb(224, 224, 224)' }}

            />
            <VerticalTimeline>
              <Access
                date='01/14/2018'
                providerName='James Jones M.D.'
                specialty='Surgery (General)'
                service='Apendectomy'
                place='Boston Childrens Hospital'
                url={this.props.match.url}
              />
              <Access
                date='01/116/2018'
                providerName='Sarah Smith M.D.'
                specialty='St Elizabeths Hospital'
                service='Apendectomy'
                place=''
                url={this.props.match.url}
              />
            </VerticalTimeline>
          </Card>
        </Col>
        <Dialog
          request={this.request}
          toggle={this.toggle} open={this.state.open} />
      </Row >
    )
  }
}

export default TimeLine



