import React,{useEffect,useContext, useState} from 'react'
import { createTokenContext } from '../../serice/context';
import CartItem from '../cartItem/CartItem';
const axios = require('axios');
function Cart() {
  var { token, setToken } = useContext(createTokenContext);
  const [cartItems,setCartItems] = useState([]);
  useEffect(()=>{
    var getCart = async () =>{
      await axios.interceptors.request.use(
        (config) => {
          config.headers.authorization = `Bearer ${token}`;
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
       ); 
      axios.get('http://localhost:3000/api/cart/fetch',).then((response) =>{setCartItems(response.data)});
    }
    getCart();
  },[]);
return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map((cartItem) => <p>{cartItem.id} {cartItem.Price} </p>)}
    </div>
  )
}

export default Cart