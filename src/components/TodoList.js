// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import Todo from './Todo'

const TodoList = props => {
    // const handleClick = () => {
    //     props.clearTask();
    // }
    return (
        <div className="todo-list">
            {props.taskArray.map(item => (
                <Todo handleCompletedTodo={props.handleCompletedTodo} key={item.id} item={item} />
            ))};
        </div>
    )
}
export default TodoList
