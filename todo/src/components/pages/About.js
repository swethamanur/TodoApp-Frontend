import React,{Component} from 'react';
import '../layout/about.css';


class About extends Component {
    render() {
        return(
            <div className="container" >
                <p style={paraStyle}><b>Hello! Welcome to our app. This app lets you manage and track your tasks.
                    Use this app and save time by completing all your tasks on time!</b>
                </p>
            </div>   
        )
        
    }
};

const paraStyle = {
    color: 'black',
    padding: "5px",
    textAlign: 'center'
}

export default About