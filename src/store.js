import { createStore } from 'redux';
import * as types from './Actions/action-types';

const initialState = {
  tickets: [],
  sortByPrice: true,
  stopsAble:  [
  	{name: 'all', amountAble : true},
  	{name: 'none', amountAble: false},
  	{name: 'one', amountAble: false},
  	{name: 'two', amountAble: false},
  	{name: 'three', amountAble: false}
  ]
};

const userReducer = function(state , action) {

  switch(action.type) {

    case types.SET_AMOUNT:
      return {
        ...state,
        stopsAble: state.stopsAble.map(item => {
          if(item.name === action.name) {
            return {
              ...item,
              amountAble: action.amountAble
            }
          }
          return item;
        })
      };

    case types.SET_SORT:
      return {...state, sortByPrice: action.able };
    
    case types.SET_TICKETS: 
      return {...state, tickets: action.tickets };

    default: return state;
  }

}





const Store = createStore(userReducer, initialState);
export default Store;