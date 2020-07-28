import React from "react";
import { render, fireEvent } from "../../utils/tests";
import ListLibraryItem from "./ListLibraryItem";

const props = {
  listDetails: {
    id: "id_1",
    title: "TEST VAL",
    listItems: [{ checked: false, value: "here" }],
  },
  openEditableList: jest.fn(),
};

describe("ListLibraryItem", () => {
  it("should render component", () => {
    const { getByText } = render(<ListLibraryItem {...props} />);
    const renderedList = getByText("TEST VAL");
    expect(renderedList);
  });

  it("should delete list and not open list", () => {
    const { getByTestId } = render(<ListLibraryItem {...props} />);
    const deleteButton = getByTestId("delete-list");
    fireEvent.click(deleteButton);
    expect(props.openEditableList).not.toBeCalled();
  });

  it("should open list", () => {
    const { getByText } = render(<ListLibraryItem {...props} />);
    const renderedList = getByText("TEST VAL");
    fireEvent.click(renderedList);
    expect(props.openEditableList).toBeCalled();
  });

  it("should click checkbox", () => {
    const { getByRole } = render(<ListLibraryItem {...props} />);
    const checkbox = getByRole("checkbox");
    fireEvent.click(checkbox);
  });
});
