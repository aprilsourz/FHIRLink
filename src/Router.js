import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Router = () => {
  return (
    <Switch>
      <Route path='/provider/' />
      <Route path='/patient/' />
    </Switch>

  )
}

export default Router