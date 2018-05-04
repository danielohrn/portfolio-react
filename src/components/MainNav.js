import React from 'react'; 
import { Link } from 'react-router-dom';

import Eagle from './Eagle'; 
import PageHeader from './PageHeader';

const MainNav = () => (
    <nav style={styles.nav}>
        <Link style={styles.links} to={'/'}>
            Start
        </Link>
        <Link style={styles.links} to={'/skills'}>
            Skills
        </Link>
        <Link style={styles.links} to={'/about'}>
            About
        </Link>
        <Link style={styles.links} to={'/contact'}>
            Contact
        </Link>
    </nav>
); 

const styles = {
    nav: {
        position: 'fixed', 
        top: '30px',
        width: '100%',
        textAlign: 'center'
    }, 
    links: {
        margin: '0 .5em',
        color: 'white', 
        textTransform: 'uppercase', 
        textDecoration: 'none'
    }
}


export default MainNav; 