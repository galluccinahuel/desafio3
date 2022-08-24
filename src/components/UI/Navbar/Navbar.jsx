
import "./Navbar.css";
import {CartWidget} from "../CartWidget/CartWidget";

export function Navbar(){

    return(

        <>
            <ul className="navBar-itemContainer">
                <li className="navBar-item"><a href="#">Home</a></li>
                <li className="navBar-item"><a href="#">Productos</a></li>
                <li className="navBar-item"><a href="#">Servicios</a></li>
                <li className="navBar-item"><a href="#">Contacto</a></li>
                <CartWidget>
                </CartWidget>
            </ul>

        </>

    );
}