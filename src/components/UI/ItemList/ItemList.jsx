    
import {Item} from "../Item/Item";
  

    export const ItemList =({datos})=>{

        return(

            <div>
                {
                    datos.map((datosProducto)=>{

                        return(

                            <>
                                <Item producto={datosProducto}/>
                            </>

                        )

                    })
                }
            </div>

        )

    }