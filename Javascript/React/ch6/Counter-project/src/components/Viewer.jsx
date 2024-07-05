import { useState } from "react";

// Controller에서 발생한 이벤트 값을 App으로부터 전달받자

const Viewer = ({ count }) => {
  console.log("Viewer Update: count is rendering");
  return (
    <>
      <div>
        <h2>Count Now: {count}</h2>
      </div>
    </>
  );
};

export default Viewer;
