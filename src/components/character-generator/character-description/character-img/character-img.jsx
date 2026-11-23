import React from 'react';
import './character-img.css';

function CharacterImg(props) {
  return (
    <img className='img-character' align="right" src={props.src}></img>
  );
}

export default CharacterImg;
