import React from 'react';

class MyComponent extends React.Component {
  handleClick = () => {
    alert('Button was clicked!');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click Me
      </button>
    );
  }
}

export default MyComponent;

