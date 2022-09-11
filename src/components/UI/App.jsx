
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import { Navbar } from "./Navbar/Navbar";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";  
import { TopBar } from "./TopBar/TopBar";
import { BrandBar } from "./BrandBar/BrandBar";
import {ItemDetailContainer } from "./ItemDetailContainer/ItemDetailContainer";
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
                    <Route path="/contacto" element={<Contacto/>}/>
                    <Route path="/nosotros" element={<Nosotros/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
                <ItemDetailContainer/>
            </div>
        </BrowserRouter>
    )
}
