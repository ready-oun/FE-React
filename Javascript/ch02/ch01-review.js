console.log("hello ch02 javascript~~!!");

/** 호이스팅  */
console.log("--- 호이스팅 ---");

func(); // 함수 정의가 없지만, 호출한 상태.

function func() {
  console.log("호이스팅 테스트");
}

console.log("--- 콜백 함수 ---");

function parentFunc(callback) {
  console.log("parent");
  callback();
}

function childFunc() {
  console.log("child");
}

parentFunc(childFunc);

/** callback method 의 활용 - solid 책
 *
 * 비즈니스 : 계좌의 입출금 내역 계산
 * OCP : 코드의 재사용 => 메소드 내의 반복문을 재사용.
 */

// 아래의 메소드에서 출력부분만 제외하고 코드가 동일.
function repeat(count) {
  for (let idx = 0; idx < count; idx++) {
    console.log(idx + 1);
  }
}

function repeatDouble(count) {
  for (let lidx = 0; idx < count; idx++) {
    console.log((idx + 1) * 2);
  }
}

// 반복문 재사용되도록 개선한 함수
function repeat2(count, callback) {
  for (let idx = 0; idx < count; idx++) {
    callback(idx + 1);
  }
}

function origin(count) {
  console.log(count);
}

function double(count) {
  console.log(count * 2);
}

repeat2(5, origin);
repeat2(5, double);

console.log("--- 화살표 함수 ---");

// 함수 표현식을 더 간략하게 코드를 작성.

greeting = (name) => `hello ${name}`;

greetingText = greeting("홍길동");

console.log(greetingText);

console.log("--- 객체 ---");

// 객체 생성
let objA = {}; // 리터럴 객체
let objB = new Object(); // 객체 생성자

let obj = {
  // obj 는 객체 참조 변수, 저장된 것은 주소값
  a: 1,
};

let isPropertyExists = obj.b !== undefined;

console.log(isPropertyExists);
console.log(obj.b); // obj.b 는 undefined 임.

// in 연산자
let person = {
  age: 10,
};

// "name" 이라는 property 가 person 객체에 존재하는지?
let isNameExist = "name" in person;

console.log(isNameExist); // false

let isAgeExist = "age" in person;
console.log(isAgeExist); // true

console.log("--- 배열 ---");
// 배열의 값으로 어떤 자료형도 사용할 수 있음.
// 요소로 배열, 객체, 함수....

let arr = [
  1,
  "1",
  true,
  false,
  null,
  undefined,
  () => {},
  function () {},
  [1, 2, 3],
  { a: 1 },
];

console.log(arr); // arr 은 참조변수임. 저장된 값은 주소임.
// 따라서, arr 은 객체임. 객체에는 프로퍼티, 메소드로 구성.
// 그래서, javascript 에서 제공해주는 프로퍼티, 메소드 가 있음.

/**
 * javascript 의 자료형
 *
 * 원시자료형
 *      숫자형, 문자형, 불리언형, null형, undefined형
 * 객체자료형
 *      Object 형 - 배열, 함수, 정규표현식
 */

/**
 * javascript : C++, javascript engine C++ 로 만들어진 것임.
 *              C++ : C + OOP 를 더한 것임.
 *                    C : 메모리를 관리하는 변수 => 포인터
 *                        함수포인터 : 함수명
 *                    OOP : 기본형을 제외하고 다양한 사용자
 *                      정의 타입을 만들어서 사용할 수 있음.
 *
 * 기회가 된다면, C 언어 기본서 => C 언어 기반의 자료 구조.
 *              => C++ 기본서
 *
 * javascript 에서 객체주소 확이은?
 *   javascript engine 에서 보호하고 있음.
 *   1. javascript engine C++ 로 컴파일해서 확인.
 *   2. 개발조 모드에서 간접적으로 확인.
 *
 *
 */

console.log("--- null 병합 연산자 ---");

let name;
let nickName = "nickName";

let user = name ?? nickName; // 값이 확정된 것은 nickName;

console.log(user);

/***************************************************/
/******** 여기까지는 ch1 의 중요한 부분 복습. ********/
/***************************************************/
