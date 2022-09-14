
import { Link } from "react-router-dom";

import "./CartWidget.css";

import BagIcon from '../CartWidget/shopping-bag.png';

export function CartWidget(){

    return(

        <>
            <Link to="/carrito">
                <img className='CartWidgetIcon' src={BagIcon} />   
            </Link>
        </>
        
    );




    

}