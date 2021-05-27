import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import { MemoryRouter } from "react-router-dom";

import MoviesList from "../MoviesList";

global.fetch = require("jest-fetch-mock");

afterEach(() => {
  cleanup();
  console.warn.mockClear();
});

console.warn = jest.fn();

const movies = {
  results: [{ id: "1", title: "Fighter", poster_path: "fighter.jpg" }],
  success: true,
};

test("<MoviesList/>", async () => {
  fetch.mockResponseOnce(JSON.stringify(movies));

  const { getByTestId, getAllByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  );

  await waitForElement(() => getByTestId("movie-link"));

  expect(getByTestId("movie-link").getAttribute("href")).toBe(
    `/${movies.results[0].id}`
  );
  expect(getAllByTestId("movie-link").length).toBe(movies.results.length);
});

test("<MoviesList/> api fail", async () => {
  movies.success = false;

  fetch.mockResponseOnce(JSON.stringify(movies));

  const { getByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  );

  expect(getByTestId("loading")).toBeTruthy();
});
