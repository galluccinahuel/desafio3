
import { ItemCount } from "../ItemCount/ItemCount";

export function ItemListContainer(props){

    const {greeting} = props;


    const agregar =(contador)=>{

        console.log("unidades:" + contador);

    }

    return(

        <>
            {greeting}
            <ItemCount stockDisponible={5} valorInitial={1} agregarProducto={agregar}/>
        </>

    )


}
