import React, { useEffect, useState } from "react";
import axios from "axios";
import New from "../Promotions/New";
// import { useEffect } from "react";

const Drinks = () => {
  const [newdrinks, setnewdrinks] = useState([]);
  console.log(newdrinks);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://jsonplaceholder.typicode.com/users/")
        .then((res) => {
          //return res
          setnewdrinks(res.data);
          console.log(newdrinks);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, []);

  return (
    <div>
      {newdrinks.map((x) => (
        <div key={x.id}>
          <h5>All People</h5>
          <h2>
            <p> company: {x.company.name}</p>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Drinks;
