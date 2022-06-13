import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context';
import './Cart.css'

const Cart = () => {
  const {cartItems, setCartItems} = useContext(Context);
  console.log(cartItems)
  
  const increment = (product) => {
    const allItems = cartItems.find( item => item.id === product.id) 
      if(allItems.quantity < 10){
            setCartItems(cartItems.map((item) => item.id === product.id ? 
            {...allItems, quantity: allItems.quantity + 1} : item ))
        }

  }
  const decrement = (product) => {
    const allItems = cartItems.find( item => item.id === product.id) 
    if(allItems.quantity > 0){
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      {...allItems, quantity: allItems.quantity - 1} : item ))
    }
  }

  return (
      <section className='view-products'>
          {cartItems.length == 0 && 
          <div className='no-items-added'>
            <span> No items added. </span>
            <Link exact to={'/'}> Go back </Link>
          </div>
          }  
          <h1> My cart </h1>

          {cartItems.map(item => 
            <div className='itemCart' key={item.id}>
              <img className='imgCart' src={item.img}/>
              <div className='description'>
                <h3> {item.name} </h3>
                <h4> {item.genus} </h4>
                <div className='counter'> 
                  <button onClick={() => decrement(item)}> - </button>
                  <span> {item.quantity} </span>
                  <button onClick={() => increment(item)}> + </button>
                </div>
              </div>
            </div>
          )}
          
      </section>

  )
}

export default Cart
