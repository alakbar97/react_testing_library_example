import React from "react";

import MovieForm from "./MovieForm";

export default function NewMovie() {
  return (
    <div>
      <h2 data-testid="page-title">New Movie</h2>
      <MovieForm />
    </div>
  );
}
