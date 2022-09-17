import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css";

import {AsideBar} from "../AsideBar/AsideBar";
import {ItemList} from "../ItemList/ItemList";

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




const arregloProductos =[

    {
        id: 1,
        title: "anillo oro 1",
        price: 5,
        pictureURL: imagenAnilloOro1,
        categoria: "oro",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum"
    },
    {
        id: 2,
        title: "anillo oro 2",
        price: 10,
        pictureURL: imagenAnilloOro2,
        categoria: "oro",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum"
    },
    {
        id: 3,
        title: "anillo plata 1",
        price: 10,
        pictureURL: imagenAnilloPlata1,
        categoria: "plata",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum"
    },
    {
        id: 4,
        title: "anillo plata 2",
        price: 10,
        pictureURL: imagenAnilloPlata2,
        categoria: "plata",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum"
    },
    {
        id: 5,
        title: "anillo plata 3",
        price: 10,
        pictureURL: imagenAnilloPlata3,
        categoria: "plata",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum"
    },
    {
        id: 6,
        title: "anillo plata 4",
        price: 10,
        pictureURL: imagenAnilloPlata4,
        categoria: "plata",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum"
    },
    {
        id: 7,
        title: "anillo plata 5",
        price: 10,
        pictureURL: imagenAnilloPlata5,
        categoria: "plata",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum"
    },
    {
        id: 8,
        title: "aros oro 1",
        price: 10,
        pictureURL: imagenArosOro1,
        categoria: "oro",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum"
    },
    {
        id: 9,
        title: "aros oro 2",
        price: 10,
        pictureURL: imagenArosOro2,
        categoria: "oro",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum"
    },
    {
        id: 10,
        title: "aros oro 3",
        price: 10,
        pictureURL: imagenArosOro3,
        categoria: "oro",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum"
    },
    {
        id: 11,
        title: "aros oro 4",
        price: 10,
        pictureURL: imagenArosOro4,
        categoria: "oro",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum"
    },
    {
        id: 12,
        title: "aros oro 5",
        price: 10,
        pictureURL: imagenArosOro5,
        categoria: "oro",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum"
    },
    {
        id: 13,
        title: "aros oro 6",
        price: 10,
        pictureURL: imagenArosOro6,
        categoria: "oro",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum"
    },
    {
        id: 14,
        title: "aros oro 7",
        price: 10,
        pictureURL: imagenArosOro7,
        categoria: "oro",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia quidem laborum a aspernatur commodi provident vero itaque dolorem ipsam? Ex dolorum neque id, illo a deserunt nostrum"
    } 
]


export function ItemListContainer(){

    const {tipoMetal} = useParams();
    const [datos, setDatos] = useState([]);

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
               const nuevaLista = datos.filter(i=>i.categoria === tipoMetal);

                if (tipoMetal === undefined){
                    setDatos(datos);
                }
                else {
                    setDatos(nuevaLista);
                }

            } catch (error) {
               console.log(error);
            }
        }
        asyncobtenerDatosProductos();

    },[tipoMetal])

    return(

        <div className="ItemListContainer">
            <AsideBar/>
            <ItemList datos = {datos}/>
        </div>
    )
}
