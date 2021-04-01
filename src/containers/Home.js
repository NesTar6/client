import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const [dogData, setDogData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  let loadingDiv = <Loader />;

  React.useEffect(() => {
    fetch('http://localhost:3001/api')
      .then((res) => res.json())
      .then((res) => {
        setDogData(res);
        setIsLoading(false);
      });
  }, []);

  if (!isLoading) loadingDiv = <Carousel content={dogData} />;

  return (
    <div className="card-content">
      <div className="match-screen">
        {loadingDiv}
      </div>
    </div>
  );
};

export default Home;
