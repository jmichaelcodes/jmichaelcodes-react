import React, { Component } from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import './Skills.css'
import android from '../../assets/img/skills/android.png'
import css from '../../assets/img/skills/css.png'
import git from '../../assets/img/skills/git.png'
import html from '../../assets/img/skills/html.png'
import java from '../../assets/img/skills/java.png'
import javascript from '../../assets/img/skills/javascript.png'
import jquery from '../../assets/img/skills/jquery.png'
import reactNative from '../../assets/img/skills/react-native.png'
import react from '../../assets/img/skills/react.png'

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

class Skills extends Component {

    renderSkills = () => {
        return skills.map((item, index) => {
            return (
                <div style={{display: 'flex', flex: 1}}>
                <div className='progressBarContainer' style={{flex: 4}}>
                    <ProgressBar background={true} src={item.skill} percentage={item.percentage} color={item.color}/>
                </div>
                <div style={{flex: 1}}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='skillsContainer'>
                <h1 style={{fontWeight: 100}}>Skills</h1>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {this.renderSkills()}
                </div>

                <h1 className='experienceContainer' style={{fontWeight: 100,}}>Experience and Training</h1>

                <h2>Level Up Development <i>(2017-2018)</i></h2>
                <p className='details'><i>Front-End Developer (HTML, CSS, jQuery, React, React Native (Android/iOS), Project Leadership, testing)</i></p>
                {/* <p>Level Up Development is a software consulting company where I worked as a Junior Front-End developer. I worked on several different projects using many different technologies. Web, iOS, and Android projects were worked on and completed, during my tenure. I worked in everything from a one-person project to a large team effort. In addition to development, I also handled Project Manager duties on a long-term project, as well as contributing to testing on some projects.</p> */}

                <h2>The Iron Yard <i>(2017)</i></h2>
                <p><i>Front-End Development Student (HTML, CSS, Javascript, jQuery, Node, React)</i></p>
                {/* <p>The Iron Yard was a development boot camp where I studied Front-End development. The 4-month program went from 0-60 teaching HTML, CSS, Javascript, jQuery, Node, React. Following the main portion of the program, a final project was completed which utilized HTML, CSS, and React, where I acted as the sole front-end resource.</p> */}

                <h2>iLab <i>(2016)</i></h2>
                <p><i>QA Analyst (QA testing, test development)</i></p>
                {/* <p>iLab is a Quality Assurance consulting company. During my time there, I worked as a QA Analyst for the Indiana Public Retirement Systems. I gained a good amount of experience in testing, which is a skill I can utilize many in development jobs.</p> */}

                <h2>Eleven Fifty Consulting<i>(2015-2016)</i></h2>
                <p><i>Android Developer (Native Android)</i></p>
                {/* <p>Eleven Fifty Consulting is the billable arm of Eleven Fifty Academy, and was my first foray into software development. I took a one-week crash-course on Android Development, and immediately moved into a position working on billable projects for various companies. In my time there, I contributed to several projects, did some QA work, as well as managed other developers on a project.</p> */}
            </div>
        )
    }
}

export default Skills