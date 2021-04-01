import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import './SignIn.css';
import LoginForm from '../../Auth/LoginForm';
import SignUp from '../../components/SignUp/SignUp'

const SignIn = () => {
// setState
// login button event to trigger link to /login  Login component
// Sign up is event to trigger link to /signup SignUp component
const [logginIn, setLogin] = React.useState(false);
const [signingUp,setSignUp] = React.useState(false);
//const [home, setHome] = React.useState(true);

// components
let homeCard = <div className="signInButtonGroup">
<Button className="SIButtons" variant="contained" onClick={(e) => signUpOrLogin(e, 'login')}>Log in</Button>
<Button className="SIButtons" variant="contained" onClick={(e) => signUpOrLogin(e, 'signUp')}>Sign up</Button>
<span className="forgotPassword">Forgot password?</span>
</div>;

const signUpOrLogin = (e, type) =>{
    
        if(type === 'login') {
           setLogin(true);
           //setHome(false);
        }
        if(type==='signUp') {
            setSignUp(true);
            //setHome(false)
         }
  }

  if(signingUp) {
      homeCard = <SignUp />
  }

  if(logginIn) {
    homeCard = <LoginForm />
  }
    return <div className="signInWrapper" >
       
        <div className="signInCard" >
        <div className="signInLogo"> 
        <img className="dogIcon" src="https://i.imgur.com/KREnZnZ.png"  />
        </div>
             {homeCard} 
        </div>
    </div>
}

export default SignIn 