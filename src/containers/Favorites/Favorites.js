import React from 'react'
import './Favorites.css'
import Loader from '../../components/Loader/Loader'
import Modal from '../../components/Modal/Modal'

const Favorites = (props) => {
    const [isFavLoading, setIsFavLoading] = React.useState(true);
    const [isUserLoading, setIsUserLoading] = React.useState(true);
    const [userDBDogs, setUserDBDogs] = React.useState([])
    const [status, setStatus] = React.useState(false)
    const [selectDogData, setSelectDogData] = React.useState({})

    const [dogData, setDogData] = React.useState([])

    let loadingDiv = <Loader />
    let userDogs = <div></div>

    React.useEffect(()=> {
        fetch(`http://localhost:3001/userFavs/${props.userId}`)
        .then(res => res.json())
        .then(res => {
            setDogData(res)
            setIsFavLoading(false)
         })
        .then(()=>{
            console.log(dogData)
        })

        fetch(`http://localhost:3001/userDogs/${props.userId}`)
        .then(res => res.json())
        .then(res => {
            console.log('USER DOGS ', res)
            setUserDBDogs(res)
            setIsUserLoading(false)
         })
        .then(()=>{
            console.log(dogData)
        })

    },[])

    //console.log(selectDogData)

    if(!isFavLoading) {
         loadingDiv = (
             dogData.map((data)=> {
                 return (
                 <div 
                 key={data.id} 
                 onClick={()=>
                    {
                        setSelectDogData(data)
                        setStatus(true)
                     }}
                className="container"
                >
                     <img src={data.photos[0].full}/>
                 </div>
             )})
         )
        
    }

    if(userDBDogs.length > 0) {
        console.log(userDogs, 'AGAIN')
        userDogs = (
            userDBDogs.map((data)=> {
                console.log(data)
                return (
                <div 
                key={data.id} 
                onClick={()=>
                   {
                       setSelectDogData(data)
                       setStatus(true)
                    }}
               className="container"
               >
                    <img src={data.photos ? data.photos : '#'} alt={data.name}/>
                </div>
            )})
        )
    }

    return (
    <div style={{textAlign:'center'}}>
        { status && (
        <Modal closeModal={() => setStatus(false)} data={selectDogData}> 
        </Modal>
        )}
        <h4>Favorites</h4>
        <div className="dog-list">
            {loadingDiv} 
        </div>
        <h4>Your Dogs</h4>
        <div className="dog-list">
            {userDogs}
        </div>
    </div>

  )
}

export default Favorites 