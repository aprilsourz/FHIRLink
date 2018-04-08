import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TimeLine from './TimeLine'
import Create from './Create'
import EncounterDetail from './EncounterDetail'

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
        <Route path={`${this.props.match.path}/timeline`} component={TimeLine} />
        <Route path={`${this.props.match.path}/create`} component={Create} />
        <Route path={`${this.props.match.path}/detail`} component={EncounterDetail} />
      </div>
    )
  }
}

export default ProviderOne