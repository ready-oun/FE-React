import { useState } from "react"; // useState 훅을 불러옵니다.

/***
 * 기존의 Register.jsx 를 개선한 컴포넌트
 *
 * 1. state 정보가 다양한 경우 => 객체로 관리
 *    - JavaScript 전개(스프레드) 연산자
 *    - JavaScript 의 객체 생성
 *
 * 2. 기존의 요소별 event handler => 통합 event handler 관리
 *    - event 객체의 target.value, target.name
 *    - 수정되는 HTML 요소와 event 객체와의 관계
 *
 */

const RegisterUpgrade = () => {
  // 상태 변수를 객체 형태로 선언합니다.
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  // 통합 이벤트 핸들러 함수
  const onChange = (e) => {
    console.log(e.target.name + " : " + e.target.value);

    // 현재 상태를 유지하면서 특정 프로퍼티만 업데이트합니다.
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        ></input>
        {input.name}
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        ></input>
        {input.birth}
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
        {input.bio}
      </div>
    </div>
  );
};

export default RegisterUpgrade;
