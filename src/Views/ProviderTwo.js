import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TimeLine from './TimeLine'
import Create from './Create'

class ProviderTwo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path={`${this.props.match.path}/timeline`} component={TimeLine} />
          <Route path={`${this.props.match.path}/create`} component={Create} />
        </Switch>
      </div>
    )
  }
}

export default ProviderTwo