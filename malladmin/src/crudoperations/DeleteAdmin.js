import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./delete.css";

function Delete() {
  const [id, setIdToDelete] = useState("");

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8081/malladmin/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <center>
      </center>
      <div className="back">
        <div class="bg1">
    
          <form>
            <div class="form1">
              <input
                className="input1"
                type="text"
                placeholder="ENTER ID"
                value={id}
                onChange={(e) => setIdToDelete(e.target.value)}
              />
              <button className="btn1" type="submit" onClick={handleDelete}>
                DELETE
              </button>
              <Link to="/Home">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Delete;