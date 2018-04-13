import React from 'react'; 
import { Link } from 'react-router-dom'; 

const MainNav = () => (
    <nav style={styles.nav}>
        <Link to={'/'}>Start</Link>
        <Link to={'/skills'}>Skills</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/about'}>About</Link>
    </nav>
)

const styles = {
    nav: {
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: '1em' 
    }
}

export default MainNav; 