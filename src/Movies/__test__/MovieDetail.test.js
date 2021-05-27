import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";

import MovieDetail from "../MovieDetail";

global.fetch = require("jest-fetch-mock");

afterEach(() => {
  cleanup();
  console.warn.mockClear();
});

console.warn = jest.fn();

const match = {
  params: {
    id: "1",
  },
};

const movie = {
  id: "1",
  title: "Fighter",
};

test("<MovieDetail/>", async () => {
  fetch.mockResponseOnce(JSON.stringify(movie));

  const { getByText, getByTestId } = render(<MovieDetail match={match} />);

  await waitForElement(() => getByText(movie.title));

  expect(getByTestId("movie-title").textContent).toBe(movie.title);
});
