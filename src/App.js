import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import MuiTheme from "./utils/theme";

import store from "./store/store";

import AppNav from "./components/AppNav/AppNav";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={MuiTheme}>
        <CssBaseline />
        <Router>
          <AppNav />
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
