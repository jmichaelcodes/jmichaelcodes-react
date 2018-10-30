import React, { Component } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Carousel.css'

class Carousel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentImage: 0
        }
    }

    previousImage = (e, images) => {
        e.stopPropagation();

        if (images) {
            for (let i = 0; i < images.length; i++) {
                if (this.state.currentImage === 0 ) {
                    this.setState({ currentImage: images.length - 1 })
                } else {
                    this.setState({ currentImage: this.state.currentImage - 1})
                }
            }     
        }
    }

    nextImage = (e, images, ) => {
        e.stopPropagation();

        if (images) {
            for (let i = 0; i < images.length; i++) {
                if (this.state.currentImage === images.length - 1) {
                    this.setState({ currentImage: 0 })
                } else {
                    this.setState({ currentImage: this.state.currentImage + 1})
                }
            }     
        }
    }

    render() {
        return (
            <div>
                <div style={{ backgroundColor: '#575757'}}>
                <div style={{ position: 'relative', textAlign: 'center', backgroundColor: this.props.color}}>
                    <FaChevronLeft  size='3em' className='carouselArrowLeft' onClick={(e) => this.previousImage(e, this.props.images)}/>
                    <img src={this.props.images[this.state.currentImage]} style={{ width: this.props.width, cursor: 'zoom-in' }} onClick={() => alert('alert')}/>
                    <FaChevronRight  size='3em' className='carouselArrowRight' onClick={(e) => this.nextImage(e, this.props.images)}/>
                </div></div>
            </div>
        )
    }
}

export default Carousel