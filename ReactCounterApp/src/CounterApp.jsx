import { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((prev) => prev + 1);
  }

  function handleSubtract() {
    setCount((prev) => prev - 1);
  }

  function handleMultiply() {
    setCount((prev) => prev * 2);
  }

  function handleDivide() {
    setCount((prev) => prev / 2);
  }

  return (
    <div className="card-box">
      <h2>CounterApp</h2>
      <h1>Count: {count}</h1>
      <div className="button-group">
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
        <button onClick={handleMultiply}>Multiply by 2</button>
        <button onClick={handleDivide}>Divide by 2</button>
      </div>
    </div>
  );
}

export default CounterApp;