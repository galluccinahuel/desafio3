import { useEffect } from "react";
import { useState } from "react";

import "./ItemListContainer.css";
import { ItemCount } from "../ItemCount/ItemCount";
import {AsideBar} from "../AsideBar/AsideBar";
import {ItemList} from "../ItemList/ItemList";
import imagenAnillo1 from "../../misc/Images/productos/anillos1.jpeg"
import imagenAnillo2 from "../../misc/Images/productos/anillos2.jpeg"

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

    }
]

export function ItemListContainer(){



    const [contador, setContador] = useState(0)

    const agregar =(contador)=>{

        setContador(contador);
    }
    

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
            <div className="CardContainer">
                <ItemCount stockDisponible={5} valorInitial={1} agregarProducto={agregar}/>
                <ItemList datos = {datos}/>

            </div>
        </div>

    )


}
