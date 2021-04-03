/* eslint-disable no-plusplus */
import {
  Button, TextField, FormControlLabel, FormControl,
  FormLabel, Switch, MenuItem, InputLabel, Select,
} from '@material-ui/core';
// import NativeSelect from '@material-ui/core/NativeSelect';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import './AddDog.css';

const styles = (theme) => ({
  input: {
    height: 50,
  },
  button: {
    height: 10,
    width: 90,
  },
});

const AddDog = withStyles(styles)((props) => {
  const { classes } = props;
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [age, setAge] = React.useState('');
  const [children, setChildren] = React.useState(false);
  const [cat, setCat] = React.useState(false);
  const [neutered, setNeutered] = React.useState(false);
  const [houseTrained, setHouseTrained] = React.useState(false);
  const [specialNeeds, setSpecialNeeds] = React.useState(false);
  const [shots, setShots] = React.useState(false);

  const ageList = () => {
    const list = [];
    for (let i = 0; i <= 20; i++) {
      // console.log(i);
      list.push(<option value={i}>{i}</option>);
    }
    return list;
  };
  // EDGE CASES NEEDED
  const handleFormChange = (e, type) => {
    // e.preventDefault();
    if (type === 'name') {
      setName(e.target.value);
    }
    if (type === 'description') {
      setDescription(e.target.value);
    }
    if (type === 'location') {
      setLocation(e.target.value);
      // console.log(location);
    }
  };

  const onSubmit = () => {
    fetch(`http://localhost:3001/addDog/${props.userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          name,
          children,
          cats: cat,
          spayed: neutered,
          special_needs: specialNeeds,
          shots_current: shots,
          age: 2,
          gender: 'female',
          description,
          image: null,
          location,
        },
      ),
    })
    .then(res => res.json())
    .then((res) => {
      console.log(res);
    });
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

  const onSelectChange = (e, type) => {
    console.log(e.target.value);
    if (type === 'age') {
      setAge(e.target.value);
    }
    if (type === 'gender') {
      setGender(e.target.value);
    }
  };

  return (
    <div className="addDogWrapper">
      <div className="addDogCard">
        {/* FORMS */}
        <TextField
          className="addDogForm"
          label="Name"
          variant="filled"
          InputProps={{ className: classes.input }}
          InputLabelProps={{ shrink: true }}
          onChange={(e) => handleFormChange(e, 'name')}
        />

        <TextField
          className="addDogForm"
          label="Description"
          variant="filled"
          InputProps={{ className: classes.input }}
          InputLabelProps={{ shrink: true }}
          onChange={(e) => handleFormChange(e, 'description')}
        />

        <TextField
          className="addDogZipForm"
          label="Zipcode"
          variant="filled"
          InputProps={{ className: classes.input }}
          InputLabelProps={{ shrink: true }}
          onChange={(e) => handleFormChange(e, 'location')}
        />

        {/* SWITCHES */}
        <div className="addDogswitchColumn">
          <FormControlLabel
            labelPlacement="start"
            style={{ color: 'white' }}
            control={(
              <Switch
                className="switch"
                onChange={() => onSwitchChange('children')}
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
                style={{ color: 'orange' }}
                color="primary"
                size="medium"
              />
          )}
            label="Neutered"
          />
        </div>
        <div className="addDogswitchColumn">
          <FormControlLabel
            labelPlacement="start"
            style={{ color: 'white' }}
            control={(
              <Switch
                className="switch"
                onChange={() => onSwitchChange('specialNeeds')}
                style={{ color: 'orange' }}
                color="primary"
                size="medium"
              />
          )}
            label="Special needs"
          />

          <FormControlLabel
            labelPlacement="start"
            style={{ color: 'white' }}
            control={(
              <Switch
                className="switch"
                onChange={() => onSwitchChange('shots')}
                style={{ color: 'orange' }}
                color="primary"
                size="medium"
              />
          )}
            label="Vaccinated"
          />
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel style={{ color: '#3B2826' }} htmlFor="outlined-age-native-simple">age</InputLabel>
            <Select
              native
              className="testAD"
              style={{ color: 'black', backgroundColor: '#fff8e7' }}
              label="Age"
              inputProps={{ name: 'age' }}
              onChange={(e) => onSelectChange(e, 'age')}
            >
              {/* {ageList()} */}
              <option aria-label="None" value="" />
              <option value="puppy">puppy</option>
              <option value="young">young</option>
              <option value="adult">adult</option>
              <option value="senior">senior</option>
            </Select>
          </FormControl>

          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel style={{ color: '#3B2826' }} htmlFor="outlined-age-native-simple">gender</InputLabel>
            <Select
              native
              className="testAD"
              style={{ color: 'black', backgroundColor: '#fff8e7' }}
              label="gender"
              inputProps={{ name: 'gender' }}
              onChange={(e) => onSelectChange(e, 'gender')}
            >
              <option aria-label="None" value="" />
              <option value="male">male</option>
              <option value="female">female</option>
            </Select>
          </FormControl>

          <Button className="addDogButton" variant="contained" onClick={onSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
});
export default AddDog;
