import React from 'react';
import Todo from "./Todo"
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
export default class TodoList extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>Sup
            {this.props.toDos.map(t => <Todo key ={t.id} item={t} handleToggleComplete={this.props.handleToggleComplete}/>)}
            </div>
        )
    }
}

