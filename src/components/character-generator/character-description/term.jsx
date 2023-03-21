import React from 'react';


function Term(props) {
  const htmlString = props.children.toString();
 
  return (
    <div>
      <p>
        <b>{props.name}</b> <span dangerouslySetInnerHTML={{ __html: htmlString }}></span>
      </p>
    </div>
  );
}

export default Term;
