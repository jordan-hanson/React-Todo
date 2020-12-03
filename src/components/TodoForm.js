import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }
    handleChanges = (event) => {
        console.log(event.target.value)
        this.setState({
            input: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTask(this.state.input)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input value={this.state.input} placeholder="task" onChange={this.handleChanges}></input>
                </div>
                <button>Add Task</button>
            </form>
        )
    }

}
export default Form