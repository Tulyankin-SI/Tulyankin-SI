import React from 'react';

import './Tickets.css';

function Stops(props) {
  const stops = props.stops;
  const stopsLength = stops.length;
  let stopsLabel = 'Без пересадок';
  let stopsPoints = stops.join(', ');
  
  switch(stopsLength) {
  	case 0 : stopsPoints = '-'; break;
  	case 1 : stopsLabel = '1 пересадка'; break;
  	default : stopsLabel = stopsLength + ' пересадки'; break;
  }

  return (
    <div className='TSegment'>
      <p>{stopsLabel}</p>
      <div>{stopsPoints}</div>
    </div>
  );
}

export default Stops;