
import "./App.css";

import { Navbar } from "./Navbar/Navbar";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";  
import { TopBar } from "./TopBar/TopBar";
import { BrandBar } from "./BrandBar/BrandBar";
import {ItemDetailContainer } from "./ItemDetailContainer/ItemDetailContainer";

export function App(){

    return(

        <div className="container">
            <TopBar/>
            <BrandBar/>
            <Navbar/>
            <ItemListContainer/>
            <ItemDetailContainer/>
        </div>
    )
  
}
