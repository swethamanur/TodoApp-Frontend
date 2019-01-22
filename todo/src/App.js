import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

import axios from 'axios';

import './App.css';
import Todos from './components/Todos.js';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import EditTodo from './components/pages/EditTodo';
import NotCompleted from './components/pages/NotCompleted';
import Completed from './components/pages/Completed';

class App extends Component {
  state = {
    todos : [],
    pendingTodos :[],
    completedTodos: []
  };

  //toggle
  toggleCompleted = (_id) => {
      this.setState({todos: this.state.todos.map((todo) => {
        if(todo._id === _id){
          todo.completed = !todo.completed;
        }
        return todo;
      })})
  };

  //Show Pending Todos
  completed = () => {
    console.log('hello')
     
   
  }

  //Add Todo
  addTodo = (newTodo) => {
    console.log('inside addTodo from app.js');

    axios.post('http://localhost:3001/todos/',newTodo).then((res) => {
      res.send(res.data);
      console.log(res.data);
      //using the spread operator, where it spreads each element and places it in the array.
      this.setState({todos: [...this.state.todos,res.data]});
    })
  };


  //Edit Todo
  editTodo = (id) => {
    return(
      <div>
        <h2>Hello from app.js</h2>
      </div>
     
    )
  }
  
    
    
   

  

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

    

   

    // //completed todos  
    // axios.get('http://localhost:3001/todos').then((res) =>{
    //   let todos = res.data;
    //   todos.forEach((todo) => {
    //     if(todo.completed){
    //       console.log(todo);
    //       this.setState({completedTodos : [...this.state.completedTodos,todo]})

    //     }
    //   })
    // })
  

    //axios.post('http://localhost:3001/todos',todo)
  };

  
  render() {
    return (
      <div className="container">
        <Router>
          <Route exact path="/" render = {(props) => (
            <React.Fragment>
              <Header/>
              <AddTodo addtodo={this.addTodo}/>
              <Todos todos={this.state.todos} toggleCompleted={this.toggleCompleted} delTodo={this.delTodo} editTodo={this.editTodo} completed={this.state.completedTodos} notCompleted = {this.state.pendingTodos} />
            </React.Fragment>
             )}>
          </Route>

          <Route path="/todos/notcompleted" component= {NotCompleted}></Route>

          <Route path="/todos/completed" component= {Completed}></Route>

          <Route path="/todos/id" component={EditTodo}></Route>

          <Route path="/about" component={About}></Route>
        </Router>
      </div>
     
    );
  }
}

export default App;
