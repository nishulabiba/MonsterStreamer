import  { useState } from 'react';
import './VideoPlayer.css'; // Import CSS file

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="video-container mx-auto -mt-40">
      {isPlaying ? (
        <div className="video-wrapper">
          <video controls className="video">
            <source src="/new-video-for-monster-carpet-high.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className="video-overlay" onClick={handlePlay}>
           <div className="video-wrapper">
          <video  className="video">
            <source src="/new-video-for-monster-carpet-high.mp4" type="video/mp4" />
          </video>
        </div>
          <div className="play-button">
          
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
