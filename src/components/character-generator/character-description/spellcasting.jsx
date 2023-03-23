import React from 'react';
import Term from './term';

const divStyle = {
  border: '1px solid var(--ifm-color-emphasis-300)',
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
  padding: '10px'
};

function Spellcasting(props) {
  const spellcasting = props.spellcasting;
  return (
    <div>
      <p></p>
      <h2>SPELLCASTING</h2>
      <Term name={spellcasting.description.name}>{spellcasting.description.description}</Term>
      <Term name="Spellcasting Ability:">{spellcasting.ability}</Term>
      {spellcasting.spellTalents.map((talent, i) => <Term name={talent.name}>{talent.description}</Term>)}
      <div>
        <h3>{props.name} Spells Known Table</h3>
        {/* <h5>Spells Known By Spell Tier</h5> */}
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Tier 1</th>
              <th>Tier 2</th>
              <th>Tier 3</th>
              <th>Tier 4</th>
              <th>Tier 5</th>
            </tr>
          </thead>
          <tbody style={divStyle}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) =>
              <tr>
                <td><b>{level}</b></td>
                {spellcasting.spellsKnown[level - 1] ? spellcasting.spellsKnown[level - 1].map((number) => <td>{number}</td>) : ('')}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Spellcasting;
