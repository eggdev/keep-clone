import React from "react";
import { render } from "../../utils/tests";
import EditableList from "./EditableList";

const props = {
  showDialog: false,
  setShowDialog: jest.fn(),
};

describe("EditableList", () => {
  it("should not render component", () => {
    render(<EditableList {...props} />);
  });
});
