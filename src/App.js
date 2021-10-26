import React from "react"
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todoObj: [
        { task: "Wash Car", completed: false, id: 1 },
        { task: "Buy pen", completed: false, id: 2 },
        { task: "Wash Car", completed: false, id: 3 },
      ],
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  handleAdd = () => {
    console.log("Clicked add button")
  }
  handleClear = () => {
    console.log("Subtract button clicked")
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoObj={this.state.todoObj} />
        <TodoForm />
        <div>
          <button onClick={this.handleAdd}>Add</button>
          <button onClick={this.handleClear}>Clear completed</button>
        </div>
      </div>
    )
  }
}

export default App
