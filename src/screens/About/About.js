import React, { Component } from 'react'
import CircularProgressbar from 'react-circular-progressbar'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import './About.css'
import resume from '../../assets/resume2018.pdf'

class Profile extends Component {

    render() {
        return (
            <div className='profileContainer'>
                <h1 style={{fontWeight: 'lighter'}}>About</h1>

                <h2 style={{fontWeight: 'lighter'}}>What I do</h2>
                
                <p>I am a front-end developer who has developed both mobile applications and websites. Great understanding of HTML5 and CSS3 allows me to create attractive and responsive user interfaces, while skills in JavaScript and frameworks, such as React and React Native, keep me at the forefront of front-end development.</p>

                <h2 style={{fontWeight: 'lighter'}}>How I got here</h2>

                <p>I entered the development world after taking a crash-course in Android development. That led immediately to an apprenticeship, where I worked on billable projects and prototyping.</p>

                <p>Later, I attended a coding boot-camp to learn Front-End web development. Since then, I have worked on many projects, with a wide variety of team structures, time constraints, and technologies with platforms ranging from web to Android to iOS, with varying levels of responsibility.</p>

                <h2 style={{fontWeight: 'lighter'}}>What you get</h2>

                <p>You’ve probably noticed by now that I catch on fast! That combined with a natural curiosity and an affinity for solving puzzles, fuel my passion for all things <i>code</i>. I make the commitment to bring my personal best to every project, and to be a dependable asset to my team. I approach any and all tasks with enthusiasm and dedication, and welcome challenges. My mindset on development is that <i style={{ textDecoration: 'underline', fontWeight: 'bold'}}>anything is possible</i>.</p>

                <div className='buttonContainer' style={{ marginTop: 75}}>
                    <a href='https://www.linkedin.com/in/jmichaelcodes' target='_blank' className='hollowButton border'>LinkedIn</a>
                    <a href='https://github.com/jmichaelcodes' target='_blank' className='hollowButton border'>GitHub</a>
                    <a href={resume} target='_blank' className='hollowButton border'>Resume</a>
                </div>
            </div>
        )
    }
}

export default Profile