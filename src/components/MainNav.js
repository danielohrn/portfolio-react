import React from 'react'; 
import { Link } from 'react-router-dom'; 

const MainNav = () => (
    <nav>
        <Link to={'/'}>Start</Link>
        <Link to={'/skills'}>Skills</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
    </nav>
)


export default MainNav; 