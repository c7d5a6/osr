import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CharacterDescription from './character-description/character-description'
import Term from './character-description/term';
import CharacterImg from './character-description/character-img/character-img';
import 'react-dropdown/style.css';



const races = require('./character-options.json')

function CharacterGenerator(props) {
  return (
    <div>
      <Tabs className="unique-tabs">
        {races.race.map((race, i) => (
          <TabItem value={race.value} label={race.name} default={i === 0}>
            {race.image ? (<CharacterImg src={race.image}></CharacterImg>) : ('')}
            {race.fluff ? (<p><i>{race.fluff}</i></p>) : (<p>NO FLUFF</p>)}
            {race.requirement ? (<Term name="Requirements:">{race.requirement}</Term>) : ('')}
            {race.language ? (<Term name="">{race.language}</Term>) : (<p>NO LANGUAGE</p>)}
            {race.raceTalent ? (<Term name={race.raceTalent.name}>{race.raceTalent.description}</Term>) : (<p>NO RACE TALENT</p>)}
            <Tabs className="unique-tabs">
              {race.class.map((cl, j) => (
                <TabItem value={cl.value} label={cl.name} default={j === 0}>
                  <CharacterDescription cl={cl} race={race.value}></CharacterDescription>
                </TabItem>)
              )}
            </Tabs>
          </TabItem>)
        )}
      </Tabs>
    </div>
  );
}

export default CharacterGenerator;
