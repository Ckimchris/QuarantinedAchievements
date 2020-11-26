import React from 'react';
import timelineData from './TimelineData';
import TimelineItem from './TimelineItem';
import LazyLoad from 'react-lazyload';
import Spinner from './Spinner';

const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.slice(0).reverse().map(data => (
                <LazyLoad
                    height={100}
                    offset={[-100, 100]}
                    placeholder={<Spinner />}
                >
                    <TimelineItem data={data}{...timelineData} />
                </LazyLoad>
            ))}
        </div>
    );

export default Timeline;

