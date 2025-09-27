"use client";

import React, { useEffect, useState } from "react";

const NumberList = () => {
  const [num, setNum] = useState([1, 2, 3, 4, 5]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleAddNum = () => {
    const newNum = Number(input.trim());

    if (!input.trim()) {
      setError("Please enter a number");
      return;
    }

    if (isNaN(newNum)) {
      setError("Invalid number");
      return;
    }

    if (num.includes(newNum)) {
      setError("Number already exists");
      return;
    }

    setNum((prev) => [...prev, newNum]);
    setInput("");
    setError("");
  };

  return (
    <div className='mt-52 text-black'>
      <input
        type='number'
        placeholder='Enter number'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddNum} disabled={!input.trim()}>
        ADD
      </button>

      {error && <p className='text-red-500 mt-2'>{error}</p>}

      <ul className='mt-4'>
        {num.map((num) => (
          <li key={num} className='list-none'>
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
