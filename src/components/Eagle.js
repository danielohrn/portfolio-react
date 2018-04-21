import React, { Component } from 'react'; 
import Overdrive from 'react-overdrive'; 

export default class Eagle extends Component {
  
    state = {
      pos: Math.random() * window.innerWidth, 
      tries: 0, 
    }  
  
    move = (e) => {
      const pos = Math.random() * window.innerWidth;
      let {tries} = this.state; 
      tries++; 
      this.setState({pos, tries}); 
    }
  
    birdHunt = (e) => {
      const {tries} = this.state; 
  
      if(e.type === 'click' && tries >= 10) {
        alert('GRATZ!'); 
        this.setState({tries: 0}); 
      }
      this.move(); 
    }
    
    render(){
      const {pos} = this.state;
      const {pathname} = this.props.location;  
      const root = '/'; 
      return (
        <span>
          
          {pathname != root ? 
          
          <Overdrive id="eagle" duration={500}>
            <img 
              src={'./img/eagle.png'} 
              style={{...styles.eagle, left: `${pos}px`}}
              onMouseOver={this.birdHunt}
              onClick={this.birdHunt}
            />  
          </Overdrive>

          :

          null}

        </span>
      ); 
  
    }
  }
  
  const styles = {
    eagle: {
      width: '35px', 
      position: 'fixed', 
      bottom: 0, 
      transition: '.4s ease all'
    }
  }