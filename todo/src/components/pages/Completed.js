import React, {Component} from 'react';
import axios from 'axios';

import Todos from '../Todos';
import TodoItem from '../TodoItem';


class Completed extends Component{
    state= {
        completedTodos :[]
    }

    completed(){
        axios.get('http://localhost:3001/todos').then((res) => {
            let todos = res.data;
            let array = [];
            todos.forEach((todo) => {
                if(todo.completed){
                    array.push(todo);
                }
            });
            this.setState({completedTodos: array});
        })

    }
    

    render(){
        return (
            <div>
                <header style={headerStyle}>
                    <h1>TodoList</h1>
                    <h2 onClick={this.completed.bind(this)}>Completed Todos</h2>
                </header>

            </div>
            
            
        )
    }
}

const headerStyle = {
    background: 'black',
    textAlign: 'center',
    color: 'white',
    padding: "5px"
};
    
export default Completed;