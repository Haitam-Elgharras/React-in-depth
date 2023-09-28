import { useEffect, useState } from "react";

const ParentComponent = ({ children }) => {
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
      {children}
    </div>
  );
};

export default ParentComponent;
