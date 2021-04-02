import './App.css';
import React from 'react'
import Home from './containers/Home'
import SignIn from './containers/SignIn/SignIn'
import Favorites from './containers/Favorites/Favorites'
import Header from './components/Header/Header';


import {BrowserRouter as Router, Route} from 'react-router-dom'

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
      <Header />
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/home" render={()=><Home addFav={addFav}/>}/>
          <Route exact path="/favorites" render={() => <Favorites favData={favs}/>}/>
      </Router>
    </div>
  )
}

export default App