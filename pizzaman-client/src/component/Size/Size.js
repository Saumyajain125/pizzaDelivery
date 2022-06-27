import React,{useState} from 'react'

function Size(props) {

  const handleSize = (value)=>{
      props.setPrice(value)
  }

  return (
    <div className='size-row'>
        <button
        onClick={() => handleSize(props.sizePrice)}
        >
        {props.sizeType}<br/>
        {props.sizePrice}
        </button>
    </div>
  )
}

export default Size