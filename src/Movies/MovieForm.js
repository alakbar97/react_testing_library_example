import React, { useState } from "react";

export default function MovieForm({ submitForm }) {
  const [text, setText] = useState("");

  return (
    <div>
      <form data-testid="movie-form" onSubmit={() => submitForm({ text })}>
        <label htmlFor="text">
          Text
          <input
            type="text"
            id="text"
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
