import React, { useState } from 'react'
import './Ingredients.css';
const _ = require('lodash');
function Ingredients(props) {
  const [selected,setSelected] = useState(false);
  const handleIngridients = () =>{
    if(!selected){
      if( props.price !==0){
        props.setPrice((price)=> price + props.Price)
        setSelected(!selected)
        props.setIngridients((value) => [...value,props.Name]);
      }
    }
    else{
      props.setPrice((price)=> price - props.Price)
      setSelected(!selected)
      props.setIngridients(_.remove(props.selectedIngridients,props.Name))
    }
  }

  return (
    <div className='ingSpace'>
        <button onClick={() =>{handleIngridients()}}>
            {props.AvatarUrl}<br/>
            {props.Name} <br/>
            {props.Price}<br/>
        </button>
    </div>
  )
}

export default Ingredients