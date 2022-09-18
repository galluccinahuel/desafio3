
import { useState } from "react";

import './ItemCount.css';


export function ItemCount ({stockInicial, stockTotal, onAdd}){

    const [count, setCount] = useState(stockInicial);


    const SumarUnidades=()=>{

        if (count<stockTotal) {
            
            setCount(count+1);
        }
    }

    const RestarUnidades=()=>{

        if (count>1) {
            
            setCount(count-1);
        }
    }


    return (

        <div className="itemCount">
            <p>Unidades disponibles: {stockTotal} </p>
            <input type="button" className="btn" value="Agregar" onClick={()=>onAdd(count)}/>
            <input type="button" className="btn" value="+" onClick={SumarUnidades}/>
            <input type="button" className="btn" value="-" onClick={RestarUnidades}/>
            <p>{count}</p>
        </div>
    )
}