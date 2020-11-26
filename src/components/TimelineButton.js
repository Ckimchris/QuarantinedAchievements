import React from 'react';
import Tag from './tag';

const TimelineButtonItem = ({ data }) => {
    return(
    <button className='btn' onclick={data.url} style={{backgroundColor: data.color}}>
        <img className="image" src={data.image}/>
        <h4>{data.title}</h4>
        <p><i>{data.quote}</i></p>
        <Tag data={data}/>
    </button> 
    );
}

export default TimelineButtonItem;