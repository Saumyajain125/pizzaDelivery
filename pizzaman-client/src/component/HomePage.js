import React, { useState } from 'react'
import './HomePage.css';
import './sizeItem/SizeItem'
import IngridientItem from './ingridientItem/ingridientItem';
import SizeItem from './sizeItem/SizeItem';
function HomePage() {
    var [size,setSize] = useState({
        size:"Small",
        price:150
    });  
    var [price,setPrice] = useState(0);
    var [selected,selectedIngridient] = useState(false);
    
    return (
        <div className="home">
            <div className="home_header">Customize your Pizza 🍕🍕</div>
            <div className="home_content">
                <div className="home_customize">
                    <img
                        className="home_image" alt='Hello' src="https://b.zmtcdn.com/data/pictures/9/102259/4bd1252581acf8aeda4e8069728a464e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" />                    
                </div>
                <div className="home_second_container">
                    <div className="home_customize_details">
                        <strong>Total Price: </strong> ₹{price+size.price}
                        <div>
                            <button className="add_to_cart_button">Add To Cart 🛒 </button>
                        </div>
                    </div>
                    <div className="customize_size">
                        <div className='customizeSizeRow'>
                            <strong>Select Pizza Size :</strong>
                            <button onClick={()=>{setSize({size:'Small',price:150})}}><SizeItem type="Small" price='150' /></button>
                            <button onClick={()=>{setSize({size:'Medium',price:250})}}><SizeItem type="Medium" price='250' /></button>
                            <button onClick={()=>{setSize({size:'Large',price:300})}}><SizeItem type="Large" price='300' /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='customizeSizeRow'>
                <button onClick={()=> {selectedIngridient(!selected);selected?setPrice(price-20):setPrice(price+20)}}><IngridientItem type="Onion" price='20' /></button>
                <button onClick={()=> {selectedIngridient(!selected);selected?setPrice(price-15):setPrice(price+15)}}><IngridientItem type="Chilli" price='15' /></button>
                <button onClick={()=> {selectedIngridient(!selected);selected?setPrice(price-30):setPrice(price+30)}}><IngridientItem type="Mushroom" price='30' /></button>
                <button onClick={()=> {selectedIngridient(!selected);selected?setPrice(price-30):setPrice(price+30)}}><IngridientItem type="Tomato" price='30' /></button>
                <button onClick={()=> {selectedIngridient(!selected);selected?setPrice(price-50):setPrice(price+50)}}><IngridientItem type="Paneer" price='50' /></button>
                <button onClick={()=> {selectedIngridient(!selected);selected?setPrice(price-40):setPrice(price+40)}}><IngridientItem type="Mayonise" price='40' /></button>
            </div>
        </div>
    );
}

export default HomePage;