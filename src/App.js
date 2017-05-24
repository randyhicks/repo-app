import React, { Component } from 'react';
import './App.css';
import Popular from './components/popular.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/nav.js';
import Home from './components/home.js';
import Battle from './components/battle.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
