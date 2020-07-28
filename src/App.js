import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Typography from "@material-ui/core/Typography";
import MuiTheme from "./utils/theme";

import store from "./store/store";

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={MuiTheme}>
        <CssBaseline />
        <Typography>Hello World</Typography>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
