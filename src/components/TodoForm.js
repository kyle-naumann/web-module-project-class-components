import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoTitle: ''
        }
    }

    handleChanges = e => {
        this.setState ({ todoTitle: e.target.value})
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoTitle);
    };

    render(){
        return (
            <form form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} value={this.state.todoTitle} type="text" name="title"/>
                <button>Add to List</button>
            </form>
        )
    }
}

export default TodoForm;
