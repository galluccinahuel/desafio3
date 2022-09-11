

import "./Item.css";

export const Item = ({producto})=> {

    const {id, title, price, pictureURL, categoria, descripcion} =  producto;

    return(
        <div className="item">
                <img src={pictureURL} alt=""/>
                <h3>
                    {title}
                </h3>
                <h3>
                    {price}
                </h3>
                <button>Detalle</button>           
        </div>
    )
}
