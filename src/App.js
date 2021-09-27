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
      toDos: intialToDos,
      formInput: "",
    };
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
      toDos: this.state.toDos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    });
    console.log(this.state);
  };

  handleClearCompleted = () => {
    this.setState({
      ...this.state,
      toDos: this.state.toDos.filter((item) => item.completed === false),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      task: this.state.formInput,
      notes: "",
      completed: false,
      id: Date.now()
    }
    this.setState({...this.state, toDos: [...this.state.toDos, newTask]})
  }

  handleChange = (e) => {
    this.setState({...this.state, formInput: e.target.value })
  }

  render() {
    return (
      <div>
        
        <h2>Welcome to your Todo App!</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.initialInput} onChange={this.handleChange}/>
          <button type="submit">Add Task</button>
        </form>
        {/* {this.state.toDos.map((tsk) => (
          <div key={tsk.id}>
            <p>{tsk.task}</p>
            <button onClick={() => {this.handleClick(tsk.id)}}>Show Notes</button>
            {this.state.notes === tsk.id ? <p>{tsk.notes}</p> : null}
          </div>
        ))} */}
        <TodoList
          toDos={this.state.toDos}
          handleToggleComplete={this.handleToggleComplete}
        />
        <button onClick={this.handleClearCompleted}>
          Clear Completed Tasks
        </button>
      </div>
    );
  }
}

export default App;
