
import { Link } from "react-router-dom";

import "./Navbar.css";

import {CartWidget} from "../CartWidget/CartWidget";

export function Navbar(){

    return(
        <>
            <ul className="navBar-itemContainer">
                <Link className="navBar-item" to="productos">Inicio</Link>
                <Link className="navBar-item" to="Contacto">Contacto</Link>
                <Link className="navBar-item" to="Nosotros">Nosotros</Link>
                <Link className="navBar-item" to="productos">
                    <CartWidget/>
                </Link>
            </ul>
        </>
    )
}