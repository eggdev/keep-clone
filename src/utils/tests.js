import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider as StoreProvider } from "react-redux";
import store from "../store/store";

import MuiTheme from "./theme";

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={MuiTheme}>
      <StoreProvider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </StoreProvider>
    </ThemeProvider>
  );
};

const customRender = (ui, options) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
