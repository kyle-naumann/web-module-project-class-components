import React from 'react';
// Component Import
import Todo from './Todo'

const TodoList = props => {
    return(
        <div className="Todo-List">
            {props.todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleCompleted={props.toggleCompleted}/>
            ))}
            <button onClick={props.clearCompleted} className='clear-button'>Clear Completed</button>
        </div>
    )
}

export default TodoList;