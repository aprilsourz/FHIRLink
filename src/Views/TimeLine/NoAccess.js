import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled from 'styled-components'
import { red300, grey800, grey100, blue200, grey300 } from 'material-ui/styles/colors'
import { Chip } from 'material-ui'
import { Row, Col } from 'react-grid-system'



const NoAccess = ({ date, place, text, toggle, requested }) => {
  if (!requested) {
    return (
      <NoAcessElement
        className="vertical-timeline-element"
        date={dateElement(date)}
        icon={icon}
        iconStyle={{
          background: red300, color: '#fff'
        }}
        requested={requested}
      >
        <Row>
          <Col md={7}>
            <h4 className="vertical-timeline-element-title">{place}</h4>
          </Col>
          <Col style={{ marginTop: '-10px' }} md={5}>
            <div>
              {renderActions(requested, toggle)}
            </div>
          </Col>
        </Row>
        <p>
          {text}
        </p>
      </NoAcessElement >
    )
  } else {
    return (
      <RequestedElement
        className="vertical-timeline-element"
        date={dateElement(date)}
        icon={icon}
        iconStyle={{
          background: red300, color: '#fff'
        }}
        requested={requested}
      >
        <Row>
          <Col md={7}>
            <h4 className="vertical-timeline-element-title">{place}</h4>
          </Col>
          <Col style={{ marginTop: '-10px' }} md={5}>
            <div>
              {renderActions(requested, toggle)}
            </div>
          </Col>
        </Row>
        <p>
          {text}
        </p>
      </RequestedElement >
    )
  }
}

export default NoAccess

const renderActions = (requested, toggle) => {
  if (!requested) {
    return (
      <StyledChip
        onClick={toggle}
      >
        Request Access
        </StyledChip>
    )
  } else {
    return (
      <RequestedChip>
        Requested
      </RequestedChip>
    )

  }

}

const dateElement = (date) => <DateWrapper>{date}</DateWrapper>

const RequestedChip = styled(Chip) `
  background-color: ${blue200} !important;

`
const StyledChip = styled(Chip) `
  cursor: pointer !important;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${grey800} !important;
    span {
      color: ${grey100} !important;
      transition: all 0.3s ease-in-out ;
    }

  }
`

const DateWrapper = styled.span`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`

const IconWrapper = styled.span`
  font-size: 26px;
  svg {
    margin-top: 17px;
    margin-left: -10px;
  }

`

const icon = (
  <IconWrapper>
    <i className='fa fa-times' />
  </IconWrapper>
)


const NoAcessElement = styled(VerticalTimelineElement) `
  .vertical-timeline-element-content {
      background-color:  ${red300};
      box-shadow: none;
      
  }
`

const RequestedElement = styled(VerticalTimelineElement) `
  .vertical-timeline-element-content {
      background-color: ${grey300};
      box-shadow: none;
      
  }

`
