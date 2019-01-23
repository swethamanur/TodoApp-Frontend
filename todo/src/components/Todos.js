import React, {Component} from 'react';
import propTypes  from 'prop-types';
import TodoItem from './TodoItem'


class Todos extends Component {

    render() {
        return (
            <div>
                {this.props.todos.map((todo) => (
                    <TodoItem todoItem={todo} key={todo._id} toggleCompleted ={this.props.toggleCompleted} delTodo = {this.props.delTodo} editTodo={this.props.editTodo} /> 
                ))}
                
            </div>
            
        )
    }
       
};

Todos.propTypes = {
    todos: propTypes.array.isRequired
}

export default Todos;