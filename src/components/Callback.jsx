import { useState, useEffect, useCallback, memo } from "react";

// the memo here ensure that the component is only re-rendered when the props change
// and not on every re-render of the parent component
const ExpensiveComputationComponent = memo(
  function ExpensiveComputationComponent({ compute, count }) {
    return (
      <div>
        <h1>Computed {compute(count)}</h1>
        <h4>last re-render {new Date().toLocaleTimeString()}</h4>
      </div>
    );
  }
);

const Callback = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });

  // the useCallback hook ensures that the function is not re-created on every re-render
  const fibonacci = useCallback((n) => {
    if (n <= 1) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }, []); // Empty dependency array for useCallback

  return (
    <div>
      <h1>useCallback Example {time.toLocaleTimeString()}</h1>
      <button onClick={() => setCount(count + 1)}>
        current count: {count}
      </button>
      <ExpensiveComputationComponent compute={fibonacci} count={count} />
    </div>
  );
};

export default Callback;
