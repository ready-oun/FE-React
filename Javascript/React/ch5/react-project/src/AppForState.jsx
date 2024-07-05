import "./App.css";
import { useState } from "react";
import Bulb from "./components/Bulb";
import Count from "./components/Count";

/***
 * AppForState 컴포넌트의 내부 자식 컴포넌트
 *
 * 부모 컴포넌트의 state 인 light 상태정보를 자식 컴포넌트로
 * props 로 전달
 *
 * Bulb 와 같은 자식 컴포넌트들은 부모 컴포넌트로 부터
 * props(부모의 상태정보) 의 값이 바뀌게 되면,
 * 리렌더링이 발생할 수 있는 사실
 *
 * 그래서, 아무런 관계가 없는 Bulb 컴포넌트가 호출이 되어,
 * 리렌더되고 있는 상태
 *
 * 즉, "+" 버튼 클릭 -> AppForState의 useState.setCount 가 호출
 *     -> count 의 상태 정보가 변경 -> react 가 감지 :
 *     AppForState 자신이 관리하는 state가 변경됨 ->
 *     AppForState(부모) 리렌더링 -> Bulb(자식) 도 리렌더링이 됨
 *
 * 따라서, 불필요한 리렌더링의 대상이 Bulb 임을 알게 됨
 * 불필요한 리렌더링이 발생되어 브라우저 성능에 영향을 주게 되고 있어,
 * 관련없는 상태정보들은 컴포넌트별로 분리해야 함을 알 수 있음.
 */

/**
 * 컴포넌트에서 상태(state)를 생성하려면,
 * 리액트가 제공하는 내장함수 useState를 import해야 함
 *
 * useState()는 요소가 두 개인 배열을 반환
 * - 첫 번째 요소 :
 *  새롭게 생성된 state 의 값 예. undefined
 * - 두 번째 요소 :
 *  함수, 첫 번째 요소인 state값을 변경시키는 함수 => `setter`
 *  그래서 특별히 상태변화 함수라고 부름
 */

function AppForState() {
  /**
    button을 클릭하면, 컴포넌트의 상태(state)가 변경되어, 
    React가 이 변경을 감지하게 됨
    따라서 자동으로 컴포넌트를 리렌더링해주게 됨 

    즉, react가 이 컴포넌트 함수를 다시 호출해서 
    반환된 html을 브라우저에 렌더링한 것임 
 */

  return (
    <>
      <Bulb />
      <Count />
    </>
  );
}

export default AppForState;
