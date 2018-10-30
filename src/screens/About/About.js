import React, { Component } from 'react'
import CircularProgressbar from 'react-circular-progressbar'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import './About.css'
import resume from '../../img/resume2018.pdf'
import android from '../../img/skills/android.png'
import css from '../../img/skills/css.png'
import git from '../../img/skills/git.png'
import html from '../../img/skills/html.png'
import java from '../../img/skills/java.png'
import javascript from '../../img/skills/javascript.png'
import jquery from '../../img/skills/jquery.png'
import reactNative from '../../img/skills/react-native.png'
import react from '../../img/skills/react.png'

const skills = [
    { skill: android, percentage: 65, color: '#97c03d'},
    { skill: css, percentage: 95, color: '#0170ba'},
    { skill: html, percentage: 95, color: '#e44d26'},
    { skill: java, percentage: 40, color: '#e01e21'},
    { skill: javascript, percentage: 75, color: '#d6ba32'},
    { skill: jquery, percentage: 80, color: '#0868ab'},
    { skill: reactNative, percentage: 75, color: '#61dafb'},
    { skill: react, percentage: 85, color: '#61dafb'},
    
]

class Profile extends Component {

    renderSkills = () => {
        return skills.map((item, index) => {
            return (
                <div style={{display: 'flex', flex: 1}}>
                <div className='progressBarContainer' style={{flex: 3}}>
                    <ProgressBar background={true} src={item.skill} percentage={item.percentage} color={item.color}/>
                </div>
                <div style={{flex: 1}}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='profileContainer'>
                <h1 style={{fontWeight: 100}}>About</h1>
                
                <p style={{fontWeight: 100}}>I am a front-end developer who has developed several mobile applications and websites, both as a team member and individually. Great understanding of HTML5 and CSS3 allows me to create attractive user interfaces, while skills in JavaScript and related frameworks, such as React and React Native, keep me at the forefront of front-end development on both web and mobile.</p>

                <p>I entered the development field after taking a crash-course in Android development at Eleven Fifty Academy. That led immediately to an apprenticeship at Eleven Fifty Consulting, where I worked on several billable real-world projects. Later, I attended The Iron Yard coding boot-camp to learn Front-End web development, with HTML, CSS, Javascript, and React.</p>

                <p>During my time in the development world, I have worked on well over a dozen billable projects, with a wide variety of team structures, time constraints, and technologies. Platforms have spanned from web to Android to iOS. I have succeeded working individually on many projects, as well as on both small and large teams, with high levels of responsibility.</p>

                <div className='buttonContainer' style={{ marginTop: 75}}>
                    <a href='https://www.linkedin.com/in/jmichaelcodes' target='_blank' className='hollowButton'>LinkedIn</a>
                    <a href='https://github.com/jmichaelcodes' target='_blank' className='hollowButton'>GitHub</a>
                    <a href={resume} target='_blank' className='hollowButton'>Resume</a>
                </div>
            </div>
        )
    }
}

export default Profile