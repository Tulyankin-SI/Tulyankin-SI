import React from 'react';

function Price(props) {
  let strPrice = props.price.toLocaleString();
  return ( <p>{strPrice} P</p> );
}

export default Price;