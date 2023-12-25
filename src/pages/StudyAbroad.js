import React from 'react';
import YouTube from 'react-youtube';
// import './styles/StudyAbroad.css';

const StudyAbroad = () => {
    const videoId = 'Mbyhpt3aHUY';
    return (
      <div>
        <h2>Study Abroad</h2>
        <p>This is a placeholder for the study abroad page content.</p>
        <YouTube videoId={videoId} />
      </div>
    );
  };
  
  export default StudyAbroad;