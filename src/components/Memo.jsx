import { useState, useMemo } from "react";

const fibonacci = (n) => {
  if (n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// the useMemo here is used to memoize the result of the fibonacci function which means that the function
// will only be called when the value of num changes otherwise the result will be returned from the cache
// it's likely that we use useMemo for synchronous calculations that are expensive to compute

const MemoComponent = () => {
  const [num, setNum] = useState(38);
  const [isGreen, setIsGreen] = useState(false);
  const fib = useMemo(() => fibonacci(num), [num]);
  // const fib = fibonacci(num);

  return (
    <div>
      <h1 style={{ color: isGreen ? "limegreen" : "crimson" }}>
        {"useMemo Example"}
      </h1>
      <button onClick={() => setIsGreen(!isGreen)}>🟢/🔴</button>
      <br />
      <h3>{num + "...." + fib}</h3>
      <button onClick={() => setNum(num + 1)}>➕</button>
    </div>
  );
};

export default MemoComponent;
