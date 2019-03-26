import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import HomePage from './containers/HomePage';
import ContactPage from './containers/ContactPage';
import AboutPage from './containers/AboutPage';
import LoginPage from './containers/LoginPage';
import DashboardPage from './containers/DashboardPage';

const NotFoundPage=()=><h1>Not Found</h1>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route exact path="/dashboard" component={DashboardPage}/>
            <Route path="/dashboard/:category" component={DashboardPage}/>
            <Route path="*" component={NotFoundPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
