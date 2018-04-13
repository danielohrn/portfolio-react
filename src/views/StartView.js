import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 

import Card from '../components/Card'; 
import LinkButton from '../components/LinkButton'; 

import { colors } from '../constants'; 


export default class StartView extends Component {

    state = {
        skills: ['JavaScript', 'React', 'CSS', 'HTML'],
        activeSkill: {name: null, index: -1}
    }

    handleSkillsToggle = () => {
        this.intervalTime = 800; 
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
            <section style={styles.section}>

                <Card backgroundColor="rgba(0, 0, 0, 0.078)" 
                      color="white">

                    <h1>Hey, im <span className="hl">Daniel.</span></h1>
                    
                    <p>I'm a frontend developer student with skills in <span className="hl"> {this.state.activeSkill.name}.</span></p>
                    
                    <LinkButton 
                        to={'/skills'}
                        color="white"
                        borderColor="green"
                    />

                </Card>
            </section>
        )
    }
}


const styles = {
    section: {
        background: '#262934', 
    }
}