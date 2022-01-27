import MenuHeader from './components/MenuHeader';
import Card from './components/Card';
import Cart from './components/Cart';
import './App.css';
import { useState } from 'react';

function App() { 

  const [cartItems, setCartItems] = useState([])


  return (
    <div>
      <MenuHeader/>
      <Card/>
      <Cart cartItems={cartItems}/>

    </div>
  );
}

export default App;
