import React from 'react';

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width={props.width}
      height={props.height}
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
      }}
    />
  </div>
);

export default Video;
