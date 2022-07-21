import react, { useEffect, useState } from "react";
import axios from "axios";

const New = () => {
  const [newCatalog, setCatalog] = useState([]);

  console.log(newCatalog);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setCatalog(res.data);
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, []);

  return (
    <div>
      {newCatalog.map((y) => (
        <div key={y.id}>
          <h5>All People</h5>
          <h2>
            <p>company: {y.company.name}</p>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default New;
