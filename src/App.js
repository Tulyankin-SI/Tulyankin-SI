import React from 'react';

import './App.css';
import Logo from './Components/Logo/Logo';
import Filter from './Containers/Filter/Filter';
import Tabs from './Containers/Tabs/Tabs';
import RequestID from './Containers/Requests/RequestID';
import Tickets from './Containers/Tickets/Tickets';

function App(props) { 
 	return (
      <div id="Aviasales">
        <Logo />
        <Filter store={props.store}/>
        <Tabs store={props.store}/>
        <RequestID store={props.store} />
        <Tickets/>
      </div>
    );
}

export default App;
