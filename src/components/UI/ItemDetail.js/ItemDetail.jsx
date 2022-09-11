

import "./ItemDetail.css";

export function ItemDetail({detalleProducto}){

    const {id, title, price, pictureURL,categoria, descripcion} = detalleProducto;

    return(
        <div className="itemDetail">
            <div className="imgDetail">
                <img src={pictureURL} alt="" />
            </div>
            <div  className="infoDetail">
                <h2>{title}</h2>
                <h2>{price}</h2>
                <h3>{descripcion}</h3>
            </div>
        </div>
    )
}