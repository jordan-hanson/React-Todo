import React from 'react';
import Form from './components/TodoForm';
import TodoList from './components/TodoList';

const taskArray = [
  {
    task: 'Study Redux',
    id: 1234,
    completed: false
  },
]
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      taskArray: taskArray
    };
  };

  handleCompletedTodo = (todoId) => {
    this.setState({
      taskArray: this.state.taskArray.map(item => {
        if (item.id === todoId) {
          return {
            ...item,
            completed: true
          }
        } else {
          return item
        }
      })
    })
  }
  addTask = (input) => {
    this.setState(
      {
        taskArray: [...this.state.taskArray, {
          task: input,
          id: this.state.taskArray.length,
          completed: false
        }]
      }
    )
  }
  clearTask = () => {
    this.setState(
      {
        taskArray: this.state.taskArray.filter(item => (item.completed === true))
      }
    )
  }

  handle
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>ToDo List: MVP</h1>
        <TodoList taskArray={this.state.taskArray} handleCompletedTodo={this.handleCompletedTodo} />
        <Form addTask={this.addTask} clearTask={this.clearTask} />
      </div>
    );
  }
}

export default App;
