import React, {useState , useEffect} from 'react'
import axios from 'axios';

function Catalyzer() {
  const [newcatalyzer, setnewcatalyzer] = useState([]);
  console.log(newcatalyzer);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka")
        .then((res) => {
          //return res
          setnewcatalyzer(res.data);
          console.log(newcatalyzer);
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
      {newcatalyzer.map((x) => (
        <div key={x.id}>
          <h2>
            {/* <p> company: {x.company.name}</p> */}
          </h2>
        </div>
      ))}
    </div>
  );
};


export default Catalyzer;