import './App.css';
import React from 'react'

import Home from './containers/Home'
import SignIn from './containers/SignIn'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
          <nav className="header">
            <ul className="list-items">
              <li>
                <Link to="/home"><h3>Home</h3></Link>
              </li>
              <li>
                <h3 className='title'>Bow-Wow</h3>
              </li>
              <li>
              <Link to="/"> <h3>Login</h3> </Link> 
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/home" component={Home}/>
      </Router>
    </div>
  )
}

export default App;