import React, { Component } from 'react'; 

import LinkButton from '../components/LinkButton'; 
import PageArrow from '../components/PageArrow'; 
import Card from '../components/Card'; 
import PageHeader from '../components/PageHeader';

export default class AboutView extends Component {
    render(){
        const date = new Date(); 
        return (
            <section className="flex-container col jc-center al-center">
                <PageHeader text={'About'}/>
                
                <PageArrow to={'/contact'}/>
                    <Card width="50%" backgroundColor="white">
                        <h2 style={styles.headers}>
                            Personal
                        </h2>
                        <ul>
                            <li>
                                Name: Daniel Öhrn Hasslöf
                            </li>
                            <li>
                                Age: {date.getFullYear() - 1992}
                            </li>
                            <li>
                                Get in touch: 
                                    <ul>
                                        <li>Email</li>
                                        <li>LinkedIn</li>
                                    </ul>
                            </li>
                        </ul>

                        <h3 style={styles.headers}>
                            Personal goals
                        </h3>
                        <p>
                            My goal is to get hired as soon as possible in the industry and to continue to learn about software and web-development along the way.
                        </p>
                    </Card>
                    <Card width="50%" backgroundColor="white">
                        <h2 style={styles.headers}>
                            Education
                        </h2>
                        <p>
                            I am currently studying year one of the frontend developer program at KYH.
                            I am learning HTML, CSS, JavaScript with popular frameworks, backend programming and UI/UX-design.
                        </p>
                        <h3 style={styles.headers}>
                            LIA/Trainee 
                        </h3>
                        <p>
                            I will be doing work experience, or "LIA" (learning while working) in the fall of 2018.
                        </p>
                    </Card>
            </section>
        )
    }
}

const styles = {
    headers: {
        margin: '.5em 0'
    }
}