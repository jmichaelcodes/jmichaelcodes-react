import React, { Component } from 'react'

class BurgerMenuItem extends Component {
    render() {
        return (
            <h3>{this.props.children}</h3>
        )
    }
}

export default BurgerMenuItem