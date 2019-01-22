import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import propTypes  from 'prop-types';
import {Button,Glyphicon} from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';


import EditTodo from './pages/EditTodo';

class TodoItem extends Component{
    
    
    editTodo = () => {
        console.log('1. inside edit');
        return (
            <EditTodo/>
        )

    }

    
    //ternary operator
   getStyle = () => {
       return {
         background: 'lightgray',
         padding: '10px',
         borderBottom: '1px  dotted',
        'textDecoration' : this.props.todoItem.completed ? 'line-through' : 'none'
       } 
    }

   


    render(){
        const {title} = this.props.todoItem;
        const id = this.props.todoItem._id;
        return (
            <div style={this.getStyle()} >
                <input type="checkbox" onChange={this.props.toggleCompleted.bind(this,id)} />
                {` ${title}`}

                
                <div align="right" style={textStyle}>
            
                    <Link to={`/todos/${id}`}>
                        <Button onClick={this.editTodo.bind(this,id)} >
                            <Glyphicon glyph="pencil" />
                        </Button>
                    </Link>
                    

                    <Button ariaLable="Remove" onClick={this.props.delTodo.bind(this,id)} >
                        <Glyphicon glyph="trash" />
                    </Button>
                </div>
                
            </div>
        )
    }
};

TodoItem.propTypes = {
    todoItem: propTypes.object.isRequired
}

const textStyle = {
    fontSize : "150%",
    fontWeight: "bold"
}
//btnStyle
const btnStyle =  {
    
        background : '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    
}

export default TodoItem;