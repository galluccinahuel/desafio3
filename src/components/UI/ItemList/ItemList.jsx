
 
import "./ItemList.css"

import {Item} from "../Item/Item";
  

    export const ItemList =({datos})=>{

        return(

            <div className="itemList">
                {
                    datos.map((dato)=>{

                        return(
                                <Item producto={dato}/>
                        )
                    })
                }
            </div>
        )
    }