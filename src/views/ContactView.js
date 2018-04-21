import React, { Component } from 'react';

import PageArrow from '../components/PageArrow'; 

export default class ContactView extends Component {
    render(){
        return (
            <div className="flex-container col jc-center al-center">
                <h1>Contact</h1>
                <PageArrow to={'/'}/>
            </div>
        )
    }
}