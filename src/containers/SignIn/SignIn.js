import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import './SignIn.css';
import LoginForm from '../../Auth/LoginForm';
import SignUp from '../../components/SignUp/SignUp';

const SignIn = (props) => {
// setState
// login button event to trigger link to /login  Login component
// Sign up is event to trigger link to /signup SignUp component
  const [logginIn, setLogin] = React.useState(false);
  const [signingUp, setSignUp] = React.useState(false);
  // const [home, setHome] = React.useState(true);

  const signUpOrLogin = (e, type) => {
    if (type === 'login') {
      setLogin(true);
      // setHome(false);
    }
    if (type === 'signUp') {
      setSignUp(true);
      // setHome(false)
    }
  };

  const onSignUp = () => {
    console.log('signing up');
    setSignUp(true);
  };

  // components
  let homeCard = (
    <div className="signInButtonGroup">
      <Button className="SIButtons" variant="contained" onClick={(e) => signUpOrLogin(e, 'login')}>Log in</Button>
      <Button className="SIButtons" variant="contained" onClick={(e) => signUpOrLogin(e, 'signUp')}>Sign up</Button>
    </div>
  );

  if (signingUp) {
    homeCard = <SignUp addUserId={props.addUserId}/>;
  }

  if (logginIn) {
    homeCard = <LoginForm addUserId={props.addUserId} onSignUp={onSignUp}/>;
  }
  return (
    <div className="signInWrapper">
      <div className="leftColumn">
        <div className="signInCard">
          <div className="signInLogo">
            <img className="dogIcon" alt="bowow logo" src="https://i.imgur.com/KREnZnZ.png" />
          </div>
          {homeCard}
        </div>
      </div>
      <div className="rightColumn" />
    </div>
  );
};

export default SignIn;
