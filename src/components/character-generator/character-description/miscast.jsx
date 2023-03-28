import React from 'react';
import Term from './term';
import Table from './table';

function Miscast(props) {
  const miscast = props.miscast;
  return (
    <div>
      <h3>MISCAST</h3>
      {miscast.description.map((desc, i) => <Term name={desc.name}>{desc.value}</Term>)}
      {miscast.tables.map((table, i) => <div><p></p><Table table={table}></Table></div>)}
    </div>
  );
}

export default Miscast;
