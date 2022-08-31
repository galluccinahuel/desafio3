
import { useState } from "react";

import './ItemCount.css';


export const ItemCount =(props)=>{

    const{stockDisponible, valorInitial, agregarProducto}  = props;

    const [contador, setContador] = useState(valorInitial);



    const incrementar =()=>{

        if(contador < stockDisponible){

            setContador(contador + 1);
        }

    }

    const decrementar =()=>{

        if(contador <= 1){

            setContador(1);

        }
        else{

            setContador(contador - 1);

        }
        
    }

    return (

        <div  className="itemCount">
            <p>Unidades: {contador}</p>
            <button onClick={decrementar}>-</button>
            <button onClick={incrementar}>+</button>
            <button onClick={()=>(agregarProducto(contador))}>Agregar</button>
        </div>
    )


}