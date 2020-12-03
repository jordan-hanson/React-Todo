import React from 'react'

const Todo = props => {
    const handleClick = () => {
        console.log(props)
    }
    return (
        <div onClick={handleClick} className={`Todo${props.item.completed === false ? ' successful' : 'try again!'}`}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo