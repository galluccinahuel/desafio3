
export function ItemDetail({detalleProducto}){

    const {id, title, price, pictureURL,categoria, descripcion} = detalleProducto;

    return(
        <>
            <h1>{title}</h1>
            <h2>{price}</h2>
            <h2>{descripcion}</h2>
            <h2>{categoria}</h2>
            <h2>{pictureURL}</h2>
        </>
    )
}