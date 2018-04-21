import React, { Component } from 'react'; 

import {colors} from '../constants'; 

export default class AnimatedProgressBar extends Component {
    
    state = {
        startValue: 0, 
        targetValue: null,
        currentValue: 0,
        color: null 
    }
    
    componentDidMount(){
        const {targetValue, startValue} = this.props; 
        this.setState({targetValue, startValue});
        this.handleTick(); 
    }

    componentWillUnmount(){
        clearInterval(this.tickInterval); 
    }

    handleTick = () => {
        const {updateFrequency} = this.props; 
        this.tickInterval = setInterval(() => {
            this.tick(); 
        },updateFrequency); 
    }

    tick = () => {
        const currentValue = this.state.currentValue += 1; 
        this.setState({currentValue}); 

        if(currentValue >= this.state.targetValue) {
            clearInterval(this.tickInterval); 
        }
    }

    render(){
        const {currentValue, targetValue} = this.state;
        const {background} = this.props; 
        
        return (
            // <progress 
            //     value={currentValue} 
            //     max={100}
            //     style={{
            //         ...styles, 
            //         background
            //     }}
            // />

            <div style={{...styles, width: `${currentValue}%`}}/>
        )
    }
}

const styles = {
    //transition: '.5s ease all',
    position: 'absolute', 
    left: 0, 
    top: 0, 
    //opacity: .5,
    width: '100%', 
    height: '100%', 
    background: '#dedede'
}