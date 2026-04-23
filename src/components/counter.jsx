import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>React Counter Application</h1>

      <h2 className="count-value">{count}</h2>

      <div className="btn-group">
        <button className="btn inc" onClick={increment}>
          Increment (+)
        </button>

        <button className="btn dec" onClick={decrement}>
          Decrement (-)
        </button>
      </div>

      <button className="btn reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;