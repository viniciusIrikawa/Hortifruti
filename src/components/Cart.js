import React, { useContext, useState } from 'react';
import Context from '../Context';
import './Cart.css'

const Cart = () => {
  const {cartItems} = useContext(Context);
  console.log(cartItems)
  
  const [quantity, setQuantity] = useState(1)
  
  const increment = () => {
    if(quantity < 10){
      setQuantity(quantity + 1);
    }
  }
  const decrement = () => {
    if(quantity > 0){
      setQuantity(quantity + -1);
    }

  }

  return (
      <section className='view-products'>
          <h1> My cart </h1>
          
          {cartItems.map(item => 
            <div className='itemCart' key={item.id}>
              <img className='imgCart' src={item.img}/>
              <div className='description'>
                <h3> {item.name} </h3>
                <h4> {item.genus} </h4>
                <div className='counter'> 
                  <button onClick={() => decrement()}> - </button>
                  <span> {quantity} </span>
                  <button onClick={() => increment()}> + </button>
                </div>
              </div>
            </div>
          )}
          
      </section>

  )
};

export default Cart;
