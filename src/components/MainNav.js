import React from 'react'; 
import { NavLink } from 'react-router-dom';

import MenuToggler from './MenuToggler';

import '../App.css'; 

const MainNav = ({toggleNav}) => (
    <nav style={styles.nav}>
        <MenuToggler onClick={toggleNav} style={styles.menuBtn} type={'close'}/>
        <ul style={styles.ul}>
                <NavLink className="link" activeClassName="active" 
                         style={{...styles.links, color: 'black'}} 
                         onClick={toggleNav} 
                         to={'/'}>
                    <span role="img" aria-label="house-emoji">🏠</span>
                </NavLink>
            
                <NavLink className="link" activeClassName="active" style={styles.links} onClick={toggleNav} to={'/skills'}>
                    Skills
                </NavLink>
            
                <NavLink className="link" activeClassName="active" style={styles.links} onClick={toggleNav} to={'/about'}>
                    About
                </NavLink>
            
                <NavLink className="link" activeClassName="active" style={styles.links} onClick={toggleNav} to={'/contact'}>
                    Contact
                </NavLink>
        </ul>
    </nav>
); 

const styles = {
    nav: {
        position: 'fixed', 
        width: '100vw',
        height: '100vh', 
        textAlign: 'center', 
        background: '#fff', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-around', 
        zIndex: '999'
    },
    links: {
        margin: '1em 0',
        textTransform: 'uppercase', 
        textDecoration: 'none', 
        display: 'block', 
        fontSize: '30px'
    }
}


export default MainNav; 