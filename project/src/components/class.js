import React, { Component } from 'react';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Alice'
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, my name is {this.state.name}</h1>
      </div>
    );
  }
}

export default Greeting;
