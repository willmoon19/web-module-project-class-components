import React from "react";

class ToDoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            input: "",
        }
    }

    onChange = event => {
        this.setState({
            input: event.target.value,
        })
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.addChange(this.state.input)
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input onChange={this.onChange} type="text" name="item" />
                <button onClick={this.onSubmit}>Add</button>
            </form>
        )}
}

export default ToDoForm;