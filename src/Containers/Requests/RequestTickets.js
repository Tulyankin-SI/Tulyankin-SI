import React from 'react';

class RequestTickets extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      stop: false,
      tickets: {},
      error: {}
 	  };
  } 

  componentDidUpdate() {
  	const fetchCheck = this.state.stop;
  	const lastTickets = this.state.tickets;
  	
  	if(!fetchCheck) {
	   fetch("https://front-test.beta.aviasales.ru/tickets?searchId="+this.props.id,  
	 	  {method: 'GET'} )
      .then(response => response.json())
     	.then(data => lastTickets.length ?
     		this.setState({
     			tickets: [...lastTickets, ...data.tickets], 
     			stop: data.stop
     		}) 
     		: this.setState({tickets: data.tickets, stop: data.stop}) 		
     	)
     	.catch(e => this.setState({error: e}), console.log('ОШИБКА:', this.state.error)); 		
     	console.log('БИЛЕТЫ:', this.state.tickets);
     	console.log('STOP:', this.state.stop); 	
    }
    else {
      console.log('ПРИЕМ ОКОНЧЕН!');
      console.log('STOP:', this.state.stop);
      console.log('КОНЕЧНЫЙ СПИСОК БИЛЕТОВ:', this.state.tickets);
      const ticketsToProps = {
        type: 'SET_TICKETS',
        tickets: this.state.tickets
      }
      this.props.store.dispatch(ticketsToProps);
    } 

  }

  render(){
    return (
    	<div>
    		
    	</div>
    );
  }
}

export default RequestTickets;

