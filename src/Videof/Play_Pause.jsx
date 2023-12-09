import React, { useState, useEffect, useRef } from "react";
import vid from '../Video1.mp4'

function Play_Pause() {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const savedTime = localStorage.getItem("videoTime");
    if (savedTime) {
      setCurrentTime(parseFloat(savedTime));
    }
  }, []);

  const handlePlay = (timeInSeconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime = timeInSeconds;
      videoRef.current.play();
      setIsPlaying(true);
      setCurrentTime(timeInSeconds);
      localStorage.setItem("videoTime", timeInSeconds.toString());
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setCurrentTime(videoRef.current.currentTime);
      localStorage.setItem(
        "videoTime",
        videoRef.current.currentTime.toString()
      );
    }
  };

  const fromStart = () => {
    setCurrentTime(0)
    localStorage.removeItem('videoTime')
  }

  return (
    <div>
      <video
      width={"30%"}
        height={"400px"}
        ref={videoRef}
        src={vid}
        onTimeUpdate={() => setCurrentTime(videoRef.current.currentTime)}
        // onPlay={() => setIsPlaying(true)}
        // onPause={() => setIsPlaying(false)}
        onPlay={() => handlePlay(currentTime)}
        onPause={handlePause}
        controls
      />
      <button onClick={fromStart}>Restart</button>

      {isPlaying ? (
        <button onClick={handlePause}>Pause</button>
      ) : (
        <button onClick={() => handlePlay(currentTime)}>Play</button>
      )}

      
      
      {/* <p>Current Time: {currentTime.toFixed(2)}</p> */}
    </div>
  );
}

export default Play_Pause;