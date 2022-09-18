
import { useContext } from "react"
import { CartContext } from "../../Context/CarContext"

export function Carrito(){

    const {carrito} = useContext(CartContext);
    console.log("Carrito",carrito);


    return(

        <>
            {
                carrito.map(item=>(

                    <div>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                    </div>


                ))

            }
        </>

    )


}