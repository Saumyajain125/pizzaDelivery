import React from 'react'

function CartItem(props) {
  return (
    <div>
        {props.id}
        <br />
        {props.price}
    </div>
  )
}

export default CartItem