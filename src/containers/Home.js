import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Loader from '../components/Loader/Loader'
import DOG_DATA from '../../dummy-data'

const Home = () => {
    const [dogData, setDogData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    let loadingDiv = <Loader />

    if(!isLoading) loadingDiv = <Carousel content={DOG_DATA}/> 

    return (
    <div className='card-content'>
        <div className='match-screen'>
          {loadingDiv}
        </div>
      </div> 
  )
}

export default Home 