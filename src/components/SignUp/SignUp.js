import { Button, TextField, FormControlLabel, FormControl, FormGroup, FormHelperText, FormLabel, Switch } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import React from 'react'
import './SignUp.css'

const styles = theme => ({
    input: {
      height: 40
    },
    button: {
      height: 10,
      width: 90
    }
  });

const SignUp = withStyles(styles) (props => {
    const { classes } = props;
    return (
        <div className="signUpWrapper"> 
             <TextField 
             className="signUpForm" 
             label="Email" 
             variant="filled" 
             size="small" 
             InputProps={{className: classes.input }}
             InputLabelProps={{shrink: true}}
             onChange
             />
             <TextField 
             className="signUpForm" 
             label="Set password" 
             variant="filled" 
             size="small" 
             height="50%" 
             InputProps={{className: classes.input }} 
             InputLabelProps={{shrink: true}}
             onChange
             />  
             < Button className="signUpButton" variant="contained"size="small" onClick={console.log('test')}>
                Sign Up
              </Button>



{/* **********************SWITCHES************************************* */}
                <div className='switchGroup'>
                <div className='nestedGroup' >
                  <div className="switchWrapper">
                     <p>Child friendly</p>
                          <Switch  name='switch'/>
                  </div>
                <div className="switchWrapper">
                     <p>Cat freindly</p>
                        <Switch name='switch'/>
                  </div>
                </div>
</div>


<FormControlLabel
  labelPlacement='start'
    control ={
    <Switch color='primary' size='small' />
  } label='test label' />
            
            
            <hr className="lineBreak" data-content="OR"/>
            <p>SIGNINWITHGOOGLE</p>
        </div>
    )
});

export default SignUp
