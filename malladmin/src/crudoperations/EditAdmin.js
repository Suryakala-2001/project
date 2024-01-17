import axios from "axios";
import React,{ useState} from "react";
import { Link} from "react-router-dom";

export default function EditUser(){
     const[id,setid]=useState([]);
     const[name,setname]=useState([]);
     const[password,setpassword]=useState([]);
     const[mall,setmall]=useState([]);
     const[phone,setphone]=useState([]);
    const onSubmit = (e) =>{
        e.preventDefault();
        const obj={
            id: id,
            name: name,
            password: password,
            mall: mall,
            phone:phone,
     
        }
        axios
        .put(`http://localhost:8081/malladmin/${id}`,obj);
    };
    
    return(
         <center>
        <div className="container">
            <div >
                <div >
                    <h2 > Edit Admin</h2>
                     
                    <form >
                        <div cclassName="form">
                            <label htmlFor="id" className="form-label">
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your Id"
                                name="id"
                                value={id}
                                onChange={(e) => setid(e.target.value)}
                                />
                              
                        </div>
                        <br></br>
                        <div c>
                            <label htmlFor="name" className="form-label">
                            </label>
                            <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your Name"
                            name="name"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            />
                        </div>
                        <br></br>
                        <div>
                        <label htmlFor="password" className="form-label">
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your password"
                                name="password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                                />

                        </div>
                        <br></br>
                        <div >
                        <label htmlFor="mall" className="form-label">
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your Mall"
                                name="mall"
                                value={mall}
                                onChange={(e) => setmall(e.target.value)}
                                />
                        </div>
                        <br></br>
                        <div >
                        <label htmlFor="phone Number" className="form-label">
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your phone Number"
                                name="phone"
                                value={phone}
                                onChange={(e) => setphone(e.target.value)}
                                />
                        </div>
                        <br></br>
                        <button type="Submit" className="btn btn-outline-primary" onClick={onSubmit}>
                            Submit
                        </button>
                        <br></br>
                        <br></br>
                        <Link className=" edit" to="/Home">
                            Cancel
                         </Link>
                    </form>
                </div>
            </div>
        </div>
        </center>
    );
}