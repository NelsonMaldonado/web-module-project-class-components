import React from "react"

const todo = [
  {
    name: "Clean car",
    id: 123,
    finished: false,
  },
  {
    name: "Work on Portfolio",
    id: 124,
    finished: false,
  },
  {
    name: "Take trash out",
    id: 125,
    finished: false,
  },
  {
    name: "Get a haircut",
    id: 126,
    finished: false,
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super()
    this.state = {
      todo: todo,
    }
  }
  handleToggle = (id) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            finished: !item.finished,
          }
        } else {
          return item
        }
      }),
    })
  }
  // Add item
  handleAddItem = (item) => {
    const newItem = {
      name: name,
      id: Date.now(),
      finished: false,
    }
    this.setState({
      ...this.state,
      todo: [...this.state.todo, newItem],
    })
  }

  //Clear Finished items

  handleClear = () => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter((item) => {
        return !item.finished
      }),
    })
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm
            handleAddItem={this.handleAddItem}
            setState={this.setState}
            todo={this.state.todo}
          />
        </div>
        <TodoList
          handleClear={this.handleClear}
          handleToggle={this.handleToggle}
          todo={this.state.todo}
        />
      </div>
    )
  }
}

export default App
