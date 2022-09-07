import { useEffect } from "react";
import { useState } from "react";

import "./ItemListContainer.css";

import {AsideBar} from "../AsideBar/AsideBar";
import {ItemList} from "../ItemList/ItemList";

import imagenAnillo1 from "../../misc/Images/productos/anillos1.jpeg"
import imagenAnillo2 from "../../misc/Images/productos/anillos2.jpeg"
import imagenAnillo3 from "../../misc/Images/productos/anillos3.jpeg"
import imagenAnillo4 from "../../misc/Images/productos/anillos4.jpeg"
import aros1 from "../../misc/Images/productos/aros1.jpeg"
import aros2 from "../../misc/Images/productos/aros2.jpeg"
import aros3 from "../../misc/Images/productos/aros3.jpeg"

const arregloProductos =[

    {
        id: 1,
        title: "anillo",
        price: 5,
        pictureURL: imagenAnillo1

    },
    {
        id: 2,
        title: "collar",
        price: 10,
        pictureURL: imagenAnillo2

    },
    {
        id: 3,
        title: "collar",
        price: 10,
        pictureURL: imagenAnillo3

    },
    {
        id: 4,
        title: "collar",
        price: 10,
        pictureURL: imagenAnillo4

    },
    {
        id: 5,
        title: "collar",
        price: 10,
        pictureURL: aros1

    },
    {
        id: 6,
        title: "collar",
        price: 10,
        pictureURL: aros2

    },
    {
        id: 7,
        title: "collar",
        price: 10,
        pictureURL: aros3

    }
    
]

export function ItemListContainer(){

    const  [datos, setDatos] = useState([]);

    const obtenerDatosProductos =()=>{

        return new Promise((resolve,reject)=>{

            setTimeout(()=>{

                resolve(arregloProductos);

            }, 2000);
        })
    }

    useEffect(()=>{

        const asyncobtenerDatosProductos  = async()=>{

            try {
   
               const datos = await obtenerDatosProductos();
               setDatos(datos);

            } catch (error) {
               console.log(error);
            }
   
           }
        asyncobtenerDatosProductos();

    },[])



    return(

        <div className="ItemListContainer">
            <AsideBar/>
            <ItemList datos = {datos}/>
        </div>

    )


}
