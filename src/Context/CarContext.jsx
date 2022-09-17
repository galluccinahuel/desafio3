
import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext();

export const CartProvider = ({children})=>{

    const [carrito, setCarrito] = useState([]);


    const addProducto =  (producto)=>{

        const nuevaLista = [...carrito, producto];

        setCarrito(nuevaLista);

    }


    const deleteProducto = (producto)=>{

        const viejaLista = [...carrito];

        const nuevaLista = viejaLista.filter(n=>n.id==producto.id !== producto);

        setCarrito(nuevaLista);


    }

    return(

        <CartContext.Provider value={{carrito}}>
            {children}
        </CartContext.Provider>

    )


}