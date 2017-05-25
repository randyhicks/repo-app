import React, { Component } from 'react';

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }
    this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState(function (id, username) {
      var newState = {};
      newState[id + 'Name'] = username;
    });
  }
  render () {
    return (
      <div>
        Battle!
      </div>
    )
  }
}

export default Battle;