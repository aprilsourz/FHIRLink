import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Promise from 'bluebird'
import { greenA700 } from 'material-ui/styles/colors'

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class CustomDialog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: content,
      view: 'content',
    }
  }
  handleOpen = () => {
    this.props.toggle(true)
  };

  handleClose = () => {
    this.props.toggle(false);
    this.setState({ view: 'content' })
  };

  send = () => {
    Promise.delay(500)
    this.setState({
      content: confirmation,
      view: 'confirmation'
    })
  }

  renderActions = () => { }

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={(() => this.props.toggle(false))}
      />,
      this.state.view !== 'confirmation' ?
        <FlatButton
          label="Send"
          primary={true}
          onClick={this.send}
        /> : null
    ];

    return (
      <div>
        <Dialog
          actions={actions}
          modal={true}
          open={this.props.open}
        >
          {this.state.content}
        </Dialog>
      </div>
    );
  }
}

const confirmation = (
  <div style={{ textAlign: 'center', marginTop: '2em', fontSize: '18px', color: 'black' }}>
    <i style={{ marginTop: '0.3em', color: greenA700 }} className='fa fa-check-circle fa-3x' />
    <br />
    <span style={{ fontSize: '28px' }}>All set!</span>

  </div>
)

const content = (<div style={{ textAlign: 'center', marginTop: '2em', fontSize: '18px', color: 'black' }}>
  Request access to Janet Greshman's Visit at St Elizabeth's hospital?
          </div>)