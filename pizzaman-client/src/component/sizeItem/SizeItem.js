import React from 'react'
import './Sizeitem.css';
function SizeItem(props) {
  return (
    <div className='SizeColumn'>
        {props.type}
        <br></br>
        {props.price}
    </div>
  );
}

export default SizeItem