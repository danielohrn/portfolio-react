import React from 'react'; 
import { Link } from 'react-router-dom'; 

const LinkButton = ({to, color, borderColor, background, caption}) => (
    <div>
        <Link style={{...styles, color, borderColor, background}} to={to}>
            {caption}
        </Link>
    </div>
)

const styles = {
    padding: '.2em',
    textDecoration: 'none'
}

export default LinkButton; 