import React, { useState, useEffect } from "react";

const Promotions = () => {
  const [promo, setPromo] = useState({});

  useEffect(() => {
    setPromo();
  }, []);
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Promotions;
