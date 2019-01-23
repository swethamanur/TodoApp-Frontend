import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import propTypes  from 'prop-types';
import {Button,Glyphicon} from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';



class TodoItem extends Component{

    state = {
        editing : false, //setting the edit mode to false by default
        editedText : this.props.todoItem.title
    }
    
    
    //ternary operator
   getStyle = () => {
       return {
        background: 'lightblue',
        padding: '10px',
        borderBottom: '1px  dotted',
        'fontSize' : 'large',
        'fontWeight' : 'bold',
        'fontFamily': "Comic Sans MS",
        'textDecoration' : this.props.todoItem.completed ? 'line-through' : 'none'
       } 
    }


    //Start Edit
    handleEdit(id){
        this.setState({editing : true});
    }

    //Edit Done Submit and update db
    editingDone(id,e){
        if(e.keyCode === 13){
        //finish editing once 'enter' is pressed
        this.setState({editing: false})
        }
        
    }

    //Edit and saving to database
    editTodo(id,e) {
        console.log(e.target.value)
        this.setState({editedText : e.target.value});
        //setting the final value as the new title
         
        //old todo value
        let prevTodo = this.props.todoItem;

        this.props.todoItem.title = this.state.editedText;

        //updated todo value
        let editedTitle = this.props.todoItem.title;

        //updating the db
        axios.put(`http://localhost:3001/todos/${id}`, {title: editedTitle}).then((res) => {
            Object.assign(res.data, prevTodo);
        })

    }

    
    render() {
         //setting them as empty objects
        let viewStyle = {};
        let editStyle = {};

        //function to display edit or view mode
        if(this.state.editing){
            viewStyle.display = 'none';
        }else{
            editStyle.display = 'none';
        }

        const {title} = this.props.todoItem;
        const id = this.props.todoItem._id;
        return (
            <div style={this.getStyle()} >
                {/*each todo item*/}   
                    <div style={viewStyle}>
                         <input type="checkbox" onChange={this.props.toggleCompleted.bind(this,id)} />
                        {this.state.editedText}
                    </div> 

                <div align="right" style={viewStyle}>
                        {/*Edit Todo*/}    
                        <Button onClick={this.handleEdit.bind(this,id)}>
                            <Glyphicon glyph="pencil" />
                        </Button>

                       
                        {/*Delete Todo*/} 
                        <Button ariaLable="Remove" onClick={this.props.delTodo.bind(this,id)} >
                            <Glyphicon glyph="trash" />
                        </Button>
                </div>

                <div style={editStyle}>
                    <input type="text" value={this.state.editedText} onKeyDown={this.editingDone.bind(this,id)} onChange={this.editTodo.bind(this,id)}/>
                </div>
                
                
            </div>
        )
    }
};

TodoItem.propTypes = {
    todoItem: propTypes.object.isRequired
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