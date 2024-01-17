import React from "react";
import Images from './Images/image.jpg';
import { Link } from "react-router-dom";
import "./homepage.css";
function Homepage(){
    
    return(
        <div>
            <h1 >Welcome to ShoppingMall</h1>
            
            <img src={Images}  alt="" height="120" width="120"/> 
        <p> <i> Whoever said money can't buy happiness simply didn't know where to go shopping.</i></p>
         <Link className="link" to="/Home" >Details</Link>

         <p> Shopping is like therapy for your wallet.</p> 
         
        </div>
        
    )
}
export default Homepage