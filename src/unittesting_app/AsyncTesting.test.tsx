import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AsyncTesting } from "./AsyncTesting";

test("Integration test: Renders list if fetching succeeds", async () => {
  render(<AsyncTesting />);
  //find returns a promise and reevaluates the screen for a true result until the timeout is reached (default is 1s)
  const fetchedElements = await screen.findAllByRole(
    "listitem",
    {},
    { timeout: 2000 }
  );
  expect(fetchedElements).not.toHaveLength(0);
});
