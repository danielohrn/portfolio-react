import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 

export default class SkillsView extends Component {
    render(){
        return (
            <div>
                <h1>Skills</h1>
                <Link to='/'>Start</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        )
    }
}