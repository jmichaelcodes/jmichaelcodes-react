import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './WorkItem.css'

class WorkItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hovered: false
        }
    }

    toggleHover = () => {
        this.setState({hovered: !this.state.hovered})
        console.log(this.props.color, this.props.name)
    }

    render() {
        return (
            <div className={this.props.className} onClick={this.props.onClick} style={{backgroundColor: !this.state.hovered ? '' : this.props.work.color }} onMouseEnter={() => this.setState({ hovered: true })} onMouseLeave={() => this.setState({ hovered: false })}>
                <h2 className='itemName'>{this.props.work.name}</h2>
            </div>
        )
    }
}

export default WorkItem