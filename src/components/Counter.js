import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return 0;
  }
}

function Counter() {
  // dispatch를 실행했을때 호출할 함수가 `reducer`다!
  const [state, dispatch] = useReducer(reducer, 0);

  const onIncrement = () => {
    dispatch({
      type: 'INCREMENT',
    });
  };

  const onDecrement = () => {
    dispatch({
      type: 'DECREMENT',
    });
  };

  return (
    <div>
      <div>현재 숫자 : {state}</div>
      <button onClick={onIncrement}>+ Add</button>
      <button onClick={onDecrement}>- Minus</button>
    </div>
  );
}

export default Counter;
