import React, { useState } from 'react';
import { Gif } from '@giphy/react-components';
import GifComponent from './components/GifComponent/GifComponent';
import './App.css';
import { AnimalsTag } from './domain/types';
import AnimalsSelector from './components/AnimalsSelector/AnimalsSelector';

const N_GIFS_SET = 12;

function App() {
  const [tag, setTag] = useState<AnimalsTag>('cats');
  const [modalGif, setModalGif] = useState();

  return (
    <div className="App">
      <AnimalsSelector selected={tag} onClick={setTag}/>
      <div className='App-grid-container'>
        <div className='App-grid'>
          {Array.from({ length: N_GIFS_SET }, (v, i) => i).map(i =>
            <GifComponent
              key={`${tag}-${i}-gif`}
              tag={tag}
              onClick={(gif) => setModalGif(gif)}/>
          )}
            {modalGif && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(0, 0, 0, .8)"
              }}
              onClick={(e) => {
                e.preventDefault();
                setModalGif(undefined);
              }}
            >
              <Gif
                gif={modalGif}
                width={500}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
