// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react"
import Item from "./Todo"

const TodoList = (props) => {
  const handleClick = () => {
    props.handleClear()
  }

  return (
    <div className="todo-list">
      {props.todo.map((item) => (
        <Item handleToggle={props.handleToggle} key={item.id} item={item} />
      ))}
      <button onClick={handleClick} className="clear-btn">
        Clear Task
      </button>
    </div>
  )
}
export default TodoList
