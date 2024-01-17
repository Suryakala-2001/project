import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Mall from "./mall";
import "./selectbyid";

function Selectbyid() {
  const [id, setId] = useState("");
  const [posts, setPosts] = useState([]);

  const handleFetchUser = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8805/mall/${id}`)
      .then((res) => {
        setPosts([res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Mall />
      <div>
      <div>
      <left>
        <h2>Select By Id</h2>
      
      <div className="back1">
        <div className="bg1">
          <form>
            <div className="form1">
              <input
                className="input1"
                type="text"
                placeholder="ENTER ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <button className="btn1" type="submit" onClick={handleFetchUser}>
                SELECT
              </button>
              <center><Link to="/mall" className="btn2">
              CANCEL
            </Link></center>
            </div>
          </form>
        </div>

        {posts.map((post) => (
          <table className="tab">
            <tr>
              <th>ID</th>
              <th>MallAdmin</th>
              <th>MallName</th>
              <th>location</th>
              <th>ShopsId</th>
              <th>Categories</th>
            </tr>
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.malladmin}</td>
              <td>{post.mallname}</td>
              <td>{post.location}</td>
              <td>{post.shopsid}</td>
              <td>{post.categories}</td>
            </tr>
          </table>
        ))}
      </div>
      </left>
      </div>
      </div>
    </>
  );
}

export default Selectbyid;