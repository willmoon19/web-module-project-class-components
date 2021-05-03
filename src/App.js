import React from 'react';
import ToDoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";

const defaultItems = [
  {
    name: "Cheese",
    id: 0,
    grabbed: false,
  },
  {
    name: "Apple",
    id: 1,
    grabbed: false,
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      defaultItems: defaultItems
    }
  }

  addToDo = (title) => {
    const newItem = {
      name: title,
      id: this.state.defaultItems.length,
      grabbed: false,
    };
    this.setState({
      defaultItems: [...this.state.defaultItems, newItem]
    })
  }

  onToggle(id){
    const newItemList = this.state.defaultItems.map(item => {
      if (item.id === id) {
        return {
          ...item,
          grabbed: !item.grabbed
        }
      } else {
        return (item);
      }
    })
  }

  onDelete(){
    const newList = this.state.defaultItems.filter(item => {
      return(item.grabbed === false);
    })
    this.setState({
      defaultItems: newList
    })
  };


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList toggle={this.onToggle} delete={this.onDelete} toDoItems={this.state.defaultItems} />
        <ToDoForm addChange={this.addToDo} />
      </div>
    );
  }
}

export default App;
