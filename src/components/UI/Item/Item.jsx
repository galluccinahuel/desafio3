
import "./Item.css";

export const Item = ({producto})=> {

    return(

        <div className="item">
            <img src={producto.pictureURL} alt=""/>
            <h3>
                {producto.title}
            </h3>
            <h3>
                {producto.price}
            </h3>
            <button>Detalle</button>
        </div>

    )


}
