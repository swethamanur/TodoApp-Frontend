import React, {Component} from 'react';
import axios from 'axios';

class NotCompleted extends Component{
    state= {
        pendingTodos :[]
    }

    componentDidMount(){
        //pending todos
        axios.get('http://localhost:3001/todos').then((res) =>{
            let todos = res.data;
            console.log(todos);
           // this.setState({pendingTodos: })
            todos.forEach((todo) => {
            if(!todo.completed){
                console.log(todo);
                this.setState({pendingTodos : [...this.state.pendingTodos,todo]})
    
            }
            })
        })
    };

    render(){
        return (
            <header style={headerStyle}>
                <h1>TodoList</h1>
                <h2>Pending Todos</h2>
                
            </header>
            
        )
    }
}


const headerStyle = {
    background: 'black',
    textAlign: 'center',
    color: 'white',
    padding: "5px"
};
    
export default NotCompleted;
