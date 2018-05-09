import React from 'react'; 
import { Link } from 'react-router-dom'; 

const PageArrow = ({direction, to = '/', name}) => {
    
    return (
        <Link id="pageArrow" to={to} style={styles.arrow} className={direction === 'back' ? 'arrow-back' : null}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24">
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
            </svg>
        </Link>
    )
}

const styles = {
    arrow: {
        position: 'fixed', 
        bottom: '20px', 
        right: '50%',
        fill: '#41b883'
    }
}; 

export default PageArrow; 