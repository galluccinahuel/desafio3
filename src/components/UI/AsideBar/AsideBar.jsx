
import "./AsideBar.css";

export const AsideBar = ()=>{

    return(

        <div className="AsideBar">
            <h2>Filtrar por:</h2>
            <ul  className="AsideBar-list">
                <a href="">
                    <li>-Quilates</li>
                </a>
                <a href="">
                    <li>-Metal</li>
                </a>
                <a href="">
                    <li>-Color</li>
                </a>
                <a href="">
                    <li>-Peso</li>
                </a>
                <a href="">
                    <li>-Ancho</li>
                </a>
                <a href="">
                    <li>-Piedras</li>
                </a>
                <a href="">
                    <li>-Precio</li>
                </a>
            </ul>
        </div>


    )


}