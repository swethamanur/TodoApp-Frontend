import React, {Component} from 'react';
import '../App.css';
import propTypes from 'prop-types';


class AddTodo extends Component {
    state= {
        title: ''
    }

    onChange = (e) => {
        console.log(e.target.value)
        this.setState ({title: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        //calling this props function which is in the App level
        console.log(this.state.title);
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render(){
        return (
            <div>
                <form style={{display:"flex"}} onSubmit={this.onSubmit}>
                    <input type="text" style={{flex: "15",padding: "5px"}} name="title" placeholder="Add Todo..." onChange={this.onChange} value={this.state.title}/>
                    <input type="submit" value="Add Task" className="button" style={{flex: "5"}} />
                </form>
            </div>
        )
    }
}




export default AddTodo;