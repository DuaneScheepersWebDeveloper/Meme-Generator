/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { MainStyles } from './component-styles/AppStyles';
// import memeData from '../data/memeData';

const Main = () => {
  const memeState = {
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  };
  const [memeImage, setMemeImage] = useState(memeState);

  const [meme, setMeme] = useState({
    bottomText: '',
    topText: '',
    randomImage: '',
  });

  const [allMemeImages, setAllMemeImages] = useState();

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);
  console.log(allMemeImages);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  };

  const handleMemeSubmit = () => {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    console.log(randomNumber);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  };

  return (
    <MainStyles>
      <div className="form">
        <input
          type="text"
          className="form-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          placeholder="Top text"
        />
        <input
          type="text"
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          placeholder="Bottom text"
        />
        <button onClick={handleMemeSubmit} className="form-button">
          Get a new meme image 🚀
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </MainStyles>
  );
};

export default Main;
