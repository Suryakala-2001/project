import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Malls from "./mall";

function Update() {
  const [id, setid] = useState([]);
  const [malladmin, setmalladmin] = useState([]);
  const [mallname, setmallname] = useState([]);
  const [location, setlocation] = useState([]);
  const [shopsid, setshopsid] = useState([]);
  const [categories, setcategories] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    const obj = {
      id: id,
      malladmin:malladmin,
      mallname: mallname,
      location: location,
      shopsid: shopsid,
      categories: categories,
    };
    axios
      .put(`http://localhost:8805/malls/${id}`, obj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Malls />
      <div>
      <div>
      <left>
        <h2>Update Mall Details</h2>
      
      <div className="container">
       
        <form>
          <div className="form">
            <input
              className="input"
              type="text"
              placeholder="Id"
              name="id"
              value={id}
              onChange={(e) => setid(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="malladmin"
              name="name"
              value={malladmin}
              onChange={(e) => setmalladmin(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="Name"
              name="name"
              value={mallname}
              onChange={(e) => setmallname(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="location"
              name="name"
              value={location}
              onChange={(e) => setlocation(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="shopsid"
              name="number"
              value={shopsid}
              onChange={(e) => setshopsid(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="categories"
              name="name"
              value={categories}
              onChange={(e) => setcategories(e.target.value)}
            />
            <button type="submit" className="btn1" onClick={submit}>
              UPDATE
            </button>
           <center> <Link to="/mall" className="btn2">
              CANCEL
            </Link></center>
          </div>
        </form>
       
      </div>
      </left>
    </div>
    </div>
    </div>
  );
}

export default Update;