import { useState } from "react";

// 여기서 발생한 이벤트 값을 어떻게 App으로 보내지?

const Controller = ({ onClickButton }) => {
  console.log("Controller Update: btn is Clicked");
  return (
    <div>
      <button
        onClick={() => {
          onClickButton(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onClickButton(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onClickButton(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          onClickButton(100);
        }}
      >
        100
      </button>
      <button
        onClick={() => {
          onClickButton(10);
        }}
      >
        10
      </button>
      <button
        onClick={() => {
          onClickButton(1);
        }}
      >
        1
      </button>
    </div>
  );
};

export default Controller;
