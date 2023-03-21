import React from 'react';

function Talents(props) {
  return (
    <div>
      <h3>{props.name.toUpperCase()} TALENTS</h3>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'right' }}>2d6</th>
            <th style={{ textAlign: 'left' }}>Effect</th>
          </tr>
        </thead>
        <tbody>
          {props.talents.map((talent, i) => <tr>
            <td style={{ textAlign: 'right' }}>{talent.value}</td>
            <td style={{ textAlign: 'left' }}>{talent.talent}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default Talents;
