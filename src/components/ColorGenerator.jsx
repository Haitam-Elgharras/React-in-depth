import { useReducer } from "react";
import colorGeneratorReducer from "../reducers/colorGeneratorReducer";
import "./ColorGenerator.css";

const ColorGenerator = () => {
  const [color, dispatch] = useReducer(colorGeneratorReducer, {
    r: 0,
    g: 0,
    b: 0,
  });

  return (
    <div className="container">
      <div
        className="colorBox"
        style={{ backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})` }}
      />
      <div>
        <div color="red" className="inputFields">
          Red
          <input
            type="range"
            min="0"
            max="255"
            value={color.r}
            onChange={(e) => dispatch({ type: "Set_r", value: e.target.value })}
          />
        </div>
        <div color="green" className="inputFields">
          Green
          <input
            type="range"
            min="0"
            max="255"
            value={color.g}
            onChange={(e) => dispatch({ type: "Set_g", value: e.target.value })}
          />
        </div>
        <div color="blue" className="inputFields">
          Blue
          <input
            type="range"
            min="0"
            max="255"
            value={color.b}
            onChange={(e) => dispatch({ type: "Set_b", value: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorGenerator;
