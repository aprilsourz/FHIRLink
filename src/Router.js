import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Patient from './Views/Patient'
import ProviderOne from './Views/ProviderOne'
import ProviderTwo from './Views/ProviderTwo'
import TimeLine from './Views/TimeLine'
import Create from './Views/Create'

import AppBar from 'material-ui/AppBar';


const Router = () => {
  return (
    <div>
      <AppBar title="FHIR Link" />
      <Switch>
        <Route path='/provider/one' component={ProviderOne} />
        <Route path='/provider/two' component={ProviderTwo} />

        <Route path='/patient' component={Patient} />
      </Switch>
    </div>
  )
}

export default Router