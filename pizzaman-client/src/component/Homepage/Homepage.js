import React, { useContext, useEffect, useState } from 'react'
import './Homepage.css';
import Size from '../Size/Size';
import { createTokenContext } from '../../serice/context';
import Ingredients from '../Ingredients/Ingredients';
import { Link,useNavigate } from 'react-router-dom';
const axios = require('axios');
function Homepage() {
	var [sizes, setSize] = useState([]);
	const { token, setToken } = useContext(createTokenContext)
	var [selectedIngiridients, setSelectedIngridients] = useState([]);
	var [ingiridients, setIngridients] = useState([]);
	var [price, setPrice] = useState(0);
	useEffect(() => {
		const getSizes = () => {
			axios.get('http://localhost:3000/api/size/fetch').then((response) => { setSize(response.data); console.log(response.data); })
		}
		getSizes();
		const getIngridients = () => {
			axios.get('http://localhost:3000/api/ingredients/fetch').then((response) => { setIngridients(response.data); console.log(response.data); })
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
					<div className='size-row'>{sizes.map((size) => <Size key={size.id} sizeType={size.Name} sizePrice={size.Price} setPrice={setPrice} />)} </div>
					<div><strong>Price =  ₹ {price}</strong></div>
					{token !== ''?<Link to="/cart"><button id='addToCart' onClick={async () => {
						 await axios.interceptors.request.use(
							(config) => {
							  config.headers.authorization = 'Bearer'+' '+ token;
							  return config;
							},
							(error) => {
							  return Promise.reject(error);
							}
						   );
						 console.log(token);
						axios.post('http://localhost:3000/api/cart/add',{"Price":price}).then((response)=>{console.log(response.data)}) }}> <strong>Add to cart</strong></button></Link>:<Link to="/login"><button id='addToCart' onClick={() => {  }}> <strong>Add to cart</strong></button></Link>}
				</div>
			</div>
			<div className='ingridient-row'>
				{ingiridients.map((ingredient) => <Ingredients id={ingredient.id} key={ingredient.id} AvatarUrl={ingredient.AvatarUrl} Name={ingredient.Name} price={price} Price={ingredient.Price} selectedIngridients={selectedIngiridients} setPrice={setPrice} setIngridients={setSelectedIngridients} />)}
			</div>
		</div>
	)
}

export default Homepage