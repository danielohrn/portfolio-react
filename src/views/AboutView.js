import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 

export default class AboutView extends Component {
    render(){
        return (
            <div>
                <h1>About</h1>
                <Link to='/contact'>Contact</Link>
                <Link to='/'>Home</Link>
            </div>
        )
    }
}