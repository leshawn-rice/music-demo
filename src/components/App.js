import React, { useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';

// import track_1 from "../album/01_No_Advance.mp3"
// import track_2 from "../album/02_No_Heart.mp3"
// import track_3 from "../album/03_X.mp3"
import track_4 from "../album/04_Savage_Mode.mp3"
// import track_5 from "../album/05_Bad_Guy.mp3"
// import track_6 from "../album/06_Real_Nigga.mp3"
// import track_7 from "../album/07_Mad_High.mp3"
// import track_8 from "../album/08_Feel_It.mp3"
// import track_9 from "../album/09_Ocean_Drive.mp3"

import '../styles/audio.css';


// set controls to false and create a custom audiplayer component

const App = () => {
  const single = track_4;

  useEffect(() => {
    const playMusic = () => {
      const audioPlayer = document.querySelector('audio');
      if (audioPlayer && audioPlayer.paused) {
        audioPlayer.play();
      }
      document.removeEventListener('click', playMusic);
      // document.removeEventListener('scroll', playMusic);
    }
    document.addEventListener('click', playMusic);
    // document.addEventListener('scroll', playMusic);
  }, []);

  return (
    <div className="App">
      <ReactAudioPlayer
        src={single}
        // autoPlay={true}
        controls={true}
        // muted={true}
      />
    </div>
  );
}

export default App;
