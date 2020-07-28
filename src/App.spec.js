import React from "react";
import { render } from "./utils/tests";
import App from "./App";

describe("App", () => {
  it("App should render wonderfully", () => {
    render(<App />);
  });
});
