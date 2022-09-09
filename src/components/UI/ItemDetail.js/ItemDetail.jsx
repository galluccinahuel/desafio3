
export function ItemDetail({detalleProducto}){

    return(
        <>
            <h1>{detalleProducto.title}</h1>
            <h2>{detalleProducto.price}</h2>
            <h2>{detalleProducto.descripcion}</h2>
        </>
    )
}