import './MenuHeader.css'
import {BsCart4} from 'react-icons/bs';

function MenuHeader(){
    return(
        <header>
                {/* <img className="logo" src={logo} alt="" /> */}
                <a href='#'> FRUIT MARKET </a>
                <h1 className="cart"><BsCart4/> </h1>
        </header>


    )

}

export default MenuHeader