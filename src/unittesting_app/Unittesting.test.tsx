import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Unittesting } from "./Unittesting";
import userEvent from "@testing-library/user-event";

test("Expect to see Hello World as text", () => {
  render(<Unittesting />);

  //The "get" function checks for an exact match
  //e.g. screen.getByText("Hello World"); would cause test to fail
  //"get()" throws an error when not found
  let helloWorldElement = screen.getByText("Hello World!");
  expect(helloWorldElement).toBeInTheDocument();
});

test("Expect a fuzzy Hello World", () => {
  render(<Unittesting />);

  //A fuzzy search can be achieved by "exact: false" options
  let helloWorldElementFuzzy = screen.getByText("Hello World", {
    exact: false,
  });
  expect(helloWorldElementFuzzy).toBeInTheDocument();
});

//group tests together in a test suite
describe("Button interaction", () => {
  test("Initial text is displayed", () => {
    render(<Unittesting />);
    expect(screen.getByText("Initial text")).toBeInTheDocument();
  });

  //user events can be triggered using userEvent
  test("Text changes on button click", () => {
    render(<Unittesting />);
    //getByRole finds an element by its type => https://www.w3.org/TR/html-aria/#docconformance
    //e.g. button => button, li => listitem
    //fails if more than one is found. (use getAllByRole instead)
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Changed text")).toBeInTheDocument();
  });

  test("Initial text is hidden on button click", () => {
    render(<Unittesting />);
    userEvent.click(screen.getByRole("button"));
    //query returns "null" if not found
    let hiddenElement = screen.queryByText("Initial", { exact: false });
    expect(hiddenElement).toBeNull()
  });
});