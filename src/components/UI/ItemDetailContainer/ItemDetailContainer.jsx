
import { useState, useEffect } from "react";

import "./ItemDetailContainer.css";

import { ItemDetail } from "../ItemDetail.js/ItemDetail";

import imagenAnilloOro1 from "../../misc/Images/productos/anilloOro1.jpeg";
import imagenAnilloOro2 from "../../misc/Images/productos/anilloOro2.jpeg";
import imagenAnilloPlata1 from "../../misc/Images/productos/anilloPlata1.jpeg";
import imagenAnilloPlata2 from "../../misc/Images/productos/anilloPlata2.jpeg";
import imagenAnilloPlata3 from "../../misc/Images/productos/anilloPlata3.jpeg";
import imagenAnilloPlata4 from "../../misc/Images/productos/anilloPlata4.jpeg";
import imagenAnilloPlata5 from "../../misc/Images/productos/anilloPlata5.jpeg";
import imagenArosOro1 from "../../misc/Images/productos/arosOro1.jpeg";
import imagenArosOro2 from "../../misc/Images/productos/arosOro2.jpeg";
import imagenArosOro3 from "../../misc/Images/productos/arosOro3.jpeg";
import imagenArosOro4 from "../../misc/Images/productos/arosOro4.jpeg";
import imagenArosOro5 from "../../misc/Images/productos/arosOro5.jpeg";
import imagenArosOro6 from "../../misc/Images/productos/arosOro6.jpeg";
import imagenArosOro7 from "../../misc/Images/productos/arosOro7.jpeg";
import imagenCollarOro1 from "../../misc/Images/productos/collarOro1.jpeg";
import imagenCollarOro2 from "../../misc/Images/productos/collarOro2.jpeg";
import imagenCollarPlata1 from "../../misc/Images/productos/collarPlata1.jpeg";
import imagenCollarPlata2 from "../../misc/Images/productos/collarPlata2.jpeg";
import imagenCollarPlata3 from "../../misc/Images/productos/collarPlata3.jpeg";
import imagenCollarPlata4 from "../../misc/Images/productos/collarPlata4.jpeg";
import imagenPulseraOro1 from "../../misc/Images/productos/pulseraOro1.jpeg";



export function ItemDetailContainer(){

    const [detalleProductos, setDetalleProductos] = useState({})

    const arregloDetalles =[

        {
            id: 1,
            title: "anillo",
            price: 50,
            pictureURL: imagenAnilloOro1,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum minima ut!"
        },
        {
            id: 2,
            title: "anillo",
            price: 15,
            pictureURL: imagenAnilloOro2,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum minima ut!"
        },
        {
            id: 3,
            title: "anillo",
            price: 5,
            pictureURL: imagenAnilloPlata1,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum minima ut!"
        },
        {
            id: 4,
            title: "anillo",
            price: 5,
            pictureURL: imagenAnilloPlata2,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum minima ut!"
        },
        {
            id: 5,
            title: "anillo",
            price: 5,
            pictureURL: imagenAnilloPlata3,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum minima ut!"
        },
        {
            id: 6,
            title: "anillo",
            price: 5,
            pictureURL: imagenAnilloPlata4,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum minima ut!"
        },
        {
            id: 7,
            title: "anillo",
            price: 5,
            pictureURL: imagenAnilloPlata5,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum minima ut!"
        },
        {
            id: 8,
            title: "anillo",
            price: 5,
            pictureURL: imagenArosOro1,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum minima ut!"
        }      
    ]


    const obtenerDetalle =()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(arregloDetalles[1]);
            }, 2000);
        })
    }

    useEffect(()=>{
        const asynGetDetalle  = async()=>{
            const datos = await obtenerDetalle();
            setDetalleProductos(datos); 
        }
        asynGetDetalle();
    },[])
    

    return(
        <div className="ItemDetailContainer">
            {
               <ItemDetail detalleProducto={detalleProductos}/>
            }
        </div>
    )
            

}