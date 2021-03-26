import React from 'react'
import Arrow from '../Arrow/Arrow'
import Slide from '@material-ui/core/Slide/Slide'
import CarouselSlide from './CarouselSlide'
import './Carousel.css'

const Carousel = (props) => {

    const [index, setIndex] = React.useState(0);
    const [slideIn, setSlideIn] = React.useState(true);
    const [slideDirection, setSlideDirection] = React.useState('right');

    console.log(props.content.animals[index].photos[0].full)
    const content = props.content.animals[index].photos[0].full;
    const numSlides = props.content.animals.length;

    const onArrowClick = (direction) => {
      const increment = direction === 'left' ? -1 : 1;
      const newIndex = (index + increment + numSlides) % numSlides;
  
      const oppDirection = direction === 'left' ? 'right' : 'left';
      setSlideDirection(direction);
      setSlideIn(false);
  
      setTimeout(() => {
          setIndex(newIndex);
          setSlideDirection(oppDirection);
          setSlideIn(true);
      }, 500);
    };

    return (
        <div className="carousel">
            <Arrow
                direction='left'
                clickFunction={() => onArrowClick('right')}
            />
                <Slide in={slideIn} direction={slideDirection}>
                    <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <CarouselSlide name={props.content.animals[index].name} content={content} />
                    </div>
                </Slide>
            <Arrow
                direction='right'
                clickFunction={() => onArrowClick('left')}
            />
          </div>
    )
}

export default Carousel