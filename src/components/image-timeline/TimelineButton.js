import React from 'react';
import TimelineText from './TimelineText';
import ModalImage from "../modal-image";

const openInNewTab = (url) =>{
    const newWindow = window.open(url, '_blank', 'noopener noreferrer')
    if (newWindow) newWindow.opener = null
}

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