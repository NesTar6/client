import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import React from 'react'
import './Arrow.css'

const Arrow = (props) => {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <FaChevronLeft size={56} style={{marginRight: '25px'}} className='arrow'/> : <FaChevronRight style={{marginLeft: '25px'}} size={56} className='arrow'/>;

    return <div onClick={clickFunction}>{icon}</div>;
}

export default Arrow