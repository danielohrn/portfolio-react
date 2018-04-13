import React from 'react'; 


const Card = ({children, backgroundColor, color}) => (
    <div style={{
            ...styles.card, 
            backgroundColor, 
            color
        }
    }>
       {children}

    </div>
)

const styles = {
    card: {
        padding: '1em',
    }
}


export default Card; 