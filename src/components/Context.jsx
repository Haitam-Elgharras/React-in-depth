import React, { useEffect } from "react";
import stateContext from "../contexts/stateContext";

const Context = () => {
  const { state, setState } = React.useContext(stateContext);

  useEffect(() => {
    setTimeout(() => {
      setState(!state);
    }, 3000);

    return () => clearTimeout();
  });

  return (
    <>
      <div>{state ? "true" : "false"}</div>
    </>
  );
};

export default Context;
