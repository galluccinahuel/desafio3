
import { Link } from "react-router-dom";
 
import "./ItemList.css"

import {Item} from "../Item/Item";
  

    export const ItemList =({datos})=>{

        return(

            <div className="itemList">
                {
                    datos.map((dato)=>{

                        return(
                            <Link key={dato.id} to={'/item/' + dato.id}>
                                <Item  producto={dato}/>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }