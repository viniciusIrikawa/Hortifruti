import React, { useContext } from 'react';
import Context from '../Context';

const Cart = () => {
  const {cartItems} = useContext(Context);

  return (
      <div>
        <h1> VISUALIZAÇÃO DO CARRINHO </h1>
        <h2> Quantidade: </h2>
        <span> (x{cartItems.length}) </span>
      </div>

  )
};

export default Cart;
