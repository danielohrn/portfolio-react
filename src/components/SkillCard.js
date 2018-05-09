import React from 'react';

import Card from '../components/Card'; 
import AnimatedProgressBar from '../components/AnimatedProgressBar';  

const SkillCard = ({skills, skillName, h1Background, h1Color, addOns}) => {
    let addOnsList; 
    let skillList; 

    if(skills) {
        skillList = skills.map((skill, i) => (
            <Skill key={i}
                   name={skill.name} 
                   rating={skill.rating} 
                   background={'black'}
                   image={skill.icon_url}
            />
        ));
    }

    if(addOns) {
        addOnsList = addOns.map((addOn, i) => (
            <Skill key={i}
                   name={addOn.name} 
                   rating={addOn.rating} 
                   background={'black'}
                   image={addOn.icon_url}
            />
        )); 
    }
    return (
        <Card width={'40%'} backgroundColor={'white'}>
            <div>
                <h2 style={{background: h1Background, color: h1Color, padding: '0 .3em'}}>{skillName}</h2>
                <ul>
                    {skillList}
                </ul>
            </div>
            {addOns ? 
            <div>
                <h3 style={{background: h1Background, color: h1Color, padding: '0 .3em'}}>Add ons</h3>
                <ul>
                    {addOnsList}
                </ul>
            </div> : null}
        </Card> 
    )
}

const Skill = ({name, rating, background, image}) => (
    <li style={{position: 'relative', margin: '.3em 0', height: '30px', padding: '.1em'}}>   
        
        <div style={{zIndex: '10', width: '100%', justifyContent: 'space-between', display: 'flex', alignItems: 'center', position: 'relative', height: '100%'}}>
            <img src={image} alt={name} style={{width: '30px'}}/>
            <span>{name}</span>
            <span>{rating}%</span>
        </div>
        
        <AnimatedProgressBar
                startValue={0}
                updateFrequency={20}
                targetValue={rating}
        />
    </li>
)

export default SkillCard; 