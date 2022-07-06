import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context';
import './Cart.css'

const Cart = () => {
  const {cartItems, setCartItems} = useContext(Context);
  // console.log(cartItems)

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

  const removeItem = (itemID) => {
    const items = cartItems.filter(item => item.id !== itemID)    
    setCartItems(items)
  }

  return (
      <section className='view-products'>

          {cartItems.length == 0 && 
            <div className='no-items-added'>
              <span> No items added. </span>
              <Link to={'/'}> Go back </Link>
            </div>
          } 

          <h1> My cart </h1>

          {cartItems.map(item => 
            <div className='itemCart' key={item.id}>
              <img className='imgCart' src={item.img}/>
              <div className='description'>
                <h3> {item.name} </h3>
                <h4> {item.genus} </h4>
                <span className='price'> ${ (item.price * item.quantity).toFixed(2) } </span>
                <div className='counter'> 
                  <button className='btn-decrement' onClick={() => decrement(item)}> - </button>
                    {item.quantity == 0 ? 
                      ( <button className='btn-remove' onClick={() => removeItem(item.id)}> remove </button>) : 
                      ( <span> {item.quantity} </span>)
                    }
                  <button className='btn-increment' onClick={() => increment(item)}> + </button>
                </div>
              </div>
            </div>
          )}
          
      </section>

  )
}

export default Cart
