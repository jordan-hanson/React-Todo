import React from 'react';
import Form from './components/TodoForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      task: '',
      isToggleOn: false
    };
  };
  handleInputChange = event => {
    console.log(event.target.value)
    this.setState({ task: event.target.value })
  }
  handleCompletedChange = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>ToDo List: MVP</h1>
        <h2>Learn setState();</h2>
        <Form inputChange={this.handleInputChange} completed={this.handleCompletedChange}></Form>
      </div>
    );
  }
}

export default App;
