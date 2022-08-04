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
        .get("www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka")
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
      <h5>All People</h5>
      {newdrinks.map((x) => (
        <div key={x.id}>
          <h2>
            {/* <p> company: {x.company.name}</p> */}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Drinks;



{/* <Cards>

  calls API and then send the data

<card1 magarita={state.magarita}/>
<card2 vodka={state.vodka}/>
<card3 gin={state.gin}/>

</Cards> */}