import { useState } from "react";

const Count1 = () => {
  // init status value
  const [count, setCount] = useState;
  console.log(count);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Count1;
