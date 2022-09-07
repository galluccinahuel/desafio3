
export function ItemDetail({detalleProducto}){

    return(
        <>
            <h1>{detalleProducto[0].title}</h1>
            <h2>{detalleProducto[0].price}</h2>
            <h2>{detalleProducto[0].descripcion}</h2>

        </>
    )


}