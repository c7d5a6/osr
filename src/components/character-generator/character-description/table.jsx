import React from 'react';
import Term from './term';

function Table(props) {
  const table = props.table;
  return (
    <div>
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

export default Table;
