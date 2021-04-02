import React from 'react';
import { BrowserRouter as Link, Route, Router } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import './Header.css';

// const Header = () => (
//   <nav className="header">
//     <ul className="list-items">
//       <li>
//       <h3 className="title">Bow-Wow</h3>
//       </li>
//       <li>
//       <Link to="/home"><h3>Home</h3></Link>
//       </li>
//       <li>
//         <Link to="/">
//           {' '}
//           <h3>Login</h3>
//           {' '}
//         </Link>
//       </li>
//     </ul>
//   </nav>
// );

 const Header = () => (
<nav className="header"> 
<ul className="list-items" >
  <Link to="/home">
    <li>
      {<div><h2>Bow-Wow</h2></div>}
    </li> 
  </Link>
  <div className="headerAnchors">
    <li>
          <HomeIcon className="headerIcons" style={{ fontSize: 55 }}/>
    </li>
    <li>
      <Link to="/">
        {' '}
         <AccountCircleIcon className="headerIcons" style={{ fontSize: 55 }}/> 
        {' '}
       
      </Link>
      </li>
    <li>
  <AddCircleIcon className="headerIcons" style={{ fontSize: 55 }}/>
  </li>
  </div>
  
</ul>
 

   </nav>
 );

export default Header;
