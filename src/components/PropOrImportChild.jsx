import { useEffect, useState } from "react";
import ParentComponent from "./ParentComponent";
import { ChildComponent } from "./ChildComponent";

export default function Component() {
  const [renderComponent, setRenderComponent] = useState(true);
  useEffect(() => {
    console.log("Component Rendered");
  });
  return (
    <div>
      <button onClick={() => setRenderComponent(!renderComponent)}>
        Toggle Component
      </button>
      <br />
      <ParentComponent>
        <ChildComponent />
      </ParentComponent>
    </div>
  );
}
