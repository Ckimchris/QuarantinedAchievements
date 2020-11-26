import React from 'react';
import TimelineButton from './TimelineButton';

const TimelineItem = ({ data }) => (
    <div className="timeline-item-content">
        <TimelineButton data={data}/>    
        <time className="date" style={{color: data.color}}>{data.date}</time>
        <span className="circle" style={{borderColor: data.color}}/>
    </div>
);

export default TimelineItem;