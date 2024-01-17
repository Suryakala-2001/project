import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Mall from "./mall";
import "./delete.css";

function Delete() {
  const [id, setIdToDelete] = useState("");

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8805/malls/${id}`)
      .then((res) => {
        console.log(res);
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
        <h2>Delete Mall Details</h2>
     
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
              <center><Link to="/mall" className="btn2">
                CANCEL
            </Link></center>
            </div>
          </form>
        </div>
      </div>
      </left>
      </div>
      </div>
    </>
  );
}
export default Delete;