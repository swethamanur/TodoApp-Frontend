import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class EditTodo extends Component {
    state = {
        title: '',
        completed: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({title: e.target.value});
        //Sending the edited title value as input parametes to the prop function editTodo
        this.props.editTodo(this.state.title);
    }

    render(){
        return (
            
            <div>
                <h2>Edit Todo</h2>
                <Form>
                    <FormGroup>
                        <Input type ="text" placeholder="Edit Todo" name="title"/>
                        <Input type="submit" value="Update Todo" onSubmit={this.Onsubmit}/>
                    </FormGroup>
                </Form>
            </div>

        )
    }
}

export default EditTodo;