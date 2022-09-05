 
import "./ItemList.css"

import {Item} from "../Item/Item";
  

    export const ItemList =({datos})=>{

        return(

            <div className="itemList">
                {
                    datos.map((datosProducto)=>{

                        return(

                            <>
                                <Item producto = {datosProducto}/>
                            </>

                        )
                    })
                }
            </div>
        )

    }