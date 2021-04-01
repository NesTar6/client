import './App.css';
import React from 'react'

import Home from './containers/Home'
import SignIn from './containers/SignIn/SignIn'
import Favorites from './containers/Favorites/Favorites'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App() {
  const [favs, setFavs] = React.useState([])

  const addFav = (dogData) => {
      const newFavs = favs
      newFavs.push(dogData)
      setFavs(newFavs)
      console.log(favs)
  }

  

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
              <Link to="/favorites"> <h3>Favorites</h3> </Link> 
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/home" render={()=><Home addFav={addFav}/>}/>
          <Route exact path="/favorites" render={() => <Favorites favData={favs}/>}/>
      </Router>
    </div>
  )
}

export default App;