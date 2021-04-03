import React from 'react'
import Carousel from '../components/Carousel/Carousel';
import Loader from '../components/Loader/Loader';
import {Redirect} from 'react-router-dom'

const Home = (props) => {
    const [dogData, setDogData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    
    React.useEffect(() => {

      console.log('USER ID ', props.userId)

      if(!props.userId) {
        return <Redirect to="/"/>
      }

      console.log('hello')
      fetch(`http://localhost:3001/api/${props.userId}`)
        .then(console.log('fetched'))
        .then(res => res.json())
        .then((res) => {
          console.log(res)
          setDogData(res);
          setIsLoading(false);
        });
    }, []);

    let loadingDiv = <Loader />

    //console.log(dogData)

  if(!isLoading) loadingDiv = <Carousel userId={props.userId} addFav={props.addFav} content={dogData}/> 

  

  return (
    <div className="card-content">
      <div className="match-screen">
        {loadingDiv}
      </div>
    </div>
  );
};

export default Home;
