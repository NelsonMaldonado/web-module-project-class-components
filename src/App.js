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
  addItem = () => {
    const newTodoObj = {
      task: "",
      id: Date.now(),
      completed: false,
    }

    this.setState({
      todoObj: [...this.state.todoObj, newTodoObj],
    })
  }

  handleAdd = (taskName) => {
    const newTodoObj = { task: taskName, id: Date.now(), completed: false }
    this.setState({
      todoObj: [...this.state.todoObj, newTodoObj],
    })
    console.log("Clicked add button")
  }
  toggleCompleted = (id) => {
    this.setState({
      todoObj: this.state.todoObj.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          }
        } else {
          return item
        }
      }),
    })
  }

  handleClear = (e) => {
    e.preventDefault()
    this.setState({
      todoObj: this.state.todoObj.filter((item) => !item.completed),
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todoObj={this.state.todoObj}
          toggleComplete={this.toggleCompleted}
        />
        <TodoForm handleAdd={this.handleAdd} />
        <div>
          <button onClick={this.handleClear}>Clear completed</button>
        </div>
      </div>
    )
  }
}

export default App
