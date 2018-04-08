import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components'
import Access from './TimeLine/Access'
import NoAccess from './TimeLine/NoAccess'
import { grey400, grey900 } from 'material-ui/styles/colors'
import { Row, Col } from 'react-grid-system'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import image from './TimeLine/uxceo-128.jpg'




class TimeLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card
            containerStyle={{ backgroundColor: '#ececec', marginTop: '1.5em' }}
          >
            <CardHeader
              title="Janet Greshman"
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
              />
              <Access
                date='01/26/2018'
                providerName='James Jones M.D.'
                specialty='Surgery (General)'
                service='Apendectomy'
                place='Boston Childrens Hospital'

              />
              <NoAccess
                date='01/30/2018'
                place='St Elizabeths Hospital'
                text='New Visit'

              />
              <Access
                date='02/5/2018'
                providerName='James Jones M.D.'
                specialty='Surgery (General)'
                service='Apendectomy'
                place='Boston Childrens Hospital'

              />
              <Access
                date='02/19/2018'
                providerName='James Jones M.D.'
                specialty='Surgery (General)'
                service='Apendectomy'
                place='Boston Childrens Hospital'

              />
            </VerticalTimeline>
          </Card>
        </Col>
      </Row >
    )
  }
}

export default TimeLine



