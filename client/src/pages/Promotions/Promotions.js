import React, { useState, useEffect } from "react";

const Promotions = ({ people }) => {
  const [promo, setPromo] = useState({});

  useEffect(() => {
    setPromo(people);
  }, []);
  return (
    <div>
      <h1>{people.name}</h1>
    </div>
  );
};

export default Promotions;
