import { useState } from "react";

const Count = () => {
  // const state = useState();

  // 요소가 두 개이므로 구조 분해 할당 방법으로 초기화
  //   const [state, setState] = useState();

  // 상태값 초기화
  const [count, setCount] = useState(0);
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
export default Count;
