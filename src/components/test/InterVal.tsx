"use client";

import React, { useEffect, useState } from "react";

const InterVal = () => {
  const [min, setMin] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMin((prev) => prev + 10);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className='text-black'>{min} Minutes</div>;
};

export default InterVal;
