import React, { useEffect,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./add.css";
function AddUser(){
    const[id ,setUserid]=useState("");
    const[name ,setName]=useState("");
    const[password ,setpassword]=useState("");
    const[mall,setmall]=useState("");
    const[phone,setphone]=useState("");
const handleSubmit=(e)=>{
    const obj={
id:id,
name:name,
password:password,
mall:mall,
phone:phone,
    };
    axios.post("http://localhost:8081/malladmin",obj)
}
useEffect(()=>{
    
},[])
return(
    <center>
    <div className="container" >
        <div > 
            
            <div>
            <h2 > Add Admin</h2>
        <form>
            <div className="form" >
                <input className="input1"type="text"name="userid" placeholder="id" value={id}
                onChange={(e)=>setUserid(e.target.value)}/>
            </div>
            <br></br>
            <div>
                <input className="input1" type="text"name="name" placeholder="name" value={name}
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <br></br>
            <div>
                <input className="input1" type="text"name="password" placeholder="password"value={password}
                onChange={(e)=>setpassword(e.target.value)}/>
            </div>
            <br></br>
            <div>
                <input className="input1" type="text"name="mall" placeholder="mall"value={mall}
                onChange={(e)=>setmall(e.target.value)}/>
            </div>
            <br></br>
            <div>
                <input className="input1" type="text"name="phone" placeholder="phone" value={phone}
                onChange={(e)=>setphone(e.target.value)}/>
            </div>
            <br></br>
            <button className="btn" type="Sumbit" onClick={handleSubmit}>SUBMIT</button>
            <br></br>
            <br></br>
            <Link className="link" to="/Home">Cancel</Link>
        </form>
        </div>
       
        </div>
    </div>
    </center>
);
    }
    export default AddUser;