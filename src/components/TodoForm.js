import React from 'react';

const Form = (props) => {
    return (
        <div>
            <div>
                <input type="text" placeholder="task" onChange={props.inputChange}></input>
            </div>
            <div>
                <button>Add Task</button>
                <button onClick={props.completed}>Completed</button>
            </div>
            <div>
            </div>
        </div>
    )
}
export default Form