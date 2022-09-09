import { useEffect, useState } from "react";

import "./ItemListContainer.css";

import {AsideBar} from "../AsideBar/AsideBar";
import {ItemList} from "../ItemList/ItemList";

import imagenAnillo1 from "../../misc/Images/productos/anillos1.jpeg"
import pulsera from "../../misc/Images/productos/anillos2.jpeg"
import imagenAnillo3 from "../../misc/Images/productos/anillos3.jpeg"
import aros from "../../misc/Images/productos/anillos4.jpeg"
import aros2 from "../../misc/Images/productos/aros1.jpeg"
import aros3 from "../../misc/Images/productos/aros2.jpeg"
import aros4 from "../../misc/Images/productos/aros3.jpeg"

const arregloProductos =[

    {
        id: 1,
        title: "anillo",
        price: 5,
        pictureURL: imagenAnillo1

    },
    {
        id: 2,
        title: "Pulsera",
        price: 10,
        pictureURL: pulsera

    },
    {
        id: 3,
        title: "anillo 3",
        price: 10,
        pictureURL: imagenAnillo3

    },
    {
        id: 4,
        title: "Aros",
        price: 10,
        pictureURL: aros

    },
    {
        id: 5,
        title: "aros 1",
        price: 10,
        pictureURL: aros

    },
    {
        id: 6,
        title: "aros 2",
        price: 10,
        pictureURL: aros2

    },
    {
        id: 7,
        title: "aros 3",
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
