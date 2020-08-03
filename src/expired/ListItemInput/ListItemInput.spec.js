import React from "react";
import { render, fireEvent, prettyDOM } from "../../utils/tests";
import ListItemInput from "./ListItemInput";

const props = {
  listItems: [],
  setListItems: jest.fn(),
};

const existingItemProps = {
  index: 1,
  newItem: false,
  existingItem: {
    value: "Existing One",
    checked: false,
  },
  removeItemFromList: jest.fn(),
  handledCheckedItem: jest.fn(),
  listItems: [
    {
      value: "Existing One",
      checked: false,
    },
  ],
  setListItems: jest.fn(),
  checkbox: true,
  inputsDisabled: false,
};

describe("ListItemInput", () => {
  it("should render default props", () => {
    render(<ListItemInput {...props} />);
  });
  it("should render changable input with value", () => {
    const { getByDisplayValue } = render(
      <ListItemInput {...existingItemProps} />
    );
    const existingInput = getByDisplayValue(/Existing One/i);
    expect(existingInput);
    fireEvent.change(existingInput, { target: { value: "Updated" } });
    const updated = getByDisplayValue(/Updated/i);
    expect(updated);
  });

  it("should remove item", () => {
    const { getByTestId } = render(<ListItemInput {...existingItemProps} />);
    const removeButton = getByTestId("remove-item");
    expect(removeButton);
    fireEvent.click(removeButton);
    expect(existingItemProps.removeItemFromList).toBeCalled();
  });

  it("should handle checkbox", () => {
    const { getAllByRole } = render(<ListItemInput {...existingItemProps} />);
    const checkboxes = getAllByRole("checkbox");
    expect(checkboxes.length).toBe(1);
    fireEvent.click(checkboxes[0]);

    expect(existingItemProps.handledCheckedItem).toBeCalled();
  });

  it("should submit new item", () => {
    const { getByPlaceholderText } = render(<ListItemInput {...props} />);
    const input = getByPlaceholderText(/Add/i);
    input.focus();
    fireEvent.change(input, { target: { value: "Updated" } });
    fireEvent.keyPress(input, { key: "Enter", code: 13 });
    expect(props.setListItems).toBeCalled();
  });
});
