import React, { useEffect, useState } from "react";
import axios from "axios";
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
      Drinks lorem ipsum
      <div>skdjd</div>
    </div>
  );
};

export default Drinks;
