import React, { Component } from 'react'
import CircularProgressbar from 'react-circular-progressbar'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import './About.css'
import resume from '../../assets/resume2019.pdf'

class Profile extends Component {

    render() {
        return (
            <div className='profileContainer'>
                <h1 style={{ fontWeight: 'lighter' }}>About</h1>

                <h2 style={{ fontWeight: 'lighter' }}>What I do</h2>

                <p>I am a front-end developer who has developed both mobile applications and websites. Great understanding of HTML5 and CSS3 allows me to create attractive and responsive user interfaces, while skills in JavaScript and frameworks, such as React and React Native, keep me at the forefront of front-end development.</p>

                <h2 style={{ fontWeight: 'lighter' }}>How I got here</h2>

                <p>I have succeeded in breaking into the development world very quickly after first learning technologies. I began Android consulting in a trial-by-fire scenario, going from learning, to working on real-world projects, to being fully billable in a few short months.</p>

                <p>Later, I decided to set my sights on web development, and took a course at The Iron Yard, immediately after which I began working at a consulting company contributing fully to projects with no ramp-up period.</p>

                <p>In my most recent position I acted as the sole frontend developer for a small company, bringing multiple projects from conception to fruition without assistance.</p>

                <p>While working, I also earned CSM (Certified Scrum Master) certification, and have implemented scrum and agile principles and workflow into my organization.</p>

                <h2 style={{ fontWeight: 'lighter' }}>What you get</h2>

                <p>You’ve probably noticed by now that I catch on fast! That combined with a natural curiosity and an affinity for solving puzzles, fuel my passion for all things <i>code</i>. I make the commitment to bring my personal best to every project, and to be a dependable asset to my team. I approach any and all tasks with enthusiasm and dedication, and welcome challenges. My mindset on development is that <i style={{ textDecoration: 'underline', fontWeight: 'bold' }}>anything is possible</i>.</p>

                <div className='buttonContainer' style={{ marginTop: 75 }}>
                    <a href='https://www.linkedin.com/in/jmichaelcodes' target='_blank' className='hollowButton border'>LinkedIn</a>
                    <a href='https://github.com/jmichaelcodes' target='_blank' className='hollowButton border'>GitHub</a>
                    <a href={resume} target='_blank' className='hollowButton border'>Resume</a>
                </div>
            </div>
        )
    }
}

export default Profile