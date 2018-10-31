import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../../logo.svg';
import './Home.css';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu'

class Home extends Component {
  render() {
    return (
      <div className='homeContainer'>
      <BurgerMenu/>
        <div className='contentContainer'>
          <h1 className='homeTitle'>J. Michael Williams</h1>
          <h1 className='subtitle'>Front-end Web & Mobile Developer</h1>
          {/* <p className='subtitle'>short bio and stuff</p> */}
          <div className='buttonContainer'>
            <Link to='/about' style={{ textDecoration: 'none'}}>
              <div className='hollowButton border'>About me</div>
            </Link>
            <Link to='/work' style={{ textDecoration: 'none'}}>
              <div className='hollowButton border'>My Work</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
