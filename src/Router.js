import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Patient from './Views/Patient'
import ProviderOne from './Views/ProviderOne'
import ProviderTwo from './Views/ProviderTwo'

const Router = () => {
  return (
    <Switch>
      <Route path='/provider/one/' component={ProviderOne} />
      <Route path='/provider/two/' component={ProviderTwo} />
      <Route path='/patient/' component={Patient} />
    </Switch>

  )
}

export default Router