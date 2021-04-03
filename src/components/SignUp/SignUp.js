import {
  Button, TextField, FormControlLabel, FormControl, FormGroup, FormHelperText, FormLabel, Switch,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import './SignUp.css';

const styles = (theme) => ({
  input: {
    height: 40,
  },
  button: {
    height: 10,
    width: 90,
  },
});

const SignUp = withStyles(styles)((props) => {
  console.log(props.addUserId);
  const { classes } = props;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [zipCode, setZipcode] = React.useState('');
  const [children, setChildren] = React.useState(false);
  const [cat, setCat] = React.useState(false);
  const [neutered, setNeutered] = React.useState(false);
  const [houseTrained, setHouseTrained] = React.useState(false);
  const [specialNeeds, setSpecialNeeds] = React.useState(false);
  const [shots, setShots] = React.useState(false);

  const handleFormChange = (e, type) => {
    e.preventDefault();
    if (type === 'email') {
      setEmail(e.target.value);
    }
    if (type === 'password') {
      setPassword(e.target.value);
    }
    if (type === 'zipcode') {
      setZipcode(e.target.value);
    }
  };

  const onSwitchChange = (type) => {
    if (type === 'children') {
      setChildren(!children);
    }
    if (type === 'cat') {
      setCat(!cat);
    }
    if (type === 'neutered') {
      setNeutered(!neutered);
    }
    if (type === 'houseTrained') {
      setHouseTrained(!houseTrained);
    }
    if (type === 'specialNeeds') {
      setSpecialNeeds(!specialNeeds);
    }
    if (type === 'shots') {
      setShots(!shots);
    }
  };

  const onSubmit = () => {
    fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
        preferences: {
          children,
          cats: cat,
          spayed: neutered,
          house_trained: houseTrained,
          special_needs: specialNeeds,
          shots_current: shots,
        },
        location : {
          zipcode: zipCode
        }
      }),

    })
      //.catch((err) = console.log(err))
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        props.addUserId(res.id)
      });
  };

  return (
    <div className="signUpWrapper">
      <TextField
        className="signUpForm"
        label="Email"
        variant="filled"
        size="small"
        InputProps={{ className: classes.input }}
        InputLabelProps={{ shrink: true }}
        onChange={(e) => handleFormChange(e, 'email')}
      />
      <TextField
        className="signUpForm"
        label="Set password"
        type="password"
        variant="filled"
        size="small"
        height="50%"
        InputProps={{ className: classes.input }}
        InputLabelProps={{ shrink: true }}
        onChange={(e) => handleFormChange(e, 'password')}
      />
      <TextField
        className="signUpForm"
        label="Zip Code"
        variant="filled"
        size="small"
        height="50%"
        InputProps={{ className: classes.input }}
        InputLabelProps={{ shrink: true }}
        onChange={(e) => handleFormChange(e, 'zipcode')}
      />

      {/* **********************SWITCHES************************************* */}
      <div className="switchWrapper">
        <div className="switchColumn">
          <FormControlLabel
            labelPlacement="start"
            style={{ color: 'white' }}
            control={(
              <Switch
                className="switch"
                onChange={() => onSwitchChange('children')}
                value={children}
                style={{ color: 'orange' }}
                color="primary"
                size="medium"
              />
            )}
            label="Child friendly"
          />

          <FormControlLabel
            labelPlacement="start"
            style={{ color: 'white' }}
            control={(
              <Switch
                className="switch"
                onChange={() => onSwitchChange('cat')}
                value={cat}
                style={{ color: 'orange' }}
                color="primary"
                size="medium"
              />
            )}
            label="Cat friendly"
          />

          <FormControlLabel
            labelPlacement="start"
            style={{ color: 'white' }}
            control={(
              <Switch
                className="switch"
                onChange={() => onSwitchChange('neutered')}
                value={neutered}
                style={{ color: 'orange' }}
                color="primary"
                size="medium"
              />
            )}
            label="Neutered"
          />
        </div>
        {/* ****************SECOND SWITCH COLUMN******************** */}
        <div className="switchColumn">
          <FormControlLabel
            labelPlacement="start"
            style={{ color: 'white' }}
            control={
              <Switch className="switch" onChange={() => onSwitchChange('houseTrained')} value={houseTrained} style={{ color: 'orange' }} color="primary" size="medium" />
  }
            label="House trained"
          />

          <FormControlLabel
            labelPlacement="start"
            style={{ color: 'white' }}
            control={
              <Switch className="switch" onChange={() => onSwitchChange('specialNeeds')} value={specialNeeds} style={{ color: 'orange' }} color="primary" size="medium" />
  }
            label="Special needs"
          />

          <FormControlLabel
            labelPlacement="start"
            style={{ color: 'white' }}
            control={
              <Switch className="switch" onChange={() => onSwitchChange('shots')} value={shots} style={{ color: 'orange' }} color="primary" size="medium" />
  }
            label="Shots up to date"
          />
        </div>
      </div>

      <Button className="signUpButton" variant="contained" onClick={onSubmit}>
        Sign Up
      </Button>

      {/* <hr className="lineBreak" data-content="OR"/> */}
    </div>
  );
});

export default SignUp;
