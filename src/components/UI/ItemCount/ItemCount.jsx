
import { useState } from "react";

import './ItemCount.css';


export const ItemCount =(props)=>{

    const{stockDisponible, initial}  = props;

    const [contador, setContador] = useState(initial);



    const incrementarContador =()=>{

        if(contador < stockDisponible){

            setContador(contador + 1);
        }

    }

    const decrementarContador =()=>{

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
            <button onClick={decrementarContador}>-</button>
            <button onClick={incrementarContador}>+</button>
            <button>Agregar</button>
        </div>
    )


}