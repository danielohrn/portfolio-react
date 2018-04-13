import React from 'react'; 
import StartView from './views/StartView'; 
import SkillsView from './views/SkillsView'; 
import ContactView from './views/ContactView'; 
import AboutView from './views/AboutView'; 


const routes = [
    {name: 'Start', exact: true, path: '/', component: StartView},
    {name: 'Skills', exact: false, path: '/skills', component: SkillsView},
    {name: 'Contact', exact: false, path: '/contact', component: ContactView},
    {name: 'About', exact: false, path: '/about', component: AboutView},
]; 

export default routes; 