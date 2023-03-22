import React from 'react';

const divStyle = {
  border: '1px solid var(--ifm-color-emphasis-300)',
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
  padding: '10px'
};

function Talents(props) {
  return (
    <div style={divStyle}>
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
