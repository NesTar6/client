import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Favorites from './containers/Favorites/Favorites';
import Home from './containers/Home';
import SignIn from './containers/SignIn/SignIn';
import Header from './components/Header/Header';
import AddDog from './components/AddDog/AddDog';

function App() {
  const [favs, setFavs] = React.useState([]);

  const addFav = (dogData) => {
    const newFavs = favs;
    newFavs.push(dogData);
    setFavs(newFavs);
    console.log(favs);
  };

  return (
    <div className="App">

      <Router>
        <Header />
        <Route exact path="/" component={SignIn} />
        <Route exact path="/home" render={() => <Home addFav={addFav} />} />
        <Route exact path="/favorites" render={() => <Favorites favData={favs} />} />
        <Route exact path="/addDog" component={AddDog} />
      </Router>
    </div>
  );
}

export default App;
