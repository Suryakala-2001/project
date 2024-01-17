import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewbyId() {
  const [id, setId] = useState("");
  const [posts, setPosts] = useState([]);

  const handleFetchUser = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8081/malladmin/${id}`)
      .then((res) => {
        setPosts([res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
  <center>
    <>
      <center>
        <h2>Select By Id</h2>
     
      <div >
        <div >
          <form>
            <div >
              <input
                type="text"
                placeholder="ENTER ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <button  type="submit" onClick={handleFetchUser}>
                SELECT
              </button>
              <Link  to="/Home">Cancel</Link>
            </div>
          </form>
        </div>

        {posts.map((post) => (
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>password</th>
              <th>mall</th>
              <th>phone</th>
            </tr>
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.name}</td>
              <td>{post.password}</td>
              <td>{post.mall}</td>
              <td>{post.phone}</td>
            </tr>
          </table>
        ))}
      </div>
      </center>
    </>
    </center>
  );
}

export default ViewbyId;