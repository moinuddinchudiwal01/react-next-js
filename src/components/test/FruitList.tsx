"use client";

import React, { useEffect, useState } from "react";

const FruitList = () => {
  const [search, setSearch] = useState("");
  const allFruits = ["Apple", "Banana", "Mango", "Chikoo", "Orange"];

  const [fruits, setFruits] = useState(allFruits);

  const handleFruitSearch = (search: string) => {
    if (!search.trim()) {
      setFruits(allFruits);
      return;
    }

    const filterFruits = allFruits.filter((val) =>
      val.toLowerCase().includes(search.toLowerCase())
    );

    setFruits(filterFruits);
  };

  useEffect(() => {
    handleFruitSearch(search);
  }, [search]);

  return (
    <div className='text-black mt-52'>
      <input
        type='text'
        placeholder='Search fruits'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='border p-2 rounded'
      />
      <ul>
        {fruits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
