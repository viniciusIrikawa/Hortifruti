import React, {useState, useEffect} from 'react';
import './Card.css'

function Card(){
  const [product, setProduct] = useState([])

  useEffect(() => {
      fetch('./products.json')
      .then(res => res.json())
      .then(data => {setProduct(data)})  

  })

    return(
        <main>
            {product.map(item => 
                <div className="cardProduct" key={item.id}>
                    <div className='image-fruit'>
                        <img src={item.img} alt={item.name} />
                    </div>
                    <div className='wrapper-content'>
                        <h1 className="card-name"> Name: {item.name} </h1>
                        <h3 className="card-genus"> Genus: {item.genus} </h3>
                    </div> 
                    <button> Add to cart </button>
                </div>
            )}
        </main>

    )   
}

export default Card

