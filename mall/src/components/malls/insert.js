import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Mall from "./mall";
import './insert.css'

function Insert() {
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
      .post("http://localhost:8805/malls", obj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Mall />
      <div>
      <div>
      <left><h2>Insert Customer Details</h2>
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
              name="phone"
              value={location}
              onChange={(e) => setlocation(e.target.value)}
            />
            <input
            className="input"
              type="mail"
              placeholder="shopsid"
              name="email"
              value={shopsid}
              onChange={(e) => setshopsid(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="categories"
              name="orderid"
              value={categories}
              onChange={(e) => setcategories(e.target.value)}
            />
            <button className="btn1" type="submit" onClick={submit}>
              INSERT
            </button>
            <center><Link to="/mall" className="btn2">
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

export default Insert;