import React, { Component } from 'react';

import PageArrow from '../components/PageArrow'; 
import PageHeader from '../components/PageHeader'; 
import Card from '../components/Card'; 

import {colors} from '../constants'; 

export default class ContactView extends Component {
    render(){
        return (
            <section className="flex-container col jc-center al-center">
                <PageHeader text={'Contact'}/>
                <form className="flex-container col jc-center" style={styles.form}>
                    <div>
                        <input style={styles.input} type="text" id="name" placeholder="Name"/>
                        <input style={styles.input} type="text" id="email" placeholder="Email"/>
                    </div>
                    <textarea id="message" cols="30" rows="10" placeholder="Message"></textarea>
                    <button style={styles.button} type="submit">
                        Send
                    </button>
                </form>
                <PageArrow to={'/'}/>
            </section>
        )
    }
}


const styles = {
    form: {
        width: '50%', 
        padding: '1em', 
        fontSize: '1.2em'
    }, 
    label: {
        margin: '.5em 0',
        padding: '.3em',  
        background: colors.blackish, 
        color: 'white'
    }, 
    input: {
        padding: '.5em', 
        fontSize: '1em', 
        width: '50%', 
        boxSizing: 'border-box', 
        margin: '.5em 0'
    }, 
    button: {
        margin: '.5em 0',
        padding: '1em', 
        width: '50%'
    }
}