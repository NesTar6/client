import React from 'react'
import './Favorites.css'
//import Loader from '../../components/Loader/Loader'

const Favorites = (props) => {
    //const [isLoading, setIsLoading] = React.useState(true);
    
    //let loadingDiv = <Loader />

    React.useEffect(()=> {
        // fetch('http://localhost:3001/api')
        // .then(res => res.json())
        // .then(res => {
        //     setDogData(res)
        //     setIsLoading(false)
        // })
    },[])

    //if(!isLoading) 

    console.log(props.favData)

    return (
    <div className="dog-list">
        {props.favData.map((data)=> {
            return (
            <div key={data.id} className="container">
                <img src={data.photos[0].full}/>
            </div>
        )})}
    </div>
  )
}

export default Favorites 