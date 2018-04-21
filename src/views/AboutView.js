import React, { Component } from 'react'; 

import LinkButton from '../components/LinkButton'; 
import PageArrow from '../components/PageArrow'; 
import Card from '../components/Card'; 

export default class AboutView extends Component {
    render(){
        return (
            <div className="flex-container col jc-center al-center">
                <h1>About</h1>
                <PageArrow to={'/contact'}/>
            </div>
        )
    }
}