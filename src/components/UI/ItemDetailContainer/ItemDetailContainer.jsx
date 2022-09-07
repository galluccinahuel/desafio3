
import { useState, useEffect } from "react";

import "./ItemDetailContainer.css";

import { ItemDetail } from "../ItemDetail.js/ItemDetail";

import imagenAnillo1 from "../../misc/Images/productos/anillos1.jpeg"
import imagenAnillo2 from "../../misc/Images/productos/anillos2.jpeg"
import imagenAnillo3 from "../../misc/Images/productos/anillos2.jpeg"
import imagenAnillo4 from "../../misc/Images/productos/anillos2.jpeg"
import aros1 from "../../misc/Images/productos/anillos2.jpeg"
import aros2 from "../../misc/Images/productos/anillos2.jpeg"


export function ItemDetailContainer(){

    const [detalleProductos, setDetalleProductos] = useState([])

    const arregloDetalles =[

        {
            id: 1,
            title: "anillo",
            price: 5,
            pictureURL: imagenAnillo1,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum minima ut!"
        },
        {
            id: 2,
            title: "anillo",
            price: 5,
            pictureURL: imagenAnillo2,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum minima ut!"
        },
        {
            id: 3,
            title: "anillo",
            price: 5,
            pictureURL: imagenAnillo3,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum minima ut!"
        },
        {
            id: 4,
            title: "anillo",
            price: 5,
            pictureURL: imagenAnillo4,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum minima ut!"
        },
        {
            id: 5,
            title: "anillo",
            price: 5,
            pictureURL: aros1,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum minima ut!"
        },
        {
            id: 6,
            title: "anillo",
            price: 5,
            pictureURL: aros2,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum minima ut!"
        },
        {
            id: 7,
            title: "anillo",
            price: 5,
            pictureURL: imagenAnillo1,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum minima ut!"
        },
        {
            id: 8,
            title: "anillo",
            price: 5,
            pictureURL: imagenAnillo1,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum minima ut!"
        },
        
    ]


    const obtenerDetalle =()=>{

        return new Promise((resolve,reject)=>{

            setTimeout(()=>{

                resolve(arregloDetalles);

            }, 2000);
        })
    }

    useEffect(()=>{

        
        const asynGetDetalle  = async()=>{

            try {
   
               const datos = await obtenerDetalle();
                setDetalleProductos(datos);
            } catch (error) {
               console.log(error);
            }
   
           }
        asynGetDetalle();
        
    },[])
    

    return(
        <div className="ItemDetailContainer">
            {
                detalleProductos.map((detalle)=>{

                    return(

                        <ItemDetail key = {detalle.id} detalleProducto={detalle}/>

                    )

                })

            }
        </div>
    )
            

}