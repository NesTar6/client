import React from 'react'
import Arrow from '../Arrow/Arrow'
import Slide from '@material-ui/core/Slide/Slide'
import CarouselSlide from './CarouselSlide'

const Carousel = (props) => {

    const [index, setIndex] = React.useState(0);
    const [slideIn, setSlideIn] = React.useState(true);
    const [slideDirection, setSlideDirection] = React.useState('left');
    const content = props.content.animals[index].photos[0].full;
    //const numSlides = props.content.animals[0].photos.length;
    
    console.log(content)

    const onArrowClick = (direction) => {
      const increment = direction === 'left' ? -1 : 1;
      //const newIndex = (index + increment + numSlides) % numSlides;
  
      const oppDirection = direction === 'left' ? 'right' : 'left';
      setSlideDirection(direction);
      setSlideIn(false);
  
      setTimeout(() => {
          //setIndex(newIndex);
          setSlideDirection(oppDirection);
          setSlideIn(true);
      }, 500);
    };

    return (
        <div className="carousel">
        <Arrow
                  direction='left'
                  clickFunction={() => onArrowClick('left')}
              />
        <Slide in={slideIn} direction={slideDirection}>
        <div>
        <CarouselSlide content={content} />
        {/* <h4 style={{color: 'white'}}> {index + 1} / {numSlides} </h4> */}
        </div>
        </Slide>
        <Arrow
                  direction='right'
                  clickFunction={() => onArrowClick('right')}
              />
          </div>
    )
}

export default Carousel