import React from 'react'
import Carousel from '../components/Carousel/Carousel';
import Loader from '../components/Loader/Loader';

const Home = (props) => {
    const [dogData, setDogData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    
    React.useEffect(() => {
      console.log('hello')
      fetch('http://localhost:3001/api')
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

  if(!isLoading) loadingDiv = <Carousel addFav={props.addFav} content={dogData}/> 

  return (
    <div className="card-content">
      <div className="match-screen">
        {loadingDiv}
      </div>
    </div>
  );
};

export default Home;
