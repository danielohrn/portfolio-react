import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import Overdrive from 'react-overdrive'; 

import Card from '../components/Card'; 
import LinkButton from '../components/LinkButton'; 
import PageArrow from '../components/PageArrow'; 

import { colors } from '../constants'; 

import '../App.css';


export default class StartView extends Component {

    state = {
        skills: ['JavaScript', 'HTML5', 'CSS', 'React', 'Node', 'Express', 'Socket.io', 'Wordpress','Sass'],
        activeSkill: {name: null, index: -1}
    }

    handleSkillsToggle = () => {
        this.intervalTime = 1200; 
        this.skillsInterval = setInterval(() => {
            this.toggleSkills(); 
        },this.intervalTime); 
    }

    toggleSkills = () => {
        const activeSkill = Object.assign({}, this.state.activeSkill);
        const {skills} = this.state; 
        if(activeSkill.index >= (skills.length -1)) {
            activeSkill.index = 0; 
        }
        activeSkill.index += 1; 
        activeSkill.name = this.state.skills[activeSkill.index];  
        
        this.setState({activeSkill}); 
    }

    componentDidMount() {
        this.handleSkillsToggle(); 
    }

    componentWillUnmount() {
        clearInterval(this.skillsInterval);
    }


    render(){
        return (
            <section className="flex-container col jc-center al-center" style={styles.section}>                
                <div style={{textAlign: 'center'}}>
                    
                    <Overdrive id="eagle" duration={500}>
                        <img src="./img/eagle.png" style={{width: 100}}/>
                    </Overdrive>

                    <h1 style={{textTransform: 'uppercase', fontSize: '3em', color: '#dedede'}}>
                        Daniel Öhrn Hasslöf
                    </h1>
                
                    <p>
                        Frontend developer | Stockholm 
                    </p>
                    <PageArrow to={'/skills'} name={'Skills'}/>
                </div>
            </section>
        )
    }
}


const styles = {
    section: {
        color: 'white'
    }
}