import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home(){
    return(
        
        <div className="navbar">
            <h1>Admin Operations</h1>
            <div className="" >
            <br className="con"></br>
            <Link className="link" to="/AddAdmin"  >AddAdmin</Link><br></br>
            <br></br>
            <Link className="link" to="/EditAdmin" >EditAdmin</Link><br></br>
            <br></br>
            <Link className="link" to="/ViewAdmin"  >ViewAdmin</Link><br></br>
            <br></br>
            <Link className="link" to="/DeleteAdmin">DeleteAdmin</Link> <br></br>
            <br></br>
             <Link className="link" to="/ViewbyId">ViewById</Link><br></br>
            </div>
        </div>
        
        
    )
}
export default Home