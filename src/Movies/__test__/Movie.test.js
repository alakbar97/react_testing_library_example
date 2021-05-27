import React from "react";
import { render, cleanup } from "react-testing-library";
import { MemoryRouter } from "react-router-dom";

import Movie, { POSTER_PATH } from "../Movie";

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();
console.warn = jest.fn();

const movie = {
  id: "1",
  title: "Fighter",
  poster_path: "fighter.jpg",
};

test("<Movie/>", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>
  );

  expect(console.error).not.toHaveBeenCalled();
  expect(getByTestId("movie-link").getAttribute("href")).toBe(`/${movie.id}`);
  expect(getByTestId("movie-img").getAttribute("src")).toBe(
    `${POSTER_PATH}${movie.poster_path}`
  );
});
