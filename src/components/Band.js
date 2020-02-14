import React from 'react';

const Band = props => {

  return(
    <ul key={Math.random()}>
      {console.log(props.band)}
      <li key={props.band.id}>
        {props.band.name}
      
        <button 
            onClick={() => props.delete(props.band.id)}>
            DELETE
        </button>
      </li>
    </ul>
  );
};

export default Band;
