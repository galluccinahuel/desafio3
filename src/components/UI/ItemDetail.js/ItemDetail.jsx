

import "./ItemDetail.css";

import {ItemCount} from "../ItemCount/ItemCount"

export function ItemDetail({detalleProducto}){

    const {id, title, price, pictureURL,categoria, descripcion} = detalleProducto;


    const onAdd = (count)=>{

        console.log("onAdd called", count);


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