const colorGeneratorReducer = (color, action) => {
  switch (action.type) {
    case "Set_r":
      return { ...color, r: action.value };
    case "Set_g":
      return { ...color, g: action.value };
    case "Set_b":
      return { ...color, b: action.value };
    default:
      return color;
  }
};

export default colorGeneratorReducer;
