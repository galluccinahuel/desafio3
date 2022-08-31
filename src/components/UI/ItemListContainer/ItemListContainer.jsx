
import { ItemCount } from "../ItemCount/ItemCount";

export function ItemListContainer(props){

    const {greeting} = props;

    return(

        <>
            {greeting}
            <ItemCount stockDisponible={5} initial={1}/>
        </>

    )


}
