/*function Body({ name, location, favorList }) {
  //   console.log(props);
  //   return (
  //     <div className="body">
  //       {props.name}은 {props.location}에 거주합니다.
  //     </div>
  //   );

  // 프로퍼티를 구조 분해 할당하여 같은 이름의 상수에 저장 => 객체가 아닌 상숫값인 결괏값을 볼 수 있음

  console.log(name, location, favorList);
  return (
    <div className="body">
      {name}은 {location}에 거주합니다. <br />
      {favorList.length}개 음식을 좋아합니다.
    </div>
  );




}
*/

/*
// Client print ChildComp which is React Component 
function Body({ children }) {
  console.log(children);
  return <div className="body">{children}</div>;
}

// in order to prevent TypeError by undefined element
Body.defaultProps = {
  favorList: [],
};
*/

// EventHandler
/**
    It returns just a method self, not the result of calling the method 
    when you set up EventHandler 
 */

/*    
function Body() {
  function handleOnClick() {
    alert("You've clicked the button!");
  }
  return (
    <div className="body">
      <button onClick={handleOnClick}>Click this</button>
    </div>
  );
}
*/

/*
// p.222
function Body() {
  function handleOnClick(e) {
    console.log(e);
    console.log(e.target.name);
  }
  return (
    <div className="body">
      <button name="Button A" onClick={handleOnClick}>
        Button A
      </button>
      <button name="Button B" onClick={handleOnClick}>
        Button B
      </button>
    </div>
  );
}
*/

// p.226 STATE
// How to Use: const [light, setLight] = useState('off');
import { useState } from "react";

/*
function Body() {
  console.log("Update!");
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}
*/

function Body() {
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <input onChange={handleOnChange} />
    </div>
  );
}

export default Body;
