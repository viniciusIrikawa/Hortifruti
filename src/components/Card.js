// import React, {useState, useEffect} from 'react';
import React, {useEffect, useContext} from 'react';
import {BsCart4} from 'react-icons/bs';
import Context from '../Context';
import './Card.css'

function Card(){
//   const [product, setProduct] = useState([])
//   const [cartItems, setCartItems] = useState([])

    const {product, setProduct, cartItems, setCartItems} = useContext(Context);

  useEffect(() => {
      fetch('./products.json')
      .then(res => res.json())
      .then(data => {setProduct(data)})  

  })
  
  const addProduct = (product) => {
    setCartItems([...cartItems, product])
  }

    return(
        <main>
            {/* <button className='cart' type='button'>  <BsCart4/> (x{cartItems.length})</button> */}
            {product.map(item => 
                <div className="cardProduct" key={item.id}>
                    <div className='image-fruit'>
                        <img src={item.img} alt={item.name} />
                    </div>
                    <div className='wrapper-content'>
                        <h1 className="card-name"> Name: {item.name} </h1>
                        <h3 className="card-genus"> Genus: {item.genus} </h3>
                    </div> 
                    <button className='btn-add' onClick={() => addProduct(product)}> Add to cart </button>
                </div>
            )}
        </main>

    )   
}

export default Card

