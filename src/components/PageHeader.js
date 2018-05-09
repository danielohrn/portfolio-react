import React from 'react'; 

const PageHeader = ({text, emoji}) => (
    <h1 style={{position: 'fixed', top: '20px', textTransform: 'uppercase', color: '#fff'}}>
        {emoji}
        {text}
    </h1>
); 

export default PageHeader; 
