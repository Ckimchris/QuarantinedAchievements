import React from 'react';
import PropTypes from 'prop-types';
import timelineData from './TimelineData';
import TimelineItem from './TimelineItem';
import './Timeline.css';


const Timeline = ({ className, reverse}) => {
    const getData = (reverse) =>
    {
        if(reverse)
        {
            return (
                <>
                {timelineData.slice(0).reverse().map(data => (
                    <TimelineItem className={className} data={data}{...timelineData} />
                ))}
                </>
            )
        }
        else
        {
            return (
                <>
                {timelineData.map(data => (
                    <TimelineItem className={className} data={data}{...timelineData} />
                ))}
                </>
            )
        }
    }
    return (
        (
            timelineData.length && (
            <div className="timeline-container">
                {getData(reverse)}
            </div>
        )
    )
)};

Timeline.propTypes = {
    className: PropTypes.string,
    reverse: PropTypes.bool,
};

Timeline.defaultProps = {
    className: 'timeline-item',
    reverse: false
};

export default Timeline;