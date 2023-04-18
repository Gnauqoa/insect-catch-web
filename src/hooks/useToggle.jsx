import { useState } from "react";

const useToggle = (defaultValue = false) => {
  const [flag, setFlag] = useState(defaultValue);
  const toggle = () => {
    setFlag(!flag);
  };
  const turnOn = () => {
    setFlag(true);
  };
  const turnOff = () => {
    setFlag(false);
  };
  return [flag, toggle, turnOn, turnOff];
};

export default useToggle;
