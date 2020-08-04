import React from "react";
import { render } from "@testing-library/react";
import TaskList from "./TaskList";

const props = {};

describe("TaskList", () => {
  it("should render tests", () => {
    render(<TaskList {...props} />);
  });
});
