import React from "react"

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = {
      todoItem: "",
    }
  }

  handleChanges = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }
  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.handleAdd(this.state.todoItem)
    this.setState({
      todoItem: "",
    })
  }
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="todo-input">Add task: </label>
        <input
          id="todo-input"
          value={this.state.todoItem}
          name="todoItem"
          onChange={this.handleChanges}
        />
        <button onClick={this.handleAdd}>Add</button>
      </form>
    )
  }
}

export default TodoForm
