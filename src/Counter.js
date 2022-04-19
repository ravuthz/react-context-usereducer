import React, { useReducer } from 'react';

import {
  initialCounter,
  counterReducer,
  increase,
  decrease,
} from './store/CounterStore';

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialCounter);

  const onIncrease = () => {
    dispatch(increase(1));
  };

  const onDecrease = () => {
    dispatch(decrease(1));
  };

  return (
    <div className="Counter">
      <h1>Counter</h1>
      <button onClick={onIncrease}>++</button>
      <strong>{state}</strong>
      <button onClick={onDecrease}>--</button>
    </div>
  );
};

export default Counter;
