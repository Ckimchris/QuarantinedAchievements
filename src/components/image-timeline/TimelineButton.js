import React from 'react';
import TimelineText from './TimelineText';
import ModalImage from "../modal-image";

const TimelineButtonItem = ({ data }) => {
    return(
    <button className='btn' style={{backgroundColor: data.color}}>
        <ModalImage 
            small={data.image}
            large={data.image}
        />
        <TimelineText data={data}/>
    </button> 
    );
}

export default TimelineButtonItem;