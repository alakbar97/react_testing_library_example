import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";

import Counter from "./Counter";

afterEach(cleanup);

test("<Counter/>", () => {
  const { getByTestId } = render(<Counter />);

  const button = getByTestId("counter-button");

  expect(button.tagName).toBe("BUTTON");

  fireEvent.click(button);
  expect(button.textContent).toBe("1");

  fireEvent.click(button);
  expect(button.textContent).toBe("2");
});
