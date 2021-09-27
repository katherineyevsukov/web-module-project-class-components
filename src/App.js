import React from "react";
import TodoList from "./components/TodoList";

const intialToDos = [
  { task: "do laundry", notes: "towels & blankets", completed: false, id: 1 },
  { task: "feed cat", notes: "not until 8pm", completed: false, id: 2 },
  {
    task: "make lasagna",
    notes: "need to buy cheese first",
    completed: false,
    id: 3,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDos: intialToDos
    }
    // this.state = {
    //   toDos: intialToDos,
    //   notes: 0
    // };
  }

  // handleClick = (id) => {
  //   this.setState({...this.state, notes: (this.state.notes === 0 ? id : 0)})
  // }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  handleToggleComplete = (id) => {
    this.setState({
      ...this.state,
      toDos: this.state.toDos.map(item => (
        item.id === id ? {...item, completed: !item.completed} : item
      ))
    })
    console.log(this.state)
  }


  render() {
    
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {/* {this.state.toDos.map((tsk) => (
          <div key={tsk.id}>
            <p>{tsk.task}</p>
            <button onClick={() => {this.handleClick(tsk.id)}}>Show Notes</button>
            {this.state.notes === tsk.id ? <p>{tsk.notes}</p> : null}
          </div>
        ))} */}
        <TodoList toDos={this.state.toDos} handleToggleComplete={this.handleToggleComplete}/>
      </div>
    );
  }
}

export default App;
