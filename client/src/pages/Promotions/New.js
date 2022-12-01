import react, { useEffect, useState } from "react";
import axios from "axios";

const New = () => {
  const [newCatalog, setCatalog] = useState([]);

  console.log(newCatalog);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:4000/api/all-blogs")
        .then((res) => {
          setCatalog(res.data);
          console.log(res.data);
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
            <p>company: {y.actors}</p>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default New;
