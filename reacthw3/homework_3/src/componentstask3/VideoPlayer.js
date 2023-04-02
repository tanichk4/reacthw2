import React, { useRef, useState } from 'react';
import Video from './video.mp4'

function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    videoRef.current?.pause();
  };

  const handleLoadedMetadata = () => {
    setDuration(Math.floor(videoRef.current.duration));
  };

  return (
    <div>
      <video
        ref={videoRef}
        src={Video}
        style={{
          display: 'flex',
          width: 500,
          height: 500
        }}
        onLoadedMetadata={handleLoadedMetadata}
      />
      <div>
        {!isPlaying && <button onClick={handlePlay}>Play</button>}
        {isPlaying && <button onClick={handlePause}>Pause</button>}
        <span>{duration}</span>
      </div>
    </div>
  );
}

export default VideoPlayer