
import { useState } from "react";

import "./ItemDetailContainer.css";

import { ItemDetail } from "../ItemDetail.js/ItemDetail";


export function ItemDetailContainer(){

    const [detalleProductos, setDetalleProductos] = useState([])


    

    const ObtenerDetalle = ()=>{

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(console.log("ItemDetail"));
                
            }, 2000);
        })
    }




    return(
        <div className="ItemDetailContainer">
            <ItemDetail detalleProductos = {detalleProductos} />
            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim velit quaerat veritatis, excepturi doloremque pariatur distinctio fuga, obcaecati earum numquam odit dolore fugit quis nihil illum at, explicabo facere hic.</h2>
        </div>

    )


}