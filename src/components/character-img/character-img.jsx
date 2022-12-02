import React from 'react';
import styles from './character-img.css';

function CharacterImg(props) {
  return (
    <div className="div-img">
      <img className="img" align={props.align} src={props.src}></img>
    </div>
  );
}

export default CharacterImg;
