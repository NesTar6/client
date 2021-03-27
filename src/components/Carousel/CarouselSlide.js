import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import './Carousel.css'

export default function CarouselSlide(props) {
    const pic = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            height:'50vh',
            width: '30vw',
            minWidth: '200px',
            maxWidth: '400px',
            // ['@media (min-width: 300px) and (max-width: 600px)']: { // eslint-disable-line no-useless-computed-key
            //     maxHeight: '350px',
            //     minHeight: '200px',
            //     width: '150px'
            //   },
            boxShadow: '10px 10px 10px #5e5d5c',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '10px',
            '& div' : {
                opacity: '1',
                zIndex: '1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                height:'50vh',
                minWidth: '200px',
                width: '30vw',
                maxWidth: '400px',
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.50), transparent)',
                // ['@media (min-width: 300px) and (max-width: 600px)']: { // eslint-disable-line no-useless-computed-key
                //     height: '250px',
                //     width: '150px'
                // },
                //width: '100%',
                transition: 'opacity ease-in-out 356ms',
                borderRadius: '10px',
            },
            '& div:hover' : {
                opacity: '0',
                // ['@media (min-width: 300px) and (max-width: 600px)']: { // eslint-disable-line no-useless-computed-key
                //     height: '250px',
                //     width: '150px'
                // },
                //width: '100%',
                borderRadius: '10px',
            },
            "& img" : {
                position:'absolute',
                display: 'block',
                objectFit: 'fill',
                objectPosition: 'top center',
                overflow: 'hidden',
                height:'50vh',
                minWidth: '200px',
                width: '30vw',
                zIndex: '1',
                maxWidth: '400px',
                // ['@media (min-width: 300px) and (max-width: 600px)']: { // eslint-disable-line no-useless-computed-key
                //     height: '250px',
                //     width: '150px'
                // },
                borderRadius: '10px'
            },
          "&& h3" : {
            color: 'white',
            textAlign: 'center',
            fontSize: '100%',
            width: '100%',
            margin: '1% 0',
            textShadow: '0 2px 3px rgba(0, 0, 0, 0.3)',
            zIndex: '3',
            borderRadius: '10px',
            fontFamily: 'Indie Flower, cursive',
            }
        },
    }));
 
    const classes = useStyles();

    return (
        <div className="dog_display">
            <h3>{props.name}</h3>
            <Card className={classes.card}>
                <img src={pic} alt="screenshot"/>
                    <div >   
                        <h3>Age: {props.age}</h3>
                        <h3>Breed: {props.breeds}</h3>
                        <h3>Gender: {props.gender}</h3>
                        <h3>Size: {props.size}</h3>
                    </div>   
             </Card> 
        </div>

    );
}