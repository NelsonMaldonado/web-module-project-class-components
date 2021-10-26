import React from "react"

const Todo = (props) => {
  return (
    <div>
      <p
        style={{ textDecoration: props.todo.completed ? "line-through" : null }}
        onClick={() => props.toggleCompleted(props.todo.id)}
      >
        {props.todo.task}
      </p>
    </div>
  )
}

export default Todo
