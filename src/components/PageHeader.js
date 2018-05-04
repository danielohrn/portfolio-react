import React from 'react'; 

const PageHeader = ({text}) => (
    <h1 style={{position: 'fixed', top: 20, textTransform: 'uppercase', color: '#fff'}}>{text}</h1>
)

export default PageHeader; 