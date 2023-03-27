import React, { useState, useEffect } from 'react';
import Term from './term';
import Talents from './talents';
import CharacterImg from './character-img/character-img';
import Spellcasting from './spellcasting';

function CharacterDescription(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const path = `/characters/${props.race}-${props.cl.value}.json`;
    fetch(path)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCharacter(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return (<div>There is no info for {`${props.race}-${props.cl.value}`}!</div>);
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {character.image ? (<CharacterImg src={character.image}></CharacterImg>) : ('')}
        <h2>Title: {character.title}</h2>
        {character.fluff ? (<p><i>{character.fluff}</i></p>) : (<p>NO FLUFF</p>)}
        {character.weapons ? (<Term name="Weapons:">{character.weapons}</Term>) : (<p>NO WEAPONS</p>)}
        {character.armor ? (<Term name="Armor:">{character.armor}</Term>) : (<p>NO ARMOR</p>)}
        {character.hitDice ? (<Term name="Hit Dice:">{character.hitDice}</Term>) : (<p>NO HIT DICE</p>)}
        {character.specialTalents ? (
          character.specialTalents.map((talent, i) => <Term name={talent.name}>{talent.description}</Term>)) : (<p>NO SPECIAL TALENTS</p>)}
        {character.talents ? (<Talents talents={character.talents} name={props.cl.name}></Talents>) : (<p>NO TALENTS</p>)}
        {character.spellcasting ? (<Spellcasting spellcasting={character.spellcasting} name={props.cl.name}></Spellcasting>) : ('')}
      </div>
    );
  }
}

export default CharacterDescription;
