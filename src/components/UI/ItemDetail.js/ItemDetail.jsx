
import {useState } from "react";

export function ItemDetail({detalleProducto}){
    
    const [detalle, setDetalle] = useState([]);

    return(
        <>
            {detalleProducto.id}
        </>
    )


}