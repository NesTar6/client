import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import React from 'react'
import './Arrow.css'

const Arrow = (props) => {

    let style = {
        margin: '25px'
    } 

    if (props.disabled) style = {
        color: 'grey',
        margin: '25px'
    }

    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <FaChevronLeft size={56} style={style} className='arrow'/> : <FaChevronRight style={style} size={56} className='arrow'/>;

    return <div onClick={clickFunction}>{icon}</div>;
}

export default Arrow