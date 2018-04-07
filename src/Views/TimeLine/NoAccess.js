import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled from 'styled-components'
import { red300 } from 'material-ui/styles/colors'



const NoAccess = ({ date, place, text }) => {
  return (
    <NoAcessElement
      className="vertical-timeline-element"
      date={dateElement(date)}
      icon={icon}
      iconStyle={{
        background: red300, color: '#fff'
      }}
    >
      <h4 className="vertical-timeline-element-title">{place}</h4>
      <p>
        {text}
      </p>
    </NoAcessElement>
  )
}

export default NoAccess



const dateElement = (date) => <DateWrapper>{date}</DateWrapper>

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
      background-color: ${red300};
      box-shadow: none;
      
  }
`
