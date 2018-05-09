import React, { Component } from 'react'; 

import Shape from '../lib/Shape'; 


export default class Canvas extends Component {
    state = {
        amount: 50, 
        shapes: []
    }

    componentDidMount(){

        window.addEventListener('click', this.spawnShapes); 
        window.addEventListener('resize', this.fullScreen); 


        this.fullScreen(); 
        this.drawingContext = this.canvasElement.getContext('2d'); 
        this.drawCanvas(); 
        this.setUpShapes(); 
        
        this.update(); 
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.animationFrame); 
        window.removeEventListener(this.spawnShapes);
        window.removeEventListener(this.fullScreen);
    }

    spawnShapes = (e) => {
        this.setUpShapes(e.clientX, e.clientY);
    }

    setUpShapes = (x, y) => {
        const shapes = [...this.state.shapes]; 
        for(let i = 0; i < this.state.amount; ++i) {
            shapes.push(new Shape(this.canvasElement, x || null, y || null)); 
        }
        this.setState({
            shapes
        }, this.drawShapes); 
    }

    drawShapes = () => {
        this.state.shapes.forEach(shape => {
            this.drawShape(shape); 
        }); 
    }

    drawCanvas = () => {
        const {innerWidth: w, innerHeight: h} = window; 
        this.drawingContext.fillStyle = 'rgba(0,0,0,0.2)'; 
        this.drawingContext.fillRect(0,0,w,h); 
    }

    drawShape = (shape) => {
        const {x,y,w,h} = shape; 
        this.drawingContext.fillStyle = shape.color; 
        this.drawingContext.fillRect(x,y,w,h); 
    }

    update = () => {

        this.state.shapes.forEach(shape => {
            shape.move(); 
            this.drawShape(shape); 
        })
        
        this.drawCanvas(); 
        this.animationFrame = requestAnimationFrame(this.update); 
    }


    fullScreen = () => {
        this.canvasElement.width = window.innerWidth; 
        this.canvasElement.height = window.innerHeight;         
    }

    render(){
        return (
            <canvas ref={c => this.canvasElement = c} style={styles}/>
        )
    }
}

const styles = {
    position: 'fixed', 
    top: 0, 
    left: 0,
    zIndex: '-999', 
}; 