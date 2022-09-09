import  {Link} from "react-router-dom"

import "./BrandBar.css";
import Marca from "../../misc/Images/Marca.png";



export const BrandBar = ()=> {
 
    return(

        <div className="BrandBar">
            <Link to="productos">
                <img src={Marca} alt="" />
            </Link>
        </div>

                        

    )

    
}

