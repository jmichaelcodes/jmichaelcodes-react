import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home'
import Work from './screens/Work/Work'
import About from './screens/About/About'
import Skills from './screens/Skills/Skills'
import BurgerMenu from './components/BurgerMenu/BurgerMenu'

class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#11082b' }}>
        <BurgerMenu/>
        <Route path="/" component={Home}/>
        <Route exact path="/work" component={Work}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/experience" component={Skills}/>
      </div>
    );
  }
}

export default App;