import { createMuiTheme } from "@material-ui/core/styles";
import Color from "color";
const defaultFontFamily = ["Maven Pro", "sans-serif"].join(", ");
const primary = "#f2511c";

const MuiTheme = createMuiTheme({
  typography: {
    fontFamily: defaultFontFamily,
  },
  palette: {
    type: "dark",
    primary: {
      light: Color(primary).lighten(0.95).string(),
      main: primary,
      dark: Color(primary).darken(0.5).string(),
    },
  },
});

export default MuiTheme;
