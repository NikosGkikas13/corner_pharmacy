import React, { useState, useEffect, useContext } from "react";

const Counter = (props) => {
  const { min, max, title } = props;
  const [value, setValue] = useState(min);
  const timer = () => {
    setTimeout(setValue(value + 1), 2000);
  };
  useEffect(() => {
    setTimeout(value < max ? timer : "", [100]);
  }, [value]);
  return (
    <div className="counter">
      <h1>{value}+</h1>
      <h1>{title}</h1>
    </div>
  );
};

export default Counter;
