import React from 'react';

import './Tickets.css';
import Price from './Price';
import AvioImg from './AvioImg';
import Segments from './Segments';

function Ticket(props) {
  return (
    <li>
      <div className='Ticket_Header'>
        <Price price={props.price} />
        <AvioImg img={props.img} />
      </div>
      <Segments segment={props.segment1} />
      <Segments segment={props.segment2} />
    </li>
  );
}

export default Ticket;