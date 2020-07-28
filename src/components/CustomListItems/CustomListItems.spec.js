import React from "react";
import { render, fireEvent } from "../../utils/tests";
import CustomListItems from "./CustomListItems";

const props = {
  listItems: [],
  setListItems: jest.fn(),
};

describe("CustomListItems", () => {
  it("should render input with placeholder", () => {
    const { queryByPlaceholderText } = render(<CustomListItems {...props} />);
    const addItemInput = queryByPlaceholderText(/Add an item/i);
    expect(addItemInput);
  });

  it("should render items as inputs", () => {
    props.listItems = [
      { value: "Test One", checked: false },
      { value: "Test Two", checked: true },
    ];
    const { getByDisplayValue } = render(<CustomListItems {...props} />);
    expect(getByDisplayValue("Test One"));
    expect(getByDisplayValue("Test Two"));
  });

  it("should have checkboxes", () => {
    const { getAllByRole } = render(<CustomListItems {...props} />);
    const checkboxes = getAllByRole("checkbox");
    expect(checkboxes.length).toBe(2);
  });

  it("should allow checkboxes to toggle", () => {
    const { getAllByRole } = render(<CustomListItems {...props} />);
    const checkboxes = getAllByRole("checkbox");

    expect(checkboxes[0].checked).toBe(false);
    fireEvent.click(checkboxes[0]);
    expect(props.setListItems).toBeCalled();

    expect(checkboxes[1].checked).toBe(true);
    fireEvent.click(checkboxes[1]);
    expect(props.setListItems).toBeCalled();
  });

  it("should call removeItemFromList", () => {
    const { getAllByTestId } = render(<CustomListItems {...props} />);
    const removeButton = getAllByTestId("remove-item");
    fireEvent.click(removeButton[0]);
    expect(props.setListItems).toBeCalled();
  });
});
