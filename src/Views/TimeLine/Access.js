import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled from 'styled-components'
import { greenA700, grey600, blue100 } from 'material-ui/styles/colors'


const Access = ({ date, place, providerName, service, specialty }) => {
  return (
    <AccessElement
      className="vertical-timeline-element"
      date={dateElement(date)}
      icon={icon}
      iconStyle={{ background: greenA700, color: '#fff' }}
    >
      <h4 className="vertical-timeline-element-title">{providerName}</h4>
      <SubTitle className="vertical-timeline-element-subtitle">{place}</SubTitle>
      <TextWrapper>
        {service} - {specialty}
      </TextWrapper>
    </AccessElement>
  )
}

export default Access

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
const SubTitle = styled.span`
  color: ${grey600};
  font-size: 13px;
  margin-left: 3px;
`
const TextWrapper = styled.span`
  margin-top: 8px;
  display: block;
`
const icon = (
  <IconWrapper>
    <i className='fa fa-check' />
  </IconWrapper>
)

const dateElement = (date) => <DateWrapper>{date}</DateWrapper>

const AccessElement = styled(VerticalTimelineElement) `
  .vertical-timeline-element-content {
      box-shadow: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

  }
  .vertical-timeline-element-content:hover  {
      background-color: ${blue100};
  }


  
`
