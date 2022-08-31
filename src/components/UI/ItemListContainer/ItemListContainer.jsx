
import { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export function ItemListContainer(props){

    const {greeting} = props;

    const [contador, setContador] = useState(0)

    const agregar =(contador)=>{

        setContador(contador);
    }
    
    
    return(

        <>
            {greeting}
            <ItemCount stockDisponible={5} valorInitial={1} agregarProducto={agregar}/>
        </>

    )


}
