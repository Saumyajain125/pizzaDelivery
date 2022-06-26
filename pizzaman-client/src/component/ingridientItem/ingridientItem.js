import React from 'react'

function IngridientItem(props) {
  return (
    <div className='SizeColumn'>
        {props.type}
        <br></br>
        {props.price}
    </div>
  )
}

export default IngridientItem