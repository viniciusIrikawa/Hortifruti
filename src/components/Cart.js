import React from 'react';

const Cart = ({ cartItems }) => {
  return (

    <div className='cart-items'> 
        <div className='cart-items-header'> Cart Items </div>

        {cartItems.lenght === 0 && <div className='cart-items-empty'> No items are added. </div>}

        <div>
            {cartItems.map((item) => {
                <div key={cartItems.id}>
                    <h1 className='list-items'> {cartItems.name} </h1>
                </div>
            })}
        </div>
    </div>

  )
};

export default Cart;
