import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TimeLine from './TimeLine'
import Create from './Create'

class ProviderOne extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    console.log(this.props.match)
    return (
      <div>
        provider one
        <Route path={`${this.props.match.path}/timeline`} component={TimeLine} />
        <Route path={`${this.props.match.path}/create`} component={Create} />
      </div>
    )
  }
}

export default ProviderOne