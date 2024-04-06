import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { YouTubePlaylist } from '@codesweetly/react-youtube-playlist';
function App() {
  
  return (
    <>
      <YouTubePlaylist
        apiKey="AIzaSyDTxExTj-o23n2ERc8InGPv0JOi43nDFSk"
        playlistId="PLqK5ZvEcjZ-wHXyggNHxWfvLksnwJTHfA"
        uniqueName="Zumba"
      />
    </>
  );
}

export default App;
