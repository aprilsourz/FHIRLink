import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class CustomDialog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: (<div style={{ textAlign: 'center', marginTop: '2em', fontSize: '18px', color: 'black' }}>
        Request access to Janet Greshman's Visit at St Elizabeth's hospital?
          </div>),

    }
  }

  handleOpen = () => {
    this.props.toggle(true)
  };

  handleClose = () => {
    this.props.toggle(false);
  };

  send = () => {
    this.setState({
      content: confirmation
    })
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={(() => this.toggle(false))}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.submit}
      />
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
    <i className='fa fa-check-circle' />
    All set!
  </div>
)