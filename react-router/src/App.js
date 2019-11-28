import React from 'react';

import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact} />
          <Route component={Error}/>
        </Switch>
    </Router>
  );
}


export default App;