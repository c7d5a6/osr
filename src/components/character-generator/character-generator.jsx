import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CharacterDescription from './character-description/character-description'

const races = require('./character-options.json')

function CharacterGenerator(props) {
  return (
    <div>
      <Tabs className="unique-tabs">
        {races.race.map((race, i) => (
          <TabItem value={race.value} label={race.name} default={i === 0}>
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
