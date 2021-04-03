/* eslint-disable no-console */
// rafce imports React, exports and creates function with ES7 React/Redux/GraphQL/React-Native snippets extention
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import './LoginForm.css';
import {Redirect} from 'react-router-dom'

const styles = (theme) => ({
  input: {
    height: 40,
  },
  button: {
    height: 10,
  },
});

const LoginForm = withStyles(styles)((props) => {
  const { classes } = props;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChange = (e, type) => {
    e.preventDefault();
    if (type === 'email') {
      setEmail(e.target.value);
    }
    if (type === 'password') {
      setPassword(e.target.value);
    }
  };

  const onSubmit = () => {
    console.log('E-Mail: ', email, ' Password: ', password);
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'access-control-allow-origin': '*',
        'content-type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify(
        {
          user: {
            email: email,
            password: password,
          },
        },
      ),
    })
      .catch(err => console.log)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        props.addUserId(res.id)
      });
  };

  return (
    <div className="loginForm">
      <TextField
        className="UNForm"
        label="Email"
        variant="filled"
        size="small"
        InputProps={{ className: classes.input }}
        InputLabelProps={{ shrink: true }}
        value={email}
        onChange={(e) => handleChange(e, 'email')}
      />
      {/* hide password */}
      <TextField
        className="PWForm"
        label="Password"
        type="password"
        variant="filled"
        size="small"
        height="50%"
        InputProps={{ className: classes.input }}
        InputLabelProps={{ shrink: true }}
        value={password}
        onChange={(e) => handleChange(e, 'password')}
      />
      <Button
        className="loginButton"
        variant="contained"
        size="small"
        onClick={onSubmit}
      >
        Log in
      </Button>

      <div className="loginAnchors">
        <button className="forgotPassword" type="button">Forgot password?</button>
        <button className="signUpAnchor" type="button" onClick={onSubmit}>
          Sign up
        </button>

      </div>
    </div>
  );
});

export default LoginForm;
