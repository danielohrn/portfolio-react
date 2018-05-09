const COLORS = [
    'white', 
    '#41b883'
]; 

const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)]; 

export default class Shape {

    constructor(canvas, x ,y){

        this.x = x || canvas.width * Math.random(); 
        this.y = y || canvas.height * Math.random(); 
        
        this.w = Math.random() * 2; 
        this.h = Math.random() * 2; 

        this.xVel = Math.random() - 0.5; 
        this.yVel = Math.random() - 0.5; 

        this.color = getRandomColor();

    }

    move() {

        if(this.x > window.innerWidth || this.x < 0) {
            this.xVel = -this.xVel; 
        } else if(this.y > window.innerHeight || this.y < 0) {
            this.yVel = -this.yVel;
        }

        this.x += this.xVel; 
        this.y += this.yVel; 
    }
}