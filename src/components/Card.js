import React, {useEffect, useContext, useState} from 'react';
import Context from '../Context';
import Message from './Message';
import './Card.css'

function Card(){
    const {product, setProduct, cartItems, setCartItems} = useContext(Context);
    // const [isToggled, setIsToggled] = useState(false)
    // const [state, setState] = useState([{itemName: '', isToggled: false}]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./products.json');
            const json = await response.json();
            setProduct(json)
        }
        fetchData();
    }, [])
  
    const addProduct = (product) => {
        const itemExist = cartItems.find( item => item.id === product.id);
        if(itemExist){
            setCartItems(cartItems.map((item) => item.id === product.id ? 
            {...itemExist, quantity: itemExist.quantity = 1}: item ))
            
        }
        else{
            setCartItems([...cartItems, product])     
        }
    }

    // const handleMessage = (itemName) => {
    //     setState([{itemName: itemName, isToggled: true}])
    //     console.log('Imprimindo: ')
    //     console.log(state)
    // }
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
                    <button className='btn-add' 
                            onClick={() => {
                                addProduct(item)
                                // setIsToggled(true)
                                // handleMessage(item.name)
                            }}> Add to cart 
                    </button>
                </div>
            )}
            {/* {isToggled && cartItems.map((item, index) => 
                <Message itemName={item.name} key={index} setToggle={setIsToggled} />)
            } */}
            {/* {state[0].isToggled && cartItems.map((item, index) => 
                <Message itemName={item.name} key={index} />)
            } */}
        </main>
    )   
}

export default Card

