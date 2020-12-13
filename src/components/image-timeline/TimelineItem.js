import React from 'react';
import TimelineButton from './TimelineButton';

const TimelineItem = ({ className, data }) => (
    <div className={className}>
        <div className="timeline-item-content">
            <TimelineButton data={data}/>    
            <span className="circle" style={{borderColor: data.color}}/>
        </div>
    </div>
);

export default TimelineItem;