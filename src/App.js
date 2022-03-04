import MenuHeader from './components/MenuHeader';
import Card from './components/Card';
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Context from './Context';
import React, { useState } from 'react';
import './App.css';

function App() { 
  const [product, setProduct] = useState([])
  const [cartItems, setCartItems] = useState([])

  return (
    <div>
      <Context.Provider value={{product, setProduct, cartItems, setCartItems}}>
        <BrowserRouter>
          <MenuHeader/>
          <Routes>
            <Route exact path='/' element={<Card/>}/>
            <Route exact path='/Cart' element={<Cart/>}/>
          </Routes>
          {/* <Card/> */}
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
