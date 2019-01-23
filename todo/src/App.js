import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

import './App.css';
import Todos from './components/Todos.js';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import NotCompleted from './components/pages/NotCompleted';
import Completed from './components/pages/Completed';

class App extends Component {
  state = {
    todos : []
  };

  
  //toggle
  toggleCompleted = (id) => {
    console.log(this.state.todos)
      this.setState({todos: this.state.todos.map((todo) => {
        let prevTodo = todo;

        if(todo._id === id){
          todo.completed = !todo.completed;

          //updating the same to the db
          axios.put(`http://localhost:3001/todos/${id}`,{completed : todo.completed}).then((res) => {
          console.log(Object.assign(res.data,prevTodo));
          })
        }
        return todo;
         
      }) });  
  };

  //Show Pending Todos
  completed = () => {
    console.log('hello')
     
   
  }

  //Add Todo
  addTodo = (title) => {
    console.log('inside addTodo from app.js');
    
    axios.post('http://localhost:3001/todos/',{title}).then((res) => {
      console.log(res.data);
      //using the spread operator, where it spreads each element and places it in the array.
      this.setState({todos: [...this.state.todos,res.data]});
    })
  };


  //Delete Todo
  delTodo = (id) => {
    axios.delete(`http://localhost:3001/todos/${id}`).then((res) => {
     
      this.setState({todos: this.state.todos.filter((todo) => {
        return id !== todo._id
      })})
    })
    
  }

  //lifecycle method to do api calls using axios (ex: to our backend)
  componentDidMount(){
    //all todos
    axios.get('http://localhost:3001/todos').then((res) => {
       this.setState({todos: res.data}); 
    });

  };

  
  render() {
    return (
      <div className="container">
        <Router>
          <Route exact path="/" render = {(props) => (
            <React.Fragment>
              <Header/>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} toggleCompleted={this.toggleCompleted} delTodo={this.delTodo} editTodo={this.editTodo} />
            </React.Fragment>
             )}>
          </Route>

          <Route path="/todos/notcompleted" component= {NotCompleted}></Route>

          <Route path="/todos/completed" component= {Completed}></Route>

          <Route path="/about" component={About}></Route>
        </Router>
      </div>
     
    );
  }
}

export default App;
