import React from "react";
import { useState } from "react";

/** 
    Root component에서 옮기고 호출만 하면 된댜? 
 */
const Bulb = () => {
  // light(전등) 상태값을 소등(OFF)으로 초기화
  const [light, setLight] = useState("OFF");
  console.log(light);
  console.log("Bulb Update");

  return (
    <div>
      <h1>{light}</h1>
      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON?" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};
export default Bulb;
