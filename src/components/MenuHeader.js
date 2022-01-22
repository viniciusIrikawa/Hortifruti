import './MenuHeader.css'
import logo from '../images/logo_Frexco.png'
import {BsCart4} from 'react-icons/bs';

function MenuHeader(){
    return(
        <header>
                <img className="logo" src={logo} alt="" />
                <h1 className="cart"><BsCart4/> </h1>
        </header>


    )

}

export default MenuHeader