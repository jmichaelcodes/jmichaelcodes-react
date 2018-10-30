import React, { Component } from 'react';
import logo from '../../logo.svg';
import { scaleRotate as Menu } from 'react-burger-menu'
import { FaHome, FaCode, FaInfoCircle, FaEnvelope, FaArchive } from 'react-icons/fa';
import './BurgerMenu.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BurgerMenuItem from './BurgerMenuItem'

class BurgerMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            iconVisible: null,
            menuOpen: false
        }
    }

  render() {
    return (
    <div style={{ display: 'flex', flexDirection: 'row'}}>

      <Menu className='menu' isOpen={this.state.menuOpen}>
        <BurgerMenuItem className='firstItem item'>
            <Link to='/' className='menuItem'>
                <FaHome className='menuIcon'/>
                <div className='menuText'>Home</div>
            </Link>
        </BurgerMenuItem>
        <BurgerMenuItem className='item'>
            <Link to='/about' className='menuItem'>
                <FaInfoCircle className='menuIcon'/>
                <div className='menuText'>About</div>
            </Link>
        </BurgerMenuItem>
        <BurgerMenuItem className='item'>
            <Link to='/experience' className='menuItem'>
                <FaCode className='menuIcon'/>
                <div className='menuText'>Experience</div>
            </Link>
        </BurgerMenuItem>
        <BurgerMenuItem className='item'>
            <Link to='/work' className='menuItem'>
                <FaArchive className='menuIcon'/>
                <div className='menuText'>Work</div>
            </Link>
        </BurgerMenuItem>
        <BurgerMenuItem className='item'>
            <a  href="mailto:jmichaelcodes@gmail.com?Subject=Inquiry" className='menuItem'>
                <FaEnvelope className='menuIcon'/>
                <div className='menuText'>Contact</div>
            </a>
        </BurgerMenuItem>
      </Menu>
      </div>
    );
  }
}

export default BurgerMenu;
