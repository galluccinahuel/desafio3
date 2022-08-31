
import "./Navbar.css";
import {CartWidget} from "../CartWidget/CartWidget";

export function Navbar(){

    return(

        <>
            <ul className="navBar-itemContainer">
                <li className="navBar-item"><a href="#">Alianzas</a></li>
                <li className="navBar-item"><a href="#">Anillos</a></li>
                <li className="navBar-item"><a href="#">Pulseras</a></li>
                <li className="navBar-item"><a href="#">Aros</a></li>
                <CartWidget/>

            </ul>

        </>

    );
}