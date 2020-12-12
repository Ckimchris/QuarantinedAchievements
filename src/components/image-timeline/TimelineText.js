import React from 'react';
import Tag from './TimelineTag';

const openInNewTab = (url) =>{
    const newWindow = window.open(url, '_blank', 'noopener noreferrer')
    if (newWindow) newWindow.opener = null
}

const TimelineText = ({ data }) => {
    return(
    <div>
        <h4><a onClick={() => {openInNewTab(data.url)}}>{data.title}</a></h4>
        <p><i>{data.text}</i></p>
        <Tag data={data}/>
    </div>
    );
}

export default TimelineText;
