import React from 'react';
import Term from './term';
import MiscastTable from './miscast-table';

const divStyle = {
  border: '1px solid var(--ifm-color-emphasis-300)',
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
  padding: '10px'
};

function Miscast(props) {
  const miscast = props.miscast;
  return (
    <div>
      <p></p>
      <h3>MISCAST</h3>
      {miscast.description.map((desc,i)=><Term name={desc.name}>{desc.value}</Term>)}
      {miscast.tables.map((table,i)=><MiscastTable table={table}></MiscastTable>)}      
    </div>
  );
}

export default Miscast;
