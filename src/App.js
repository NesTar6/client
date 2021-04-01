import './App.css';
import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import SignIn from './containers/SignIn';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Route exact path="/" component={SignIn} />
        <Route exact path="/home" component={Home} />
      </Router>
    </div>
  );
}

export default App;
