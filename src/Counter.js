import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)} data-testid="counter-button">
        {count}
      </button>
    </div>
  );
};
export default Counter;
