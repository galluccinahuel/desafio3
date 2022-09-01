
import "./Item.css";

export const Item = ({producto})=> {

    return(

        <div >
            <img src={producto.pictureURL} alt=""/>
            <h3>
                {producto.title}
            </h3>
            <h3>
                {producto.price}
            </h3>
        </div>

    )


}
