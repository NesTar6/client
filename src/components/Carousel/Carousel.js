import React from 'react'
import Arrow from '../Arrow/Arrow'
import Slide from '@material-ui/core/Slide/Slide'
import CarouselSlide from './CarouselSlide'
import Modal from '../Modal/Modal'
import './Carousel.css'

const Carousel = (props) => {

    const [index, setIndex] = React.useState(0);
    const [slideIn, setSlideIn] = React.useState(true);
    const [slideDirection, setSlideDirection] = React.useState('right');
    const [disabled, setDisabled] = React.useState(false)
    const [contentDiv, setContentDiv] = React.useState(<div></div>)
    const [status, setStatus] = React.useState(false)
    React.useEffect(() => {
        if(!props.content[index]) {
            console.log(true)
            setContentDiv(<h3>No More Dogs</h3>)
            setDisabled(true)
        } else {
        let content = props.content[index].photos[0] ? props.content[index].photos[0].full : '#'
        
        console.log(props.content[index])
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
        if(direction === 'left') {
            console.log('adding favorite')
            props.addFav(props.content[index].id)
        }
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

    console.log(status)

    return (
        <div className="carousel">
            { status && (
        <Modal closeModal={() => setStatus(false)} data={props.content[index]}> 
        </Modal>
        )}
            <Arrow
                disabled={disabled}
                direction='left'
                clickFunction={() => onArrowClick('right')}
            />
            
                <Slide onClick={() => setStatus(true)} in={slideIn} direction={slideDirection}>
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