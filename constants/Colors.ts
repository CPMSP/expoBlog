const tintColorLight = "#058991";
const tintColorDark = "#dddddd";

const common = {
  success: "#09BC8A",
  warning: "#a44a3f",
  accentBlack: "#040f16",
  accentWhite: "#f4ebe8",
};

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    ...common,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    ...common,
  },
};
