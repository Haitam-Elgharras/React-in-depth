import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <>
      <h2>{time.toLocaleTimeString()}</h2>
    </>
  );
};

export default Clock;
