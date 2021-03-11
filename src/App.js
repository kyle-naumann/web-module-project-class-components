import React from 'react';
// Components
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import "./components/Todo.css"

const todos = []

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor() {
  super();
  this.state = {
    todos: todos
  }
}

addTodo = (todoTitle) => {
  this.setState({
    todos:[
      ...this.state.todos,
      {
        title: todoTitle,
        id: Date.now(),
        completed: false
      }
    ]
  })
}

toggleCompleted = (todoId) => {
  this.setState({
    todos: this.state.todos.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    })
  })
}

clearCompleted = () => {
  this.setState({
    todos: this.state.todos.filter(todo => {
      return !todo.completed
    })
  })
}

  render() {
    console.log(this.state)
    return (
      <>

      <div className="App">
        <div className="header">
          <h1> TO DO's</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList clearCompleted={this.clearCompleted} todos={this.state.todos} toggleCompleted= {this.toggleCompleted} />
      </div>
      </>
    );
  }
}

export default App;
