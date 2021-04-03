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

    let loadingDiv = (
    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <Loader />
        </div>
    )
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
            <div className="dog-list">
            { dogData.map((data)=> {
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
                 )})}
            </div>
        )
    }

    if(userDBDogs.length > 0) {
        userDogs = (
            <div className="dog-list">
            { userDBDogs.map((data)=> {
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
                     <img src={data.photos} alt={data.name}/>
                 </div>
                 )})}
            </div>
        )
    }

    return (
    <div style={{textAlign:'center'}}>
        { status && (
        <Modal closeModal={() => setStatus(false)} data={selectDogData}> 
        </Modal>
        )}
        <h4>Favorites</h4>
            {loadingDiv}  
        <h4>Your Dogs</h4>
            {userDogs}
    </div>

  )
}

export default Favorites 