import React from 'react';

import './Tabs.css';
const tActive = 'Tabs-active';
const tNotActive = 'Tabs-notActive';

class Tabs extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      tab1Active: true
    };
  }

  toggleClass (tIndex) {
     const tabsActive = this.state.tab1Active;
     let sortByPrice = {
      type: 'SET_SORT',
      able: false
     }  

     if(tIndex === 2) { 
      this.setState({tab1Active: false});
      sortByPrice.able = false; 
      this.props.store.dispatch(sortByPrice);
     } 
     else if(!tabsActive) { 
      this.setState({tab1Active: true}); 
      sortByPrice.able = true;
      this.props.store.dispatch(sortByPrice);
    }
  }

  render(){
    return (
      <div>
        <div id="Tabs">
          <div 
        	 id="Tabs-1" 
        	 className = {this.state.tab1Active ? tActive : tNotActive}
        	 onClick = {() => this.toggleClass(1)}
       		 >Самый дешевый</div>
          <div 
        	 id="Tabs-2" 
        	 className = {this.state.tab1Active ? tNotActive : tActive}
        	 onClick = {() => this.toggleClass(2)}
        	 >Самый быстрый</div>
        </div>
      </div>
    );
  }
}

export default Tabs;