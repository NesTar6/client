import './App.css';
import React from 'react'
import Carousel from './components/Carousel/Carousel'
import Loader from './components/Loader/Loader'
import DOG_DATA from '../dummy-data'

function App() {

  const [dogData, setDogData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
     setIsLoading(true)
     setTimeout(()=>{
       //FETCH REQUEST 
       //.then(handle response)
       //.then(DO BELOW)
       setIsLoading(false)
       setDogData(DOG_DATA)
     }, 3000)
     
 }, [])

  //setIsLoading(true)

  console.log(DOG_DATA)

  let loadingDiv = <Loader />

  if(!isLoading) loadingDiv = <Carousel content={DOG_DATA}/> 

  return (
    <div className="App">
      <nav className="header">
        <ul className="list-items">
          <li>
            <h3>Home</h3>
          </li>
          <li>
            <h3>Kevin</h3>
          </li>
          <li>
          </li>
        </ul>
      </nav>
      <div className='card-content'>
        {loadingDiv}
      </div> 
    </div>
  )
}

export default App;