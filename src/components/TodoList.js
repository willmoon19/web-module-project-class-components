// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import ToDo from "./Todo";

const ToDoList = (props) => {

    const deleteChange = () => {
        props.delete();
    }

    return (
        <div>
            {props.toDoItems.map(item => (
                <ToDo key={item.id} toggle={this.props.toggle} item={item} />
            ))}  
            <button onClick={deleteChange}>Delete</button>
        </div>
    )
}

export default ToDoList;