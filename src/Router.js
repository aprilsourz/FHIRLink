import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Patient from './Views/Patient'
import ProviderOne from './Views/ProviderOne'
import ProviderTwo from './Views/ProviderTwo'
import TimeLine from './Views/TimeLine'
import Create from './Views/Create'
import { Container, Row, Col } from 'react-grid-system'
import AppBar from 'material-ui/AppBar';

import styled from 'styled-components'


const Router = () => {
  return (
    <div>
      <Container fluid>
        <AppBar title="FHIR Link" />
        <Switch>
          <Route path='/provider/one' component={ProviderOne} />
          <Route path='/provider/two' component={ProviderTwo} />
          <Route path='/patient' component={Patient} />
        </Switch>
      </Container>
    </div>
  )
}

export default Router