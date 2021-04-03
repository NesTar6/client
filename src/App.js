import './App.css';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Favorites from './containers/Favorites/Favorites';
import Home from './containers/Home';
import SignIn from './containers/SignIn/SignIn';
import Header from './components/Header/Header';
import AddDog from './components/AddDog/AddDog';

function App() {
  const [userId, setUserId] = React.useState();

  const addFav = (dogData) => {
    fetch(`http://localhost:3001/users/${userId}/dogs/${dogData}`, {
      method: 'POST',
    })
      .catch((err) => console.log)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  const addUserId = (userId) => {
    setUserId(userId);
  };

  console.log(userId);

  let Auth = <Route exact path="/" render={() => <SignIn addUserId={addUserId} />} />;
  let HomeComp = <Redirect to="/" />;
  let Favorite = <Redirect to="/" />;
  let addDog = <Redirect to="/" />;

  if (userId) {
    Auth = <Redirect to="/home" />;
    HomeComp = <Route exact path="/home" render={() => <Home userId={userId} addFav={addFav} />} />;
    Favorite = <Route exact path="/favorites" render={() => <Favorites userId={userId} />} />;
    addDog = <Route exact path="/addDog" render={() => <AddDog userId={userId} />} />;
  }

  return (
    <div className="App">
      <Router>
        <Header />
        {Auth}
        {HomeComp}
        {Favorite}
        {addDog}
      </Router>
    </div>
  );
}

export default App;
