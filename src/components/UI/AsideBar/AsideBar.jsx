
import { Link } from "react-router-dom";

import "./AsideBar.css";

export const AsideBar = ()=>{

    return(

        <div className="AsideBar">
            <h2>Material:</h2>
            <ul className="AsideBar-list">
                <li>
                    <Link to="/productos/oro">-Oro</Link>
                </li>
                <li>
                    <Link to="/productos/plata">-Plata</Link>
                </li>
            </ul>
        </div>
    )


}