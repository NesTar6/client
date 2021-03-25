import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import React from 'react'

const Arrow = (props) => {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <FaChevronLeft style={{color:'white'}}/> : <FaChevronRight style={{color:'white'}}/>;

    return <div onClick={clickFunction}>{icon}</div>;
}

export default Arrow