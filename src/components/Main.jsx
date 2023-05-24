/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { MainStyles } from './component-styles/AppStyles';
import memeData from '../data/memeData';

const Main = () => {
  const [memeImage, setMemeImage] = useState('');

  const [meme, setMeme] = useState({
    bottomText: '',
    topText: '',
    randomImage: '',
  });
  const [allMemeImages, setAllMemeImages] = useState(memeData);

  const handleMemeSubmit = () => {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    console.log(randomNumber);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  };

  return (
    <MainStyles>
      <div className="form">
        <input
          type="text"
          className="form-input"
          name="topText"
          placeholder="Top text"
        />
        <input
          type="text"
          className="form-input"
          name="bottomText"
          placeholder="Bottom text"
        />
        <button onClick={handleMemeSubmit} className="form-button">
          Get a new meme image 🚀
        </button>
      </div>
      <div className="meme-image-div">
        <img src={meme.randomImage} className="meme-image" />
        <p>Top Text: </p>
        <p>Bottom Text: </p>
      </div>
    </MainStyles>
  );
};

export default Main;
