import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {};
  };
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>ToDo List: MVP</h1>
      </div>
    );
  }
}

export default App;
