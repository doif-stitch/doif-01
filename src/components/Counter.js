import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);
  const onAdd = (params) => {
    setNumber(number + params);
    //setNumber(() => number + params);
  };
  const onMiuns = (params) => {
    setNumber(number - params);
  };

  return (
    <div>
      <div>현재 숫자 : {number}</div>
      <button onClick={() => onAdd(5)}>+Add</button>
      <button onClick={onMiuns}>-Minus</button>
    </div>
  );
}

export default Counter;
