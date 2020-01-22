import React from 'react';
import { connect } from 'react-redux';

import './Tickets.css';
import TicketsMap from '../../Components/Tickets/TicketsMap';

class Tickets extends React.Component{ 
  
  render() {
    const fetchDone = this.props.tickets.length;
    const index=0;
    return (
  	  <ul id="Tickets"> 
		    {fetchDone ?
        <TicketsMap 
          tickets={this.props.tickets}
          sortByPrice={this.props.sortByPrice}
          stopsAble={this.props.stopsAble}
          ticketIndex={index}/> : <b>Загружаем билеты...</b>}
  	  </ul>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets,
  sortByPrice: state.sortByPrice,
  stopsAble: state.stopsAble
});

export default connect(mapStateToProps)(Tickets);