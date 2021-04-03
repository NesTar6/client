import React from 'react'
import './Favorites.css'
import Loader from '../../components/Loader/Loader'

const Favorites = (props) => {
    const [isLoading, setIsLoading] = React.useState(true);
    
    let [dogData, setDogData] = React.useState([])

    let loadingDiv = <Loader />

    React.useEffect(()=> {
        fetch(`http://localhost:3001/users/${props.userId}/dogs/`)
        .then(res => res.json())
        .then(res => {
            setDogData(res)
            //setIsLoading(false)
         })
    },[])

    if(!isLoading) {
        loadingDiv = (
            dogData.map((data)=> {
                return (
                <div key={data.id} className="container">
                    <img src={data.photos[0].full}/>
                </div>
            )})
        )
    }

    

    return (
    <div className="dog-list">
        {loadingDiv}
    </div>
  )
}

export default Favorites 