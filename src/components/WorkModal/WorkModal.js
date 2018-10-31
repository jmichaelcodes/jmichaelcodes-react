import React, { Component } from 'react'
import Carousel from '../Carousel/Carousel';
import './WorkModal.css'

class WorkModal extends Component  {

    getImages = () => {
        return this.props.work.images((item, index) => {
            return (
                <img src={this.props.src} style={{ width: '100%' }}/>
            )
        })
    }

    handleClick = (e) => {
        e.stopPropagation();
    }

    sizeImage = () => {
        if (this.props.work.type === 'web') {
            return '100%'
        } else if (this.props.work.type === 'ipad') {
            return '50%'
        } else if (this.props.work.type === 'android') {
            return '35%'
        }

        console.log(this.props.type)
    }

    generateTranslucentBackground = () => {
        let str = '#ff0000'
        console.log('color', this.props.work.color.concat('', 13))
        return this.props.work.color.concat('', 80)
    }

    renderChips = () => {
        return this.props.work.technologies.map((item, index) => {
            return (
                <p className='chip'>{item}</p>
            )
        })
    }

    render() {
        return ( this.props.isOpen ? (
            <div className='mask fade-in' onClick={this.props.toggleModal}>
                <div className='modalContainer'>
                    <div className='modal' onClick={this.handleClick}>
                        <Carousel color={this.generateTranslucentBackground()} images={this.props.work.images} width={this.sizeImage()}/>
                        <div className='descriptionContainer' style={{ borderTop: '2px solid black', paddingLeft: 50, paddingRight: 50 }}>
                            <h1 className='workTitle'>{this.props.work.name}</h1>
                            {this.renderChips()}
                            <p style={{ fontSize: 20 }}>{this.props.work.description}</p>
                        </div>
                    </div>
                </div>
            </div> ) : null 
        )
    }
}

export default WorkModal;