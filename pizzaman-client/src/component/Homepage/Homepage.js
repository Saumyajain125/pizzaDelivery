import React, { useEffect, useState } from 'react'
import './Homepage.css';
import Size from '../Size/Size';
import Ingredients from '../Ingredients/Ingredients';
const axios = require('axios');
function Homepage() {
	var [sizes, setSize] = useState([]);
	// Order regrading size
	var [order, setOrder] = useState([]);
	// Order Regarding Ingridient
	var [selectedIngiridients, setSelectedIngridients] = useState([]);
	var [ingiridients, setIngridients] = useState([]);
	var [price,setPrice] = useState(0);
	useEffect(() => {
		const getSizes = () => {
			axios.get('http://localhost:3000/api/size/fetch').then((response) => { setSize(response.data) })
		}
		getSizes();
		const getIngridients = () => {
			axios.get('http://localhost:3000/api/ingredients/fetch').then((response) => { setIngridients(response.data) })
		}
		getIngridients();
	}, [])

	return (
		<div>
			<h1>Pizza Delivery App</h1>
			<div className='pizza-container'>
				<img className='pizza-image' alt='Pizza Image' height='100px' width='100px' src="https://static.toiimg.com/photo/msid-87930581/87930581.jpg?211826" />
				<div className='pizza-details'>
					<div>Select Pizza Size: </div>
					<div className='size-row'>{sizes.map((size) => <Size  key={size.id} sizeType={size.Name} sizePrice={size.Price} setPrice={setPrice}/>)} </div>
					<div><strong>Price =  ₹ {price}</strong></div>
					<button id='addToCart'> <strong>Add to cart</strong></button>
				</div>
			</div>
			<div className='ingridient-row'>
				{ingiridients.map((ingredient) => <Ingredients id = {ingredient.id} key = {ingredient.id} AvatarUrl={ingredient.AvatarUrl} Name={ingredient.Name} price = {price} Price={ingredient.Price} selectedIngridients = {selectedIngiridients} setPrice={setPrice} setIngridients={setSelectedIngridients} />)}
			</div>
		</div>
	)
}

export default Homepage