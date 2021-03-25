import React from 'react';
import { Card, makeStyles } from '@material-ui/core';

export default function CarouselSlide(props) {
    const pic = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            borderRadius: 5,
            maxHeight: '500px',
            minHeight: '300px',
            ['@media (min-width: 300px) and (max-width: 600px)']: { // eslint-disable-line no-useless-computed-key
                maxHeight: '250px',
                minHeight: '200px'
              },
            minWidth: '300px',
            maxWidth: '80%',
            boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto',
        },
        pic: {
            maxHeight: '500px',
            minHeight: '300px',
            ['@media (min-width: 300px) and (max-width: 600px)']: { // eslint-disable-line no-useless-computed-key
                maxHeight: '250px',
                minHeight: '200px'
              },
            minWidth: '300px',
            maxWidth: '100%',
        },
    }));
 
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <img className={classes.pic} src={pic} alt="screenshot"/>
        </Card>
    );
}