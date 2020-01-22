import React from 'react';

function AvioImg(props) {
  let imgURL='img/carriers/'+props.img+'.png';
  return (<img src={imgURL} alt='carrier'/>);
}

export default AvioImg;