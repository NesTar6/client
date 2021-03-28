import React from 'react'
import Arrow from '../Arrow/Arrow'
import Slide from '@material-ui/core/Slide/Slide'
import CarouselSlide from './CarouselSlide'
import './Carousel.css'

const Carousel = (props) => {

    const [index, setIndex] = React.useState(0);
    const [slideIn, setSlideIn] = React.useState(true);
    const [slideDirection, setSlideDirection] = React.useState('right');
    const [disabled, setDisabled] = React.useState(false)
    const [contentDiv, setContentDiv] = React.useState(<div></div>)
    React.useEffect(() => {

        console.log(props.content)
        
        if(!props.content[index]) {
            console.log(true)
            setContentDiv(<h3>No More Dogs</h3>)
            setDisabled(true)
        } else {
        console.log('working')
        let content = '#'
        if(props.content[index].photos[0]) {
          content = props.content[index].photos[0].full
        } 

          setContentDiv(<CarouselSlide 
            age={props.content[index].age} 
            breeds={props.content[index].breeds.primary ? props.content[index].breeds.primary : 'NA' } 
            size={props.content[index].size} 
            gender={props.content[index].gender} 
            name={props.content[index].name} 
            content={content} 
            />)
         }   

    }, [index])

    const numSlides = props.content.length;

    const onArrowClick = (direction) => {
        if(!disabled) {
        const increment = 1;
        const newIndex = (index + increment + numSlides) % numSlides;
        
        const oppDirection = direction === 'left' ? 'right' : 'left';
        setSlideDirection(direction);
        setSlideIn(false);
            
        setTimeout(() => {
            delete props.content[index]
            setIndex(newIndex);
            setSlideDirection(oppDirection);
            setSlideIn(true);
        }, 500);
      } else {
          return
      }
    };

    

    return (
        <div className="carousel">
            <Arrow
                disabled={disabled}
                direction='left'
                clickFunction={() => onArrowClick('right')}
            />
                <Slide in={slideIn} direction={slideDirection}>
                    <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    {contentDiv}
                    </div>
                </Slide>
            <Arrow
                disabled={disabled}
                direction='right'
                clickFunction={() => onArrowClick('left')}
            />
        </div>
    )
}

export default Carousel