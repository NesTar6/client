import { NotListedLocation } from '@material-ui/icons';
import React from 'react';
import './Modal.css'

const Modal = (props) => {

 console.log(props.data)

//  if(props.data.photos === null) {
//    props.data.photos = [{}]
//  } else {
//    props.data.photos = [props.photos]
//  }
 

//  if(!props.data.breeds) {
//   props.data.breeds = {primary: 'Good Boy'}
//  }

//  if(!props.data.contact) {
//    props.data.contact = {
//   email: null,
//   phone: null,
//   address: null}
//  }

//  if(props.data.contact.address) {
//   props.data.contact.address = null
// }

 console.log(props.data)

  return (
    <div className="overlay" onClick={props.closeModal}>
      <div className="content">
        <div className="grid">
            <div className="header-box1"><span>{props.data.name ? props.data.name : 'No Name'} | {props.data.breeds.primary ? props.data.breeds.primary : 'No Breed'}</span></div>
            {props.data.photos[0] ? <div className="box1"><img src={props.data.photos[0].full ? props.data.photos[0].full : '#'} alt="screenshot"/></div> : <div></div>}
            <div className="box2"><span>{props.data.description ? props.data.description : 'No description'}</span></div>
            <div className="box8">
              <div>
                <span >{props.data.contact ? props.data.contact.email : 'No email'}</span>
              </div>
              <div>
                <span >{props.data.contact ? props.data.contact.phone : 'No phone'}</span>
              </div>
              <div>
                <span >{props.data.contact.address ? props.data.contact.address.address1 : 'No address'}</span>
              </div>
              <div>
                <span >{props.data.contact.address ? props.data.contact.address.city : ''}, {props.data.contact.address ? props.data.contact.address.postcode : ''}, {props.data.contact.address ? props.data.contact.address.state : ''} </span>
              </div>
            </div>
            {props.data.photos[1] ? <div className="box3"><img src={props.data.photos[1].medium ? props.data.photos[1].medium : '#'} alt="screenshot"/></div> : <div></div>}
            {props.data.photos[2] ? <div className="box4"><img src={props.data.photos[2].medium ? props.data.photos[2].medium : '#'} alt="screenshot"/></div> : <div></div>}
            {props.data.photos[3] ? <div className="box5"><img src={props.data.photos[3].medium ? props.data.photos[3].medium : '#'} alt="screenshot"/></div> : <div></div>}
            {props.data.photos[4] ? <div className="box6"><img src={props.data.photos[4].medium ? props.data.photos[4].medium : '#'} alt="screenshot"/></div> : <div></div>}
            {props.data.photos[5] ? <div className="box7"><img src={props.data.photos[5].medium ? props.data.photos[5].medium : '#'} alt="screenshot"/></div> : <div></div>}
        </div>
      </div>
    </div>
  );
};


export default Modal;