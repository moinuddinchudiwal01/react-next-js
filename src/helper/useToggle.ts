import { useState } from "react";

export const useToggle = (initial = false) => {
  const [toggle, setToggle] = useState(initial);

  const handleToggle = () => setToggle((prev) => !prev);

  return { toggle, setToggle, handleToggle };
};
