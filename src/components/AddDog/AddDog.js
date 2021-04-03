/* eslint-disable object-shorthand */
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
  const [img, setImg] = React.useState('');

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
    if (type === 'image') {
      setImg(e.target.value);
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
          name: name,
          children: children,
          cats: cat,
          spayed: neutered,
          house_trained: houseTrained,
          special_needs: specialNeeds,
          shots_current: shots,
          age: age,
          gender: gender,
          description: description,
          photos: img,
          location: location,
        },
      ),
    })
      .then((res) => res.json())
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
        <h1 className="cardName" style={{ textAlign: 'center' }}>HE CHEWED THE COUCH</h1>
        {/* FORMS */}
        <div className="addDogFormGroup">
          <TextField
            className="addDogForm"
            label="Name"
            variant="filled"
            InputProps={{ className: classes.input }}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => handleFormChange(e, 'name')}
          />
        </div>
        <div className="addDogFormGroup">
          <TextField
            className="addDogForm"
            label="Description"
            variant="filled"
            InputProps={{ className: classes.input }}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => handleFormChange(e, 'description')}
          />
        </div>
        <div className="addDogFormGroup">
          <TextField
            className="addDogForm"
            label="Image URL"
            variant="filled"
            InputProps={{ className: classes.input }}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => handleFormChange(e, 'image')}
          />
        </div>
        <div className="addDogSelects">

          <TextField
            style={{ margin: '10px' }}
            className="addDogZipForm"
            label="Zipcode"
            variant="filled"
            InputProps={{ className: classes.input }}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => handleFormChange(e, 'location')}
          />
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel style={{ color: '#3B2826' }} htmlFor="outlined-age-native-simple">Age</InputLabel>
            <Select
              native
              className="addDogSelect"
              style={{ color: 'black', backgroundColor: '#fff8e7', height: '50px' }}
              label="Age"
              inputProps={{ name: 'Age' }}
              onChange={(e) => onSelectChange(e, 'age')}
            >
              {/* {ageList()} */}
              <option aria-label="None" value="" />
              <option value="puppy">Puppy</option>
              <option value="young">Young</option>
              <option value="adult">Adult</option>
              <option value="senior">Senior</option>
            </Select>
          </FormControl>

          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel style={{ color: '#3B2826' }} htmlFor="outlined-age-native-simple">Gender</InputLabel>
            <Select
              native
              className="addDogSelect"
              style={{ color: 'black', backgroundColor: '#fff8e7', height: '50px' }}
              label="Gender"
              inputProps={{ name: 'Gender' }}
              onChange={(e) => onSelectChange(e, 'gender')}
            >
              <option aria-label="None" value="" />
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </FormControl>
        </div>

        {/* SWITCHES */}
        <div className="addDogSwitchWrapper">
          <div className="switchRow">
            <FormControlLabel
              labelPlacement="start"
              style={{ color: 'white' }}
              control={(
                <Switch
                  className="switch"
                  onChange={() => onSwitchChange('children')}
                  style={{ color: '#FF8000' }}
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
                  style={{ color: '#FF8000' }}
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
                  style={{ color: '#FF8000' }}
                  color="primary"
                  size="medium"
                />
          )}
              label="Neutered"
            />
          </div>
          <div className="switchRow">
            <FormControlLabel
              labelPlacement="start"
              style={{ color: 'white' }}
              control={(
                <Switch
                  className="switch"
                  onChange={() => onSwitchChange('specialNeeds')}
                  style={{ color: '#FF8000' }}
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
                  style={{ color: '#FF8000' }}
                  color="primary"
                  size="medium"
                />
          )}
              label="Vaccinated"
            />
            <FormControlLabel
              labelPlacement="start"
              style={{ color: 'white' }}
              control={(
                <Switch
                  className="switch"
                  onChange={() => onSwitchChange('shots')}
                  style={{ color: '#FF8000' }}
                  color="primary"
                  size="medium"
                />
          )}
              label="House trained"
            />
          </div>

        </div>
        <div className="buttonWrapper">
          <Button className="addDogButton" variant="contained" onClick={onSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
});
export default AddDog;
