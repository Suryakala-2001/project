import React,{useState,useEffect} from "react";
import axios from 'axios'
import "./view.css";
function ViewUser(){
    //create a state variable posts and setposts is a method to update the state variable
    const[posts,setposts]=useState([0]);
    useEffect(()=>{
        axios.get('http://localhost:8081/malladmin')
        .then(res=>{
            console.log(res)
            setposts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return(
        <div className="tab1">
            <table className="tab" >
                <thead >
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>password</th>
                        <th>mall</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody >
                    {posts.map((user,index)=>(
                        <tr>
                               <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.password}</td>
                                <td>{user.mall}</td>
                                <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
          </div>
       
    )

}
export default ViewUser;