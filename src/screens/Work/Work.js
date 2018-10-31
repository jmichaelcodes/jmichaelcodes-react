import React, { Component } from 'react'
import './Work.css'
import WorkItem from '../../components/WorkItem/WorkItem'
import WorkModal from '../../components/WorkModal/WorkModal'
import dragos1 from '../../assets/img/screenshots/dragos_1.png'
import dragos2 from '../../assets/img/screenshots/dragos_2.png'
import dragos3 from '../../assets/img/screenshots/dragos_3.png'
import kyne1 from '../../assets/img/screenshots/kyne_1.png'
import kyne2 from '../../assets/img/screenshots/kyne_2.png'
import kyne3 from '../../assets/img/screenshots/kyne_3.png'
import kyne4 from '../../assets/img/screenshots/kyne_4.png'
import nosh1 from '../../assets/img/screenshots/nosh_1.png'
import nosh2 from '../../assets/img/screenshots/nosh_2.png'
import nosh3 from '../../assets/img/screenshots/nosh_3.png'
import ntfxn1 from '../../assets/img/screenshots/ntfxn_1.png'
import ntfxn2 from '../../assets/img/screenshots/ntfxn_2.png'
import ntfxn3 from '../../assets/img/screenshots/ntfxn_3.png'
import ludm1 from '../../assets/img/screenshots/ludm_1.png'
import ludm2 from '../../assets/img/screenshots/ludm_2.png'
import skinnyties1 from '../../assets/img/screenshots/skinnyties_1.png'
import skinnyties2 from '../../assets/img/screenshots/skinnyties_2.png'
import sockorama1 from '../../assets/img/screenshots/sockorama_1.png'
import sockorama2 from '../../assets/img/screenshots/sockorama_2.png'
import surfpaddle1 from '../../assets/img/screenshots/surfpaddle_1.png'
import surfpaddle2 from '../../assets/img/screenshots/surfpaddle_2.png'
import coachstr1 from '../../assets/img/screenshots/coachstr_1.png'
import coachstr2 from '../../assets/img/screenshots/coachstr_2.png'
import coachstr3 from '../../assets/img/screenshots/coachstr_3.png'

const data = [
    {
        name: 'Dragos Web Marketing',
        // color: '#191970',
        color: '#10445a',
        description: 'Dragos Marketing is a jQuery-powered website for a cybersecurity company. On this project, I acted as the sole developer, and point-of-contact with the product owner, taking on the responsibilities of the project manager.',
        images: [dragos1, dragos2, dragos3],
        type: 'web',
        technologies: ['CSS', 'HTML', 'jQuery']
    },
    {
        name: 'LUD Marketing',
        color: '#3CB371',
        // color: '#2cb164',
        description: 'LUD Marketing is a marketing site for a software development company. The site was written in React, and uses a CMS (Contentful) for a backend to dynamically generate components.',
        images: [ludm1, ludm2],
        type: 'web',
        technologies: ['CSS', 'HTML', 'React', 'REST']
    },
    {
        name: 'KYNE',
        color: '#663399',
        // color: '#553e5f',
        description: 'KYNE is a tool for calculating the yearly cost of migraine-associated expenditures. This project was completed single-handedly and utilizes React with all custom components.',
        images: [kyne1, kyne2, kyne3, kyne4],
        type: 'web',
        technologies: ['CSS', 'HTML', 'React']
    },
    {
        name: 'NoshCare',
        color: '#40E0D0',
        // color: '#71cfb6',
        description: 'NoshCare is an iPad mobile app that allows dieticians to set up custom meal plans catered toward individuals dietary restrictions and goals. This was a small team project using GraphQL on the back end and React Native on the front-end.',
        images: [nosh1, nosh2, nosh3],
        type: 'ipad',
        technologies: ['React Native']
    },
    {
        name: 'Coachstr',
        color: '#4682B4',
        // color: '#546e7a',
        description: 'Coachstr is a site that allows coaches to dynamically create practice plans for their teams. This was the final project from my time at The Iron Yard coding bootcamp, where I acted as the sole front-end developer and designer working with a two back-end developers. This project was created using React.',
        images: [coachstr1, coachstr2, coachstr3 ],
        type: 'web',
        technologies: ['CSS', 'HTML', 'React']
    },
    {
        name: 'The Iron Yard',
        color: '#808080',
        description: 'Selected projects from my time at The Iron Yard coding bootcamp, first learning front-end development. Recreating a marketing site and responsive blog, as well as an original group project. All projects were created using pure HTML and CSS.',
        images: [skinnyties1, skinnyties2, sockorama1, sockorama2, surfpaddle1, surfpaddle2],
        type: 'web',
        technologies: ['CSS', 'HTML', 'Javascript']
    },
    {
        name: 'NTXFN Notification Shortcuts',
        // color: '#61463e',
        color: '#FF4500',
        description: 'NTFXN Notification Shortcuts was an app available in the Google Play store that allowed Android users to setup custom notification panels with direct shortcuts to contacts, apps, and utilities (such as alarms). This was an independent project written in Native Android.',
        images: [ntfxn1, ntfxn2, ntfxn3],
        type: 'android',
        technologies: ['Native Android']
    }
]

class Work extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            work: {},
        }
    }

    renderItems = () => {
        return data.map((item, index) => {
            return (
                <WorkItem className={index === 0 ? 'firstItem' : 'item'} work={item} onClick={() => this.setState({ isOpen: true, work: item })}/>
            )
        })
    }

    render() {
        return (
            <div>
            <WorkModal isOpen={this.state.isOpen} toggleModal={() => this.setState({ isOpen: false})} work={this.state.work}/>

            <div className='container'>
                <h1 className='title'>Selected Work</h1>
                {this.renderItems()}
            </div>
            </div>
        )
    }
}

export default Work