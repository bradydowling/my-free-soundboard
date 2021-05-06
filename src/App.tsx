import React, { useState } from 'react';
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'
import logo from './logo.svg';
import './App.css';
import { ReactMic } from 'react-mic';

function App() {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const onStop = (recordedBlob: any) => {
    console.log("finished recording:", recordedBlob);
  };

  const audioSource = {
    type: "audio",
    sources: [{
      src: "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
      type: "audio/mp3",
    }]
  } as Plyr.SourceInfo;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ReactMic
          record={isRecording}
          className="sound-wave"
          onStop={onStop}
          strokeColor="#000000"
          backgroundColor="#FF4081" />
        <button onClick={startRecording} type="button">Start</button>
        <button onClick={stopRecording} type="button">Stop</button>
        <Plyr
          source={audioSource}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
