import React, { useState, useEffect } from "react";
import axios from "axios";
import Mall from "./mall";
import "./select.css";

function Select() {
  const [select, setSelect] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8805/mall")
      .then((res) => {
        console.log(res.data);
        setSelect(res.data);
      })
      .catch((err) => {
        console.error("failed", err);
      });
  }, []);

  return (
    <>
      <Mall />
      <div>
        <div>
          <left>
           <h2>Mall Details</h2> 
            <div className="tab1">
              <table className="tab">
                <tr >
                  <th>ID</th>
                  <th>MallAdmin</th>
                  <th>MallName</th>
                  <th>Location</th>
                  <th>ShopsId</th>
                  <th>Categories</th>
                </tr>
                {select.map((items) => (
                  <tr key={items.id} >
                    <td>{items.id}</td>
                    <td>{items.malladmin}</td>
                    <td>{items.mallname}</td>
                    <td>{items.location}</td>
                    <td>{items.shopsid}</td>
                    <td>{items.categories}</td>
                  </tr>
                ))}
              </table>
            </div>
          </left>
        </div>
      </div>
    </>
  );
}
export default Select;