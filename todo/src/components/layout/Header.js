import React, {Component} from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

class Header extends Component{
    //setting the state 
    state = {
        dropdownOpen : false
    };

    toggle()   {
        this.setState({dropdownOpen : !this.state.dropdownOpen});
    }

    render(){
        return (
            <header style={headerStyle}>
                <h1>TodoList</h1>
                <Nav tabs ali>
                    <NavItem>
                        <Link to="/" style={linkStyle} >Home</Link> 
                    </NavItem> 
                    <NavItem>
                        <Link to="/about" style={linkStyle}  >About</Link>
                    </NavItem>

                    <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle.bind(this)}>
                        <DropdownToggle nav caret>Show Todos</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem> <Link to="/todos/completed">Completed</Link></DropdownItem>
                            <DropdownItem> <Link to="/todos/notcompleted">Pending</Link></DropdownItem>
                        </DropdownMenu>

                       
                    </Dropdown>

                </Nav>
               
            </header> 
        )
         
    }

};

const headerStyle = {
    background: 'black',
    textAlign: 'center',
    color: 'white',
    padding: "5px"
};

const linkStyle = {
    color: 'white',
    padding : '5px'
}



export default Header;