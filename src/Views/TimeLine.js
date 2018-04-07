import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components'
import Access from './TimeLine/Access'
import NoAccess from './TimeLine/NoAccess'
import { grey400 } from 'material-ui/styles/colors'
import { Row, Col } from 'react-grid-system'


const Container = styled.div`
  background-color: ${grey400};
  width: 100%;
  height: 100%;

`


class TimeLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Container >
        <Row>
          <Col md={8} offset={{ md: 2 }}>
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
          </Col>
        </Row>
      </Container >
    )
  }
}

export default TimeLine