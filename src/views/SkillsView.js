import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive'; 

import SkillCard from '../components/SkillCard'; 
import LinkButton from '../components/LinkButton';
import { colors } from '../constants';  
import PageArrow from '../components/PageArrow';

import '../App.css'; 

export default class SkillsView extends Component {

    state = {
        skills: {
            frontend: {
                skills: [
                    {cateogry: 'Frontend', name: 'JavaScript', rating: 80, image: './img/skills/js.png'}, 
                    {cateogry: 'Frontend', name: 'HTML', rating: 80, image: './img/skills/html5.png'}, 
                    {cateogry: 'Frontend', name: 'CSS', rating: 80, image: './img/skills/css3.png'},
                ], 
                addOns: [
                    {cateogry: 'Frontend', name: 'ES6', rating: 75, image: './img/skills/es6.png'},
                    {cateogry: 'Frontend', name: 'React', rating: 70, image: './img/skills/react.png'},
                    {cateogry: 'Frontend', name: 'Vue', rating: 40, image: './img/skills/vue.png'},
                    {cateogry: 'Frontend', name: 'Angular', rating: 15, image: './img/skills/angular.png'},
                    {cateogry: 'Frontend', name: 'TypeScript', rating: 15, image: './img/skills/typescript.svg'},
                ]
            }, 
            backend: {
                skills: [
                    {category: 'Backend', name: 'Node.js', rating: 50, image: './img/skills/node.png'},
                    {category: 'Backend', name: 'PHP', rating: 30, image: './img/skills/php.png'},
                    {category: 'Backend', name: 'MYSQL', rating: 30, image: './img/skills/mysql.jpg'},
                    {category: 'Backend', name: 'MongoDB', rating: 30, image: './img/skills/mongodb.jpg'},
                ], 
                addOns: [
                    {category: 'Backend', name: 'Laravel', rating: 30, image: './img/skills/laravel.png'},
                    {category: 'Backend', name: 'Wordpress', rating: 30, image: './img/skills/wordpress.png'},
                    {category: 'Backend', name: 'Express', rating: 30, image: './img/skills/express.png'}, 
                    {category: 'Backend', name: 'Socket.io', rating: 30, image: './img/skills/socketio.gif'},
                ]
            }, 
            tools: [
                {category: 'Tools', name: 'NPM', rating: 80, image: './img/skills/npm.png'}, 
                {category: 'Tools', name: 'Git', rating: 80, image: './img/skills/git.png'}, 
                {category: 'Tools', name: 'Github', rating: 80, image: './img/skills/github.png'},
                {category: 'Tools', name: 'Webpack', rating: 30, image: './img/skills/webpack.png'}, 
            ], 
            other: [
                {category: 'Other', name: 'C#', rating: 20, image: './img/skills/csharp.png'}, 
                {category: 'Other', name: 'Python', rating: 20, image: './img/skills/python.png'}, 
            ]
        }
    }

    render(){

        const {
            frontend, 
            backend, 
            tools, 
            other
        } = this.state.skills;
        return (
            <section className="flex-container col al-center jc-center" style={{background: colors.grayish}}>
                
                <h1 style={{position: 'fixed', top: '20px'}}>Skills</h1>

                
                <div className="flex-container row wrap jc-center">
                    
                    {/* frontend skills and add ons */}
                    <SkillCard 
                        skillName={'Frontend'} 
                        skills={frontend.skills}
                        h1Background={colors.blackish}
                        h1Color={'white'}
                        addOns={frontend.addOns}
                    />

                    {/* backend skills and add ons */}
                    <SkillCard 
                        skillName={'Backend'} 
                        skills={backend.skills}
                        h1Background={colors.blackish}
                        h1Color={'white'}
                        addOns={backend.addOns}
                    />

                    {/* tools */}
                    <SkillCard 
                        skillName={'Tools'} 
                        skills={tools}
                        h1Background={colors.blackish}
                        h1Color={'white'}
                    />

                    {/* other */}
                    <SkillCard 
                        skillName={'For fun'} 
                        skills={other}
                        h1Background={colors.blackish}
                        h1Color={'white'}
                    />

                </div>
                <PageArrow to={'/about'}/>
            </section>
        )
    }
}


