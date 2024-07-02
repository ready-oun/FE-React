console.log("------truthy, falsy --------");

if (!undefined) {
  // undefined => falsy
  console.log("1 falsy value");
}

if (!null) {
  // null => falsy
  console.log("2 falsy value");
}

if (!0) {
  // undefined => falsy
  console.log("3 falsy value");
}

if (!-0) {
  // undefined => falsy
  console.log("4 falsy value");
}

if (!NaN) {
  // undefined => falsy
  console.log("5 falsy value");
}

if (!"") {
  // undefined => falsy
  console.log("6 falsy value");
}

if (!``) {
  // undefined => falsy
  console.log("7 falsy value");
}

console.log("---truthy, falsy 활용---");

let varA;

if (varA) {
  console.log("값이 있음");
}

if (varA) {
  console.log("값이 없음");
}

// 단락 평가 : 논리 연산에서 처리를 지름길로 수행할 수 있도록 함
// AND (&&) : 앞의 피연산자가 false 이면 뒤 피연산자는 볼 필요 없음
// OR (||) : 앞의 피연산자가 true이면 뒤 피연산자는 볼 필요 없음

function calcA() {
  console.log("a");
  return false;
}

function calcB() {
  console.log("b");
  return true;
}

console.log(calcA() && calcB()); // a 출력하고 false이니 뒤의 b는 수행 안 함
console.log(calcB() && calcA()); // true인 b 출력하고 a 까지 확인한 후 false 반환함

// 단락 평가 + truthy false
// truthy false에 해당되는 값이면, 그대로 반환. 그래서 undefined로 ..?
console.log("단락 평가 + truthy false");
function calcA2() {
  console.log("a");
  return undefined; // falsy
}

function calcB2() {
  console.log("b");
  return true;
}

console.log(calcA2() && calcB2());
console.log(calcB2() && calcA2());

// 객체 + 단락 평가 + truthy falsy
// console.log("객체 + 단락 평가 + truthy falsy");

// function getName(person) {
//   return person.name; // TypeError: Cannot read properties of undefined (reading 'name')
// }

// let person2; // 객체
// let name2 = getName(person2);

// 객체 + 단락 평가 + truthy falsy
console.log("객체 + 단락 평가 + truthy falsy");

function getName(person) {
  if (person !== undefined && person !== null) {
    return person.name; // if 추가 due to TypeError
  } else {
    return "존재하지 않는 객체 정보임.";
  }
}

let person2; // 객체
let name2 = getName(person2);

let person3 = null; // 객체
let name3 = getName(person3);

// 모든 객체에 대해서 null, undefined 체크하는 것이 부담이 됨
// => 객체 + 단락 평가 + truthy falsy

function getName3(person) {
  return person && person.name;
}

// person이 null => false
// person.name 이 undefined => false

let person4 = { name: "홍길동" }; // 리터럴 객체

let name1 = getName3(undefined);
console.log(name1); // undefined
name1 = getName3(null);
console.log(name1); // null
name1 = getName3(person4);
console.log(name1); // 홍길동

// 객체 자료형
console.log("--------객체 자료형--------");

// 원시 자료형을 제외하고는 모든 자료형은 객체 자료형임
// 그래서 배열도 객체 자료형임 배열에는 프로퍼티와 메소드가 있음

const arr1 = [1, 2, 3];
console.log(arr1.length); // 배열 객체의 프로퍼티

arr1.push(4); // 배열 객체의 메소드
console.log(arr1);

// 함수에도 프로퍼티가 있따
function myFunction() {
  console.log("hello");
}

console.log(myFunction.name); // 함수명을 출력했음 => 함수 객체의 프로퍼티

let numA = 1;
let numB = 1;

console.log(numA === numB);

let people1 = {
  name: "홍길동",
};

let people2 = {
  name: "홍길동",
};

console.log(people1);
console.log(people2);
console.log(people1 === people2); // 서로 다른 객체의 주소값을 비교한 거라서 false
// 따라서 객체의 프로퍼티의 값을 비교해야 함

let func2 = () => {
  console.log("func2");
};

let func3 = () => {
  console.log("func3");
};

console.log(func2 === func3); // false, 객체의 주소값 비교
// 반복문 활용
console.log("---반복문 활용---");

arr = [1, 2, 3, 4];

// 1. index를 활용
for (let idx = 0; idx < 4; idx++) {
  console.log(arr[idx]);
}

// 2. 배열 객체의 프로퍼티 활용
let len = arr.length;

console.log("len = ");
console.log(len);

console.log("arr[idx] = ");
for (let idx = 0; idx < arr.length; idx++) {
  console.log(arr[idx]);
}

// 3. for ...of 사용
console.log("item = ");
for (let item of arr) {
  console.log(item);
}

// 객체와 반복문
console.log("---객체와 반복문---");

// 1. 프로퍼티의 key 취득
person = {
  name: "홍길동",
  age: 26,
  location: "부산",
};

const keyArr = Object.keys(person);

console.log(keyArr);

// 2. 키를 활용한 프로퍼티 value 탐색
console.log("// 2. 키를 활용한 프로퍼티 value 탐색");
for (let key of keyArr) {
  let value = person[key];
  console.log(value);
}

// 3. Object.values 를 활용한 프로퍼티 value 탐색
console.log("// 3. Object.values 를 활용한 프로퍼티 value 탐색");
const valueArr = Object.values(person);

console.log(valueArr);

// 4. for...in을 이용한 순회
console.log("// 4. for...in을 이용한 순회");

for (let key in person) {
  const value = person[key];
  console.log(key, value);
}

// 구조 분해 할당 : 배열이나 객체에서 요소를 해체해 개별 변수에 그 값을 담는 것
console.log("---구조 분해 할당---");

arr = [1, 2, 3];

let one = arr[0];
let two = arr[1];
let three = arr[2];

let [one2, two2, three2] = arr; // 구조 분해 할당

console.log(one, two, three);
console.log(one2, two2, three2);

let arr2 = [1, 2, 3];
let [one3, two3] = arr2; // 요소가 3개인데, 구조 분해 할당은 2개로 ..
console.log(one3, two3);

arr2 = [1, 2];
let [one4, two4, three4] = arr2;

console.log(one4, two4, three4); // 마지막 three4는 undefined로 할당됨

console.log("---객체 구조 분해 할당---");

person = {
  name4: "이기상",
  age4: 25,
  location4: "붓싼",
};

// 객체의 분해 할당 기준은 객체의 key를 기준으로 수행됨
let { name4, age4, location4 } = person; // 배열과 달리 key값이 일치해야 함

console.log(name4, age4, location4);

person = {
  name4: "이기상",
  age4: 25,
  location4: "붓싼",
};

// 객체의 분해 할당이 객체의 key 기준으로 수행되지 않음
// 따라서 모두 undefined 값으로 할당됨
let { name5, age5, location5 } = person; // 배열과 달리 key값이 일치해야 함
console.log(name5, age5, location5);

console.log("---함수의 매개변수 구조 분해 할당---");

// 객체는 key 값 기준으로 분해 할당이 이루어지므로 아래 결과는 모두 undefined가 할당됨
function func4({ name2, age2, location2 }) {
  console.log(name2, age2, location2);
}

person = {
  name: "홍길동",
  age: 25,
  location: "부산",
};

func4(person);

// 객체는 key 값 기준으로 분해 할당이 이루어지므로 아래 결과는 모두 정상적으로 할당됨
function func5({ name, age, location }) {
  console.log(name, age, location);
}

person = {
  name: "홍길동",
  age: 25,
  location: "부산",
};

func5(person);

console.log("---스프레드, rest 연산자---");

/** 
    스프레드 연산자 : 반복이 가능한 객체에서 값을 개별 요소로 분리하는 기능으로, 전개 연산자라고도 함 
    rest 연산자 : 개별 요소를 다시 배열로 묶어주는 기능 
 */

console.log("--- 스프레드 연산자(배열) ---");
arrA = [1, 2, 3];
arrB = [...arrA, 4, 5, 6]; // 스프레드 연산자(전개 연산자)
// arrA의 요소를 하나씩 분리해서, arrB의 각 요소에 할당

console.log(arrB);

console.log("--- 스프레드 연산자(객체) ---");
objA = {
  a: 1,
  b: 2,
};

// objA 프로퍼티를 objB의 프로퍼티로 나열함
objB = {
  ...objA, // 객체 안에 사용된 스프레드 연산자
  c: 3,
};

console.log(objA);
console.log(objB);

console.log("---스프레드 연산자(함수)---");

function func6(a, b, c) {
  console.log(a, b, c);
}

arr = [1, 2, 3];
func6(...arr);

console.log("---rest 매개변수---");

function func7(param, ...rest) {
  console.log(param); // 1이 할당됨
  console.log(rest); // 2,3,4가 배열로 묶여서 할당됨
}

func7(1, 2, 3, 4);
// SyntaxError: A rest parameter must be last in a parameter list
/* 
  function func8(...rest, param) {
    console.log(param); // 1이 할당됨 
    console.log(rest); // 2,3,4가 배열로 묶여서 할당됨 
  }
*/

console.log("---배열 메소드---");

// 1. push: 요소 추가
let movie = ["비그치다", "매드맥스", "인사이드아웃"];

// 배열의 맨 끝에 요소를 추가하고, 새로운 배열의 길이를 반환
const newLength = movie.push("행복을 찾아서"); // 추천~~

console.log(newLength);
console.log(movie);

movie.push("쇼군", "나중에 생각나면 추가~");
console.log(movie);

//2. pop : 제거
console.log("--- pop: 제거 ---");
const removeItem = movie.pop();

console.log("removeItem = ", removeItem);
console.log("movie = ", movie);

let movie1 = [];
const removeItem2 = movie1.pop();

console.log("removeItem2 = ", removeItem2); // 에러 발생하지 않고, undefined 반환됨

// 3. shift : 맨 앞 요소를 제거, 제거한 요소를 반환
console.log("--- pop : 제거 ---");

const removeItem3 = movie.shift();

console.log("removeItem3 = ", removeItem3);
console.log("movie = ", movie);

//4. unshift : 맨 앞에 요소를 추가, 배열의 길이를 반환
console.log("--- unshift : 추가 ---");

const newLength2 = movie.unshift("비그치다2");

console.log(movie);

/**
 * shift, unshift
 *
 * unshift : 배열의 맨 앞에 추가. 기존의 배열 요소를 한 칸씩 뒤로
 *          이동을 시켜야 함.
 *
 * shift : 배열의 맨 앞의 요소를 삭제. 기존의 배열 요소를 한 칸씩 앞으로
 *          이동을 시켜야 함.
 *
 * 따라서, push, pop에 비해서, unshift 와 shift 는 성능이 낮음.
 */

console.log("--- slice : 자르기 ---");

const arr3 = [1, 2, 3];
const sliced = arr.slice(0, 2); //0번째 인덱스에서 2개의 요소 선택

console.log(arr);
console.log(sliced);

const sliced2 = arr.slice(1); //자르기 시작 위치만 설정
console.log(sliced2); // 시작 위치에서 끝까지

// 시작 위치를 음수로 설정한 경우
console.log(arr3.slice(-1)); // 배열의 끝에서 첫 번째에서 끝까지 => 3
console.log(arr3.slice(-2)); // 배열의 끝에서 두 번째에서 끝까지 => 2, 3
console.log(arr3.slice(-3)); // 배열의 끝에서 세 번째에서 끝까지 => 1, 2, 3

//6. concat : 서로 다른 배열을 이어부 붙여 새 배열을 반환하는 메소드.
console.log("--- concat : 합치기 ---");

arrA = [1, 2];
arrB = [3, 4];

let arrC = arrA.concat(arrB);

console.log(arrC);

// 배열의 순회 메소드
console.log("--- 배열의 순회 메소드 ---");

/**
 * 7. foreach 메소드
 *
 *      - 인수로 함수를 요구함. => 콜백 메소드
 *      - foreach 는 배열의 모든 요소를 각각 순회하여
 *        인수로 전달된 콜백 메소드가 정의된 대로 요소를 작업.
 *      - item : 현재 순회중인 배열 요소
 *      - index : 현재 순회하는 배열 요소의 인덱스
 *      - array : 순회 중이 배열
 *
 */

// call back 메소드 정의 => foreach 메소드의 매개변수로 전달
// SOLID의 OCP 원칙을 적용했다고 봐도 무방함.
// 사용자 친화 API로 제공되고 있음. foreach() 이름 자체가.
console.log("--- foreach, call back ---");
function cb(item, idx) {
  console.log(`${idx}번째 요소 : ${item}`);
}

const arr4 = [1, 2, 3, 4, 5];

arr4.forEach(cb);

// 위의 콜백 메소드를 화살표 표현식으로 변경.
console.log("--- foreach, 화살표 표현식 ---");
arr4.forEach((item, idx) => {
  console.log(`${idx}번째 요소 : ${item}`);
});

console.log("--- 8. 탐색 메소드 - indexOf ---");
/**
 * 8. 탐색 메소드 - indexOf
 *      배열에서 특정 조건을 만족하는 요소를 찾아내는 메소드
 *
 *      arr.indexOf(item, fromIndex);
 *
 *      - item : 배열에서 찾으려는 요소값. => 검색 조건
 *      - fromIndex : 탐색을 시작할 위치.
 */

let arr5 = [1, 3, 5, 7, 1];

// 검색이 되면, 검색 위치값을 반환하면서, 탐색을 중지함.
console.log(arr5.indexOf(1, 0)); // 1 : 검색 조건, 0 : 검색 시작 위치

arr5 = [2, 3, 5, 7, 1];
console.log(arr5.indexOf(1, 0));

arr5 = [1, 3, 5, 7, 1];

console.log(arr5.indexOf(1, -1)); // -1 : 배열의 끝에서 탐색을 시작.

// 탐색 결과가 없는 경우. => -1 을 반환.
console.log(arr5.indexOf(9));

// 탐색 조건과 배열의 요소의 데이터 타입이 다른 경우. => -1 을 반환.
// 비교 연산자(===) 로 요소를 비교함으로, 자료형이 다르면, 다른 값으로 평가.
console.log(arr5.indexOf("3"));

// 배열에서 객체를 탐색하는 경우. => -1 을 반환.
// indexOf 메소드로는 객체 자료형의 값을 탐색할 수 없음.
// => findIndex, find 메소드를 사용해야 함.
arr5 = [{ name: "홍길동" }, 1, 2, 3];
console.log(arr5.indexOf({ name: "홍길동" }));

console.log("--- 9. 탐색 메소드 - includes ---");
// 9. 탐색 메소드 - includes
//   배열에 틀정 요소가 있는 판별.

arr = [1, 3, 5, 7, 1];

console.log(arr.includes(3)); // 탐색하는 데이터가 존재하면, true
console.log(arr.includes(9)); // 존재하지 않으면, false
console.log(arr.includes("3")); // 자료형이 다르면, false

console.log("--- 10. 탐색 메소드 - findIndex - 콜백 함수 ---");
/**
 * 10. 탐색 메소드 - findIndex
 *     - 인수로 콜백 함수를 전달해야 함. => 판별 함수.
 *       true : 판별 함수의 조건식 만족하는 경우.
 *       false : 판별 함수의 조건식을 만족하지 않는 경우.
 *     - 판별 함수를 만족하는 첫 번째 요소의 인덱스 번호를 반환하고,
 *       없으면, -1을 반환.
 *     - item : 현재 요소
 *     - index : 현재 인덱스
 *     - array : 탐색 대상 배열
 */

// findIndex 의 콜백 메소드를 정의 - 배열 요소중에서 짝수를 탐색
function determine(item, idx, arr) {
  if (item % 2 === 0) {
    // 조건식 : 짝수여부 확인.
    return true;
  } else {
    return false;
  }
}

arr5 = [1, 3, 5, 6, 8];
let index = arr5.findIndex(determine);

console.log(index); // 3 반환 => index 3 인 요소는 6임. 짝수임.

console.log("--- 10. 탐색 메소드 - findIndex - 화살표 표현식 ---");
index = arr5.findIndex((item) => (item % 2 === 0 ? true : false));

console.log(index);

console.log("--- 10. 탐색 메소드 - findIndex - 객체 탐색 ---");

arr5 = [
  { name: "홍길동", age: 20 }, // idx : 0
  { name: "이종원", age: 21 }, // idx : 1
  { name: "신다민", age: 22 }, // idx : 2
  { name: "김효빈", age: 23 }, // idx : 3
];

index = arr5.findIndex((item) => item.name === "신다민");

console.log(index); // 2 가 반환됨. 탐색 성공함.

console.log("--- 11. 탐색 메소드 - find- 객체 탐색 ---");
/**
 * 11. 탐색 메소드 - find
 *      find 는 findIndex 와 달리 탐색해서 찾으면,
 *      인덱스 정보가 아닌 요소 정보를 반환함.
 */

let element = arr5.find((item) => item.name === "신다민");

console.log(element);

console.log("--- 12. 탐색 메소드 - filter - 객체 탐색 ---");
/**
 * 12. 탐색 메소드 - filter
 *      배열에서 조건을 만족하는 요소만 모아 새로운 배열로 반환.
 */

arr5 = [
  { name: "홍길동", hobby: "당구" }, // idx : 0
  { name: "이종원", hobby: "영화" }, // idx : 1
  { name: "신다민", hobby: "당구" }, // idx : 2
  { name: "김효빈", hobby: "노래" }, // idx : 3
];

let finterArr = arr5.filter((item) => item.hobby === "당구");

console.log(finterArr);

console.log("--- 13. 변형 메소드 - map -");
/**
 * 13. 변형 메소드 - map
 *     배열을 변형하거나 요소를 재정렬.
 *
 *     - 콜백 메소드를 매개변수로 전달.
 *     - item, index, array 가 제공됨.
 */

arr5 = [1, 2, 3, 4];
let newArr = arr5.map((item) => item * 3);

console.log(newArr);

console.log("--- 13. 변형 메소드 - map - 객체 배열");

arr5 = [
  { name: "홍길동", hobby: "당구" }, // idx : 0
  { name: "이종원", hobby: "영화" }, // idx : 1
  { name: "신다민", hobby: "당구" }, // idx : 2
  { name: "김효빈", hobby: "노래" }, // idx : 3
];

newArr = arr5.map((item) => item.name);

console.log(newArr);

console.log("--- 14. 변형 메소드 - 정렬 - sort -");
/**
 * 14. 변형 메소드 - 정렬 - sort
 *     배열의 요소를 재정렬.
 *
 *     - 콜백 메소드를 매개변수로 전달. 비교함수.(오름차순, 내림차순)
 *     - item, index, array 가 제공됨.
 */

arr5 = ["b", "a", "c"]; // 문자 형태의 요소

arr5.sort(); // 오름차순 정렬

console.log(arr5);

arr5 = [10, 5, 3]; // 숫자 형태의 요소

arr5.sort();

console.log(arr5);

// 문자 형태는 정렬, 숫자 형태는 정렬 안되고 있음. => 비교 함수를 사용해야 함.

// 비교 함수 선언 - 오름 차순
function compare(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

arr5 = [10, 5, 3];

arr5.sort(compare);

console.log(arr5); // 결과 오름차순으로 정렬됨.

// 비교 함수 선언 - 내림 차순
function compare2(a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
}

arr5.sort(compare2);

console.log(arr5);

console.log("--- 15. 변형 메소드 - 문자열 연결 - join -");
/**
 * 15. 변형 메소드 - 문자열 연결 - join
 *     배열 요소를 모두 연결해 하나의 문자열로 반환.
 *
 *     - 분리 기호를 사용하는 구분자를 인수로 전달. 필수는 아님.
 *       생략하면, 기본적으로 "," 를 사용.
 */

arr5 = ["너무", "쉬워", "JavaScript"];

console.log(arr5.join()); // 구분자 : "," 를 사용
console.log(arr5.join("-")); // 구분자 : "-" 를 사용.

console.log("--- 16. 변형 메소드 - reduce -");
/**
 * 16. 변형 메소드 - reduce
 *     배열 요소를 모두 순회하면서, 인수로 제공한 함수를 실행하고,
 *     단 하나의 결과값을 반환.
 *
 *     - 콜백 메소드를 전달해야 함. => 리듀서
 *       콜백 메소드 전달시, 초기값을 전달.
 *     - acc 제공됨. 누산기.
 *       이전 함수의 호출 결과를 저장.
 *       리듀서(콜백 메소드)의 두 번째 매개변수가 누산기의 초기값이 됨.
 *     - item, index, array 제공됨.
 */

// reduce 메소드를 활용 - 배열의 모든 요소의 값에 대한 누적값을 구할 수 있음.

arr5 = [1, 2, 3, 4, 5];

let result = arr5.reduce((acc, item) => acc + item, 0);
/**
 *  acc : 누산기
 *  item : 현재의 배열의 요소
 *  acc + item : 콜백 메소드
 *  0 : acc(누산기) 의 초기값.
 *
 *  0 -> 0+1 -> 0+1+2 -> 0+1+2+3 .... -> 0+1+2+3+4+5 (반환되는 결과값)
 */

console.log(result);

/**
 * ================================================ Date 객체와 날짜 ==========================================================================
 */

// Date 객체 생성
let date = new Date(); //생성자

console.log(date);

// 협정 세계시 : 1970.1.1.0:0:0 기준 => UTC + 0

date = new Date(0); // UTC + 0 로 날짜 객체 생성
console.log(date); // 한국 표준시 : 기준시간보다 9시간이 이르다.

// 타임 스탬프를 사용한 Date 객체 생성
// 타임 스탬프 : UTC+0 을 기준으로 지난 시간을 밀리초로 환산한 값.

date = new Date(24 * 3600 * 1000);
console.log(date);

// 문자열로 Date 객체 생성
let date1 = new Date("2000-10-20/00:00:00");
let date2 = new Date("2000.10.20/00:00:00");
let date3 = new Date("2000/10/20/00:00:00");
let date4 = new Date("2000 10 20/00:00:00");

console.log("date1 : " + date1);
console.log("date2 : " + date2);
console.log("date3 : " + date3);
console.log("date4 : " + date4);

// 숫자로 Date 객체 생성
// 년, 월, 일, 시, 분, 초, 밀리초 순서로 매개변수를 설정.
// 월의 범위 : 0(1월) ~ 11(12월)
let date5 = new Date(2024, 6, 2, 0, 0, 0, 0);
console.log("date5 : " + date5);

// 숫자와 타임스탬프를 이용한 Date 객체 생성
date5 = new Date(2024, 6, 2);
let timestamp = date5.getTime();
console.log("timestamp : " + timestamp);

let dateClone = new Date(timestamp);
console.log("dateClone : " + dateClone);

// Date 객체에서 제공되는 메소드 : getter
// 1. getFullYear : 네 자리수의 연도를 반환
console.log("getFullYear :" + dateClone.getFullYear());

// 2. getMonth : 월을 반환. 0 ~ 11 범위.
console.log("getMonth :" + dateClone.getMonth());

// 3. getDate : 일을 반환.
console.log("getDate :" + dateClone.getDate());

// 4. getDay : 요일을 반환. 0(일) ~ 6(토) 범위.
console.log("getDay :" + dateClone.getDay());

// 5. getHours, getMinutes, getSeconds, getMilliseconds

// Date 객체에서 제공되는 메소드 : setter
// 6. setFullYear : 연도 수정
dateClone.setFullYear(2017);

console.log(dateClone);

// 7. setMonth : 월 수정
dateClone.setMonth(4);
console.log(dateClone);

// 8. setHours, setMinutes, setSeconds

// Date 객체에서 제공되는 메소드 : 출력( 문자열로 변환 ), toString()
console.log(dateClone.toString()); // 날짜, 시간정보
console.log(dateClone.toDateString()); // 날짜
console.log(dateClone.toLocaleString()); // 년월일 순서의 날짜, 시간정보
console.log(dateClone.toLocaleDateString()); // 년월일 순서의 날짜

// Date 객체 응용하기 - 중요 - 기능을 구현해야 함.
// 1. n 월 단위로 이동
function moveMonth(date, monveMonth) {
  // 매개변수 date 객체의 월 정보 취득
  const curTimestamp = date.getTime();
  const curMonth = date.getMonth();

  const resultDate = new Date(curTimestamp);

  // 취득한 월 정보에 monveMonth 를 더함.
  // 더한 월을 setter를 이용해서 설정.
  resultDate.setMonth(curMonth + monveMonth);

  return resultDate;
}

const dateA = new Date("2000-10-10"); //현재날짜
console.log(dateA); // Oct : 10월

const dateB = moveMonth(dateA, 1);
console.log(dateB); // Nov : 11월

const dateC = moveMonth(dateA, -1);
console.log(dateC); // Sep : 9월

// 더 중요.
// 2. 날짜가 프로퍼티로 있는 객체 배열에서,
//    날짜로 해당 객체를 조회 => 검색 결과가 배열로 반환
// 배열에 제공되는 메소드 => 탐색 메소드 => filter() 메소드를 활용.
// filter() 메소드의 매개변수로 callback 메소드를 전달. => 검색 조건 구현.

// 첫 번째 매개변수 : 검색날짜조건
// 두 번째 매개변수 : date 정보가 프로퍼티로 있는 객체 배열
function filterThisMonth(searchConditionDate, dateArray) {
  // 매개변수에서 년, 월 정보 취득
  const year = searchConditionDate.getFullYear();
  const mont = searchConditionDate.getMonth();

  // 시작일 종료일 날짜 생성 : 검색 범위
  const srartDate = new Date(year, month, 1, 0, 0, 0, 0);
  const endDate = new Date(year, month + 1, 0, 23, 59, 59);

  // 두 번째 매개변수의 filter 메소드를 사용.
  // 검색 범위의 값은 timestamp로 사용.
  const resultArray = dateArray.filter(
    (item) =>
      srartDate.getTime <= item.getTime() && item.getTime <= endDate.getTime()
  );

  // 검색 결과 배열 반환
  return resultArray;
}

// 2000. oct. 01. 00:00:00
const srartDate = new Date(2000, 9, 1, 0, 0, 0, 0);
console.log("srartDate : " + srartDate);

// 2000. oct. 31. 23:59:59
const endDate = new Date(2000, 9 + 1, 0, 23, 59, 59);
console.log("endDate : " + endDate);

const dateArray = [
  new Date("2000-10-1"), // 검색 결과 대상
  new Date("2000-10-31"), // 검색 결과 대상
  new Date("2000-11-1"),
  new Date("2000-9-30"),
  new Date("1900-10-11"),
];

const today = new Date("2000-10-10/00:00:00");

const filteredArray = filterThisMonth(today, dateArray);

console.log("filteredArray : " + filteredArray);
