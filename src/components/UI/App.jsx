
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import { Navbar } from "./Navbar/Navbar";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";  
import { TopBar } from "./TopBar/TopBar";
import { BrandBar } from "./BrandBar/BrandBar";
import {ItemDetailContainer } from "./ItemDetailContainer/ItemDetailContainer";

import {Carrito} from "../Carrito/Carrito";
import { Contacto } from "../contacto/Contacto";
import { Nosotros } from "../nosotros/Nosotros";
import { Error } from "../error/Error";

export function App(){

    return(
        <BrowserRouter router>
            <div className="container">
                <TopBar/>
                <BrandBar/>
                <Navbar/>
                <Routes>
                    <Route path="productos" element={<ItemListContainer/>}/>
                    <Route path="productos/:tipoMetal" element={<ItemListContainer/>}/>
                    <Route path="item/:id" element={<ItemDetailContainer/>}/>
                    <Route path="/contacto" element={<Contacto/>}/>
                    <Route path="/nosotros" element={<Nosotros/>}/>
                    <Route path="/carrito" element={<Carrito/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
