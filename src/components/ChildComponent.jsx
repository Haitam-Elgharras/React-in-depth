import { useEffect, useState } from "react";

// importing child component and using it inside parent component
//triggers re-rendering of child component if parent component re-renders
/*const ParentComponent = () => {
  const [renderParent, setRenderParent] = useState(true);
  useEffect(() => {
    console.log("Parent Component Rendered");
  });
  return (
    <div>
      <br />
      <button onClick={() => setRenderParent(!renderParent)}>
        Toggle Parent
      </button>
      <br />
      <ChildComponent />
    </div>
  );
};*/
export const ChildComponent = () => {
  const [renderChild, setRenderChild] = useState(true);
  useEffect(() => {
    console.log("Child Component Rendered");
  });
  return (
    <div>
      <br />
      <button onClick={() => setRenderChild(!renderChild)}>Toggle Child</button>
      Child Component
      <br />
    </div>
  );
};
