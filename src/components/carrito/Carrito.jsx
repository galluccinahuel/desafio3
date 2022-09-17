
import { useContext } from "react"
import { CartContext } from "../../Context/CarContext"

export function Carrito(){

    const {carrito} = useContext(CartContext);


    return(

        <>
            {
                carrito.map(item=>(

                    <p>{item.price}</p>

                ))

            }
        </>

    )


}