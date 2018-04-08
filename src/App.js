import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBaseTheme } from 'material-ui/styles';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'





class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      granted: false
    }

  }

  grant = () => {
    this.setState({ granted: true })
  }
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Router
            granted={this.state.granted}
            grant={this.grant}
          />
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App;
