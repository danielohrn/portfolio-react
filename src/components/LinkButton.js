import React from 'react'; 
import { Link } from 'react-router-dom'; 

const LinkButton = ({to, color, borderColor, background}) => (
    <div>
        <Link style={{...styles, color, borderColor, background}} to={to}>
            {to}
        </Link>
    </div>
)

const styles = {
    padding: '.2em', 
    border: '1px solid'
}

export default LinkButton; 