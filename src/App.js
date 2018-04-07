import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import { lightBaseTheme } from 'material-ui/styles';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  foo = () => {
    console.log('fooo')
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <AppBar title="FHIR Link" />
      </MuiThemeProvider>
    )
  }
}

export default App;
