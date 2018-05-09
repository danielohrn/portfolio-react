import React, { Component } from 'react';

import PageArrow from '../components/PageArrow'; 
import PageHeader from '../components/PageHeader';
import Card from '../components/Card'; 
import LinkedInIcon from '../components/SVG/LinkedIn'; 
import EmailIcon from '../components/SVG/EmailIcon'; 


import '../App.css'; 

export default class ContactView extends Component {

    state = {
        messageSent: false 
    }

    render(){
        return (
            <section className="flex-container col jc-center al-center">
                <PageHeader text={'Contact'}/>

                <Card width={'80%'} backgroundColor={'white'}>
                    <ul className="">
                        <li style={{display: 'flex', alignItems: 'center', margin: '.5em 0'}}>
                            <EmailIcon/>
                            <span style={{paddingLeft: '.5em'}}>dhasslof@gmail.com</span>
                        </li>
                        <li style={{display: 'flex', alignItems: 'center', margin: '.5em 0'}}>
                                <LinkedInIcon/>
                                <span style={{paddingLeft: '.5em'}}>
                                    <a target="_blank" 
                                       href="https://www.linkedin.com/in/daniel-%C3%B6hrn-hassl%C3%B6f-a3b1a8a1/">
                                        LinkedIn
                                    </a>
                                </span>
                        </li>
                    </ul>
                </Card>

                <PageArrow to={'/'}/>
            </section>
        )
    }
}

