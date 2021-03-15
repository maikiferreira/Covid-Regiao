import React from 'react';
import "./video_item.css"

var VideoItem = ({videoItem}) => {
    const videoSrc = `https://www.youtube.com/embed/${videoItem.id.videoId}`;
    
    return(
        <span className="video">
            <iframe src={`${videoSrc}`} title="video" frameBorder="0"></iframe>
        </span>
    );
}

export default VideoItem;
