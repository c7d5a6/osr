import React from 'react';
import Term from './term';
import Table from './table';

function Titles(props) {
  const titles = props.titles;
  return (
    <div>
      <p></p>
      <h2>TITLES</h2>
      <p><i>Characters gain the right to bear certain titles as they advance in level. Such titles may be granted by the guilds, colleges, or temples that characters are associates of.</i></p>
      {titles.table ? (<Table table={titles.table}></Table>) : ('')}
      {titles.reward ? (<Term name={titles.reward.name}>{titles.reward.value}</Term>) : ('')}
    </div>
  );
}

export default Titles;
