import { useState } from "react";
import "./App.css";

function App() {
  const [playVideo, setPlayVideo] = useState(false);

  const handleLaunch = () => {
    setPlayVideo(true);
  };

  const handleVideoEnd = () => {
    window.location.href = "https://ignitia.in/";
  };

  return (
    <div className={playVideo ? "video-container" : "container"}>
      {!playVideo ? (
        <div className="center-content">
          <img src="/ignitia-logo.png" alt="Logo" id="logo" />
          <h1 id="igni">We are live</h1>
          <button id="igniBtn" onClick={handleLaunch} className="launch-btn">
            <span style={{ color: "black" }}>Launch</span>
          </button>
        </div>
      ) : (
        <video className="full-video" autoPlay onEnded={handleVideoEnd}>
          <source src="/preloader.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default App;
