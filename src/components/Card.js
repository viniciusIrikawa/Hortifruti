import React, {useState, useEffect} from 'react';
import './Card.css'

function Card(props){
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
                    <h1 className="card-name"> Name: {item.name} </h1>
                    <h3 className="card-genus"> Genus: {item.genus} </h3>
                    <button> Add to cart </button>
                 </div>
            )}
        </main>
        // <main>
        //     <div className="cardProduct"> 
        //         <h1 className="card-name"> Name: {props.name} </h1>
        //         <h3 className="card-genus"> Genus: {props.genus} </h3>
        //         <button> Add to cart </button>
        //     </div>
        // </main>
    )   
}

export default Card

