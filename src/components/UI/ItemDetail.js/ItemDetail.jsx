

import "./ItemDetail.css";

import {ItemCount} from "../ItemCount/ItemCount"
import { useContext } from "react";
import { CartContext } from "../../../Context/CarContext";

export function ItemDetail({detalleProducto}){

    const {addProducto} = useContext(CartContext);

    const {id, title, price, pictureURL,categoria, descripcion} = detalleProducto;


    const onAdd = (count)=>{


        const nuevoProducto = {...detalleProducto, cantidad: count};

        console.log("nuevoProducto", nuevoProducto);

        addProducto(nuevoProducto);

    }

    


    return(
        <div className="itemDetail">
            <div className="imgDetail">
                <img src={pictureURL} alt="" />
            </div>
            <div  className="infoDetail">
                <h2 className="itemTitle">{title}</h2>
                <span>Mas vendido</span>
                <h2>${price}</h2>
                <h3>{descripcion}</h3>
            </div>
            <ItemCount stockInicial={1} stockTotal={10} onAdd={onAdd}/>
        </div>
    )
}