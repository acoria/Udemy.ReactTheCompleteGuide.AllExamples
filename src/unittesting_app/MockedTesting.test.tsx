import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MockedTesting } from "./MockedTesting";

test("Build list", async () => {
    //override the fetch method with a mocked method
  const mockedFetch = jest.fn();
  mockedFetch.mockResolvedValueOnce({
    json: async () => [{ id: "1", title: "Test" }],
  });
  window.fetch = mockedFetch;
  
  render(<MockedTesting />);

  const fetchedElements = await screen.findAllByRole("listitem");
  expect(fetchedElements).toHaveLength(1);
});
