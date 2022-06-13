import {BsCart4} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import Context from '../Context';

import './MenuHeader.css'

function MenuHeader(){
  const {cartItems} = useContext(Context);

    return(
        <header>
                <div className='wrapperLogo'>
                    <Link to={'/'}> FRUIT MARKET </Link>
                </div>

                <div className='wrapperButton'>
                    <Link to={'/Cart'}>  <BsCart4/> 
                        <span className='counter'> {cartItems.length} </span>
                    </Link>
                    
                </div>
        </header>


    )

}

export default MenuHeader