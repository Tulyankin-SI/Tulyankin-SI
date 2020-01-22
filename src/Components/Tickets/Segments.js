import React from 'react';

import './Tickets.css';
import Stops from './Stops';

function Segments(props) {
  const origin = props.segment.origin;
  const destination = props.segment.destination;
  const duration = props.segment.duration;
  const duration_hours = Math.floor(duration/60) + 'ч';
  let duration_mins = duration%60;
  const date = new Date(props.segment.date);
  let dateMins = date.getMinutes();
  let dateHours = date.getHours() - 3;
  let arrivalMins = dateMins + duration_mins;
  let arrivalHours = dateHours + Math.floor(duration/60);

  if(arrivalMins > 60) { 
  	arrivalMins -= 60; 
    arrivalHours += 1;
  }

  if(arrivalHours > 24) { arrivalHours -= 24; }

  if(duration_mins < 10) { 
    duration_mins = '0' + duration_mins + 'м'; 
  }
  else { duration_mins += 'м'; }
  
  if(dateHours < 0) { dateHours = 24 + dateHours; }
  
  dateMins = dateCheck(dateMins);
  dateHours = dateCheck(dateHours);
  arrivalMins = dateCheck(arrivalMins);
  arrivalHours = dateCheck(arrivalHours);

  function dateCheck(timeForCheck) {
    let returningTime = timeForCheck;
  	if(timeForCheck < 10) {
  	  returningTime = '0' + returningTime;	
  	}
  	return returningTime;
  }

  const dateTime = dateHours + ':' + dateMins;
  const arrivalTime = arrivalHours + ':' + arrivalMins;
  const duration_time = duration_hours + ' ' + duration_mins;

  return ( 
    <div className='Ticket_Segments'> 
	    <div className='TSegment'> 
		    <p>{origin} - {destination}</p>
		    <div>{dateTime} - {arrivalTime}</div>
	    </div>
	    <div className='TSegment'>
		    <p>В пути</p>
		    <div>{duration_time}</div>
	    </div>
	    <Stops stops={props.segment.stops} />
    </div> 
  );
}

export default Segments;