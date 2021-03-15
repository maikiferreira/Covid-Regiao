import React from 'react';
import VideoItem from '../VideoItem/video_item';

function VideoList({videoList}) {
    return(
        <div id="video-list">
            {
                videoList.map(item => (
                    <VideoItem key={item.id.videoId} videoItem={item} />
                ))
            }
        </div>
    )
}

export default VideoList;