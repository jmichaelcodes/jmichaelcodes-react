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
                <h3 className='chip'>{item}</h3>
            )
        })
    }

    render() {
        return ( this.props.isOpen ? (
            <div className='mask fade-in' onClick={this.props.toggleModal}>
                <div className='modalContainer'>
                    <div className='modal' onClick={this.handleClick}>
                        <Carousel color={this.generateTranslucentBackground()} images={this.props.work.images} width={this.sizeImage()}/>
                        <div style={{ borderTop: '2px solid black', paddingLeft: 50, paddingRight: 50 }}>
                            <h1 style={{ marginBottom: 0 }}>{this.props.work.name}</h1>
                            {this.renderChips()}
                            <p>{this.props.work.description}</p>
                        </div>
                    </div>
                </div>
            </div> ) : null 
        )
    }
}

export default WorkModal;