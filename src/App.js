import React from "react"

class App extends React.Component {
  constructor() {
    super()
    this.state = [{ task: "Wash Car", completed: false, id: Date.now() }]
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  handleAdd = () => {
    console.log("Clicked add button")
  }
  handleSubtract = () => {
    console.log("Subtract button clicked")
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleSubtract}>Subtract</button>
      </div>
    )
  }
}

export default App
