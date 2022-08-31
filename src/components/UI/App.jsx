
import "./App.css";
import { Navbar } from "./Navbar/Navbar";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";  

export function App(){

    return(

        <div className="container">

            <Navbar/>
            <ItemListContainer greeting="Hello, world!"/>
        </div>
    );
  
}
