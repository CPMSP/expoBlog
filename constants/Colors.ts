const tintColorLight = "#058991";
const tintColorDark = "#dddddd";

const common = {
  success: "#09BC8A",
  warning: "#a44a3f",
  accentBlack: "#040f16",
  accentWhite: "#f4ebe8",
  textBackground: "#fafafa",
};

export default {
  light: {
    text: "#000",
    background: "#ececec",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    ...common,
  },
  dark: {
    text: "#fff",
    background: "#0a0a0a",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    ...common,
  },
};
