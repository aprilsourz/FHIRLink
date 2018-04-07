import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled from 'styled-components'
import { greenA700 } from 'material-ui/styles/colors'

const DateWrapper = styled.span`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`

const IconWrapper = styled.span`
  font-size: 26px;
  svg {
    margin-top: 17px;
  }

`

const icon = (
  <IconWrapper>
    <i className='fa fa-check' />
  </IconWrapper>
)

const Access = ({ date, place, providerName, service, specialty }) => {
  return (
    <AccessElement
      className="vertical-timeline-element"
      date={dateElement(date)}
      icon={icon}
      iconStyle={{ background: greenA700, color: '#fff' }}
    >
      <h4 className="vertical-timeline-element-title">{providerName}</h4>
      <h4 className="vertical-timeline-element-subtitle">{place}</h4>
      <p>
        {service} - {specialty}
      </p>
    </AccessElement>
  )
}

export default Access



const dateElement = (date) => <DateWrapper>{date}</DateWrapper>

const AccessElement = styled(VerticalTimelineElement) `
  .vertical-timeline-element-content {
      box-shadow: none;
      
  }
`
