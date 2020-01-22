import React from 'react';

import './Filter.css';

class Filter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        all: true,
       none: false,
        one: false,
        two: false,
      three: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.checked;
    const name = target.name;
    let stopAble = {
      type: 'SET_AMOUNT',
      name: {},
      amountAble: {}
    }
    stopAble.name = name;
    stopAble.amountAble = value;
    
    this.props.store.dispatch(stopAble);
    this.setState({[name]: value});
  }

  render(){
	return (
	  <div id="Filter">
	    <p>Количество пересадок</p>
	    <div>
	      <span className="checkmark"></span>
	      <input 
	        name="all"
	        type="checkbox"
	        checked={this.state.all}
	        onChange={this.handleInputChange} />
	      <span className="checkmark"></span>
	      <label>Все</label>
	    </div>
	    <div>
	      <input 
			name="none"
	        type="checkbox"
	        checked={this.state.none}
	        onChange={this.handleInputChange} />
	      <span className="checkmark"></span>
	      <label>Без пересадок</label>
	    </div>  
	    <div>
	      <input 
	        name="one"
	        type="checkbox"
	        checked={this.state.one}
	        onChange={this.handleInputChange} />
	      <span className="checkmark"></span>
	      <label>1 пересадка</label>
	    </div>
	    <div>
	      <input 
	        name="two"
	        type="checkbox"
	        checked={this.state.two}
	        onChange={this.handleInputChange} />
	      <span className="checkmark"></span>
	      <label>2 пересадки</label>
	    </div>
	    <div>
	      <input 
	        name="three"
	        type="checkbox"
	        checked={this.state.three}
	        onChange={this.handleInputChange} />
	      <span className="checkmark"></span>
	      <label>3 пересадки</label>
	    </div>
	  </div>
	);
  }
}

export default Filter;