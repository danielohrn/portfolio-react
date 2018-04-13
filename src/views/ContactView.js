import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 

export default class ContactView extends Component {
    render(){
        return (
            <div>
                <h1>Contact</h1>
                <Link to='/skills'>Skills</Link>
                <Link to='/about'>About</Link>
            </div>
        )
    }
}