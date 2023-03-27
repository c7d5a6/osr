import React from 'react';
import Term from './term';

const divStyle = {
  border: '1px solid var(--ifm-color-emphasis-300)',
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
  padding: '10px'
};

function MiscastTable(props) {
  const table = props.table;
  return (
    <div>
      <p></p>
      <h4>{table.name}</h4>
      {table.description ? (<Term name={table.description.name}>{table.description.value}</Term>) : ('')}
      <table>
        <thead>
          <tr>
            {table.table.header.map((hr) => <th>{hr}</th>)}
          </tr>
        </thead>
        <tbody>
          {table.table.rows.map((tr) => <tr>
            {tr.map((td) => <td>{td}</td>)}
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default MiscastTable;
