import React, { useContext } from 'react';
import Context from '../Context';
import './Cart.css'

const Cart = () => {
  const {cartItems} = useContext(Context);
  console.log(cartItems)

  return (
      <section className='view-products'>
          <h1> My cart </h1>
          
          {cartItems.map(item => 
            <div className='itemCart' key={item.id}>
              <div className='imgItem'>
                <img src={item.img}/>
                <h1> Item name: {item.name} </h1>
              </div>
            </div>
          )}
          
      </section>

  )
};

export default Cart;
