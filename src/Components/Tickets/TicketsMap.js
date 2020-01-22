import React from 'react';

import Ticket from './Ticket';

function TicketsMap (props) {
  let ticketsARR = props.tickets;
  let ticketIndex = props.ticketIndex;

  //setting stops array
  let stopsAble = [
    {amountAble: true},
    {amountAble: true}, 
    {amountAble: true}, 
    {amountAble: true}, 
    {amountAble: true}
  ];
  if(!props.stopsAble[0].amountAble) {
    stopsAble = props.stopsAble;
  } 
  //setting sort configuration
  let sortByPrice = props.sortByPrice;
  if(sortByPrice) { ticketsARR.sort((a, b) => a.price - b.price); }
  else {
    ticketsARR.sort((a, b) => {
      let aDuration = a.segments[0].duration + a.segments[1].duration;
      let bDuration = b.segments[0].duration + b.segments[1].duration;
      if (aDuration >  bDuration) {
        return 1;
      }
      else if (aDuration < bDuration) {
        return -1;
      }
      else return 0;
    });
  }
  
  const listTickets = ticketsARR.map((ticket) => {
    const stops1 = ticket.segments[0].stops.length + 1;
    const stops2 = ticket.segments[1].stops.length + 1;
    if (ticketIndex < 5) {
      if(stopsAble[stops1].amountAble && stopsAble[stops2].amountAble) {
        const date1 = ticket.segments[0].date;
        const date2 = ticket.segments[1].date;
        const ticketKey = ticket.carrier + ticket.price + '_' + dateKey(date1) + dateKey(date2);
        ticketIndex++;
        return <Ticket 
          key = {ticketKey}
          price = {ticket.price}
          img = {ticket.carrier}
          segment1 = {ticket.segments[0]}
      segment2 = {ticket.segments[1]} />;
      }
      else return null;    
    }
    else return null;
  });
  
  function dateKey(date) {
    const newDate = new Date(date);
    return newDate.getMonth() + newDate.getDate() + newDate.getHours() + newDate.getMinutes();
  }

  if(ticketIndex<1) 
    return 'Билетов не найдено. Возможно вы не выбрали кол-во пересадок.';
  else 
    return listTickets;
}

export default TicketsMap;