import React from 'react';
import RequestTickets from './RequestTickets';


class RequestID extends React.Component { 
  constructor() {
    super();
    this.state = {
      id: {}
 	 };
  } 

  componentDidMount() {
 	fetch("https://front-test.beta.aviasales.ru/search", {method: 'GET'})
      .then(response => response.json())
      .then(data => {
        this.setState({
          id: data
        })
      })
  }

  render() {
  	const reqID = this.state.id.searchId;
    return (
          <RequestTickets id={reqID} store={this.props.store} />
    );
  }
}

export default RequestID;