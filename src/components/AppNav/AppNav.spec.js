import React from "react";
import { render, fireEvent } from "../../utils/tests";
import AppNav from "./AppNav";

describe("AppNav", () => {
  it("should find create new button and click it", () => {
    const { getByRole } = render(<AppNav />);
    const CreateNewButton = getByRole("button");
    expect(CreateNewButton);
    fireEvent.click(CreateNewButton);
  });
});
