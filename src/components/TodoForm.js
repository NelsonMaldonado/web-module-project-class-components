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

  render() {
    return (
      <form>
        <label htmlFor="todo-input">Add task: </label>
        <input
          id="todo-input"
          value={this.state.todoItem}
          name="todo-text"
          onChange={this.handleChanges}
        />
      </form>
    )
  }
}

export default TodoForm
