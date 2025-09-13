"use client";

import { useDebounce } from "@/helper/useDebounce";
import { useToggle } from "@/helper/useToggle";
import { useEffect, useState } from "react";

interface GreetingCardProps {
  name: string;
  greeting?: string;
  hobbies?: string[];
}

export default function GreetingCard({
  name,
  greeting = "Hello",
  hobbies = [],
}: GreetingCardProps) {
  const [localName, setLocalName] = useState(name);
  const { toggle: isFancy, handleToggle: handleFancy } = useToggle();
  const debouncedSearchName = useDebounce(localName, 500);

  // derived UI → even/odd
  const isEven = debouncedSearchName.length % 2 === 0;

  return (
    <div
      className={`max-w-sm w-full rounded-2xl shadow-lg p-6 my-6 transition-all ${
        isFancy
          ? "bg-gradient-to-r from-purple-400 to-pink-400 text-white"
          : "bg-white"
      }`}
    >
      {/* Greeting headline */}
      <h2 className='text-2xl font-bold mb-2'>
        {greeting}, {debouncedSearchName}!
      </h2>

      {/* Input for name */}
      <input
        type='text'
        value={localName}
        onChange={(e) => setLocalName(e.target.value)}
        className='w-full border rounded-lg p-2 mb-3 text-black'
        placeholder='Change name...'
      />

      {/* Buttons */}
      <div className='flex gap-3 mb-4'>
        <button
          onClick={handleFancy}
          className='px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600'
        >
          Toggle Fancy
        </button>
        <button
          onClick={() => setLocalName(name)}
          className='px-4 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600'
        >
          Reset Name
        </button>
      </div>

      {/* Derived UI */}
      <p className='mb-3 italic'>
        Name length is{" "}
        <span className='font-semibold'>{isEven ? "even" : "odd"}</span>
      </p>

      {/* Hobbies list */}
      {hobbies.length > 0 && (
        <ul className='list-disc list-inside space-y-1'>
          {hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
