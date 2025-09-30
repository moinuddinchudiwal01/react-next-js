"use client";

import React, { useEffect, useState } from "react";

const FruitSearch = () => {
  const fruitsCollection = ["Apple", "Banana", "Mango", "Chikoo", "Orange"];
  const [fruits, setFruits] = useState(fruitsCollection);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!input.trim()) {
      setFruits(fruitsCollection);
      setError("");
      return;
    }

    const filters = fruitsCollection.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );

    if (filters.length) {
      setFruits(filters);
      setError("");
    } else {
      setFruits([]);
      setError("No fruits found");
    }
  }, [input]);

  // Function to highlight matching substring
  const highlightMatch = (fruit: string) => {
    if (!input) return fruit;

    const regex = new RegExp(`(${input})`, "gi"); // case-insensitive match
    const parts = fruit.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <strong key={index} className='text-blue-500'>
          {part}
        </strong>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <div className='text-black mt-52'>
      <input
        type='text'
        placeholder='Search fruits'
        className='border-2 border-black p-1 mb-2'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {error && <p className='text-red-500'>{error}</p>}
      <ul>
        {fruits.map((item) => (
          <li key={item}>{highlightMatch(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitSearch;
