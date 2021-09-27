import React from 'react';
import './Todo.css'

export default class Todo extends React.Component{
    constructor(){
        super()
        this.state = {
            showNotes: false
        }
    }

    

    handleNotes = () => {
        this.setState({showNotes: !this.state.showNotes})
    }

    render(){
       
       
        const { task, id, notes, completed } = this.props.item
        return(
            <div>
            <p onClick={() => {this.props.handleToggleComplete(id)}} className={completed ? 'completed' : null}>{task}</p>
            <button onClick={this.handleNotes}>Notes</button>
            {this.state.showNotes && <p>{notes}</p>}
            </div>
        )
    }
}