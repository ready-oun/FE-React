console.log(
  "hi hi javascript ~!!! You're known for a weirdo :) good luck lucky vicky "
);

console.log("Coffee is the best painkillers.");

const age = 100;
console.log("You're " + age + "! Congrats :) ");

/* 변수 선언 */
let age1 = 25;
console.log(age);

let age2 = 25;

var age3 = 24; // 일반적으로는 let 키워드로 변수 선언해서 사용

const age4 = 25;
age3 = 200;

/* 변수에 기호 사용 - _와 $만 가능 */
let $age = 25;
let human_age = 25;

console.log($age);
console.log(human_age);

/* 변수에 숫자 사용? 변수명을 숫자로 시작하면 안됨 */
// let 2024year = "good";
let _2024year = "big difference";
let $2024year = "massive distinction";

console.log(_2024year);
console.log($2024year);

/* 변수에 예약어 사용? Nope */
// let let = "good";

/* 변수의 대소문자 구별 */
let code = 1;
let Code = 2;

console.log(code);
console.log(Code);

/**
    변수이름 작성 
    - camelCase
    let totalSalesCount = 10;
    - Pascal
    let TotalSalesCount = 10;
    - snake_case
    let total_sales_count =10; 
 */
/*
    자료형 
    - 원시자료형
        숫자형, 문자형, 불리언형 
    - 객체자료형 
        배열, 함수, 정규표현식
*/

// 숫자형
let age5 = 25;
let tall = 186.7;
let minus = -29;

console.log(1 + 2);
console.log(1 * 2);
console.log(1 - 2);
console.log(1 / 2);
console.log(1 % 2);

// Infinity
// 다른 언어와 달리 0으로 나누어도 오류가 발생하지 않고, Infinity가 결과로 반환됨
console.log(1 / 0);

console.log(Infinity); /* Infinity */
console.log(Infinity + 1); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)); /* -Infinity */
console.log(1 / Infinity); /* 0 */
console.log(1 / 0); /* Infinity */

// NaN : Not a Number
// 수학적으로 연산이 불가능하면, `NaN`이 반환됨.
// 프로그램이 오류를 발생시키거나, 멈추지 않음
const nan1 = 1 * "hello";
console.log(nan1);

/** 문자형 */
let name = "Dan Yoon";
let welcomeText = name + "반가워요.";

/**
name이라는 변수가 이미 예약어이거나 전역 객체의 속성이기 때문입니다. 
name은 JavaScript에서 전역 객체인 window의 속성 중 하나로, 브라우저 환경에서 창의 이름을 설정하거나 가져올 때 사용됩니다.

따라서, 동일한 이름의 변수를 선언하면 변수 이름이 충돌할 가능성이 있습니다. VSC는 이러한 잠재적인 문제를 경고하기 위해 해당 변수에 중간줄을 그어 표시합니다.

이 문제를 해결하려면, name 대신 다른 변수 이름을 사용하면 됩니다. 
 * 
 */

console.log(welcomeText);

// 백틱을 사용한 문자열 결합 : 템플릿 리터럴
let guestName = "이정훈";
let greetingText = `welcome ${guestName}`;
console.log(greetingText);

/** Boolean */
let isSwitchOn = false;
console.log(isSwitchOn);
isSwitchOn = true;
console.log(isSwitchOn);

/** null 
    : 변수에 아무런 값도 할당할 필요가 없는 경우, js에서는 독립적은 자료형으로 분류됨 
 */

let emptyVar = null;
console.log(emptyVar);

/** undefined : Undefined Values */
let realEmptyVar;
console.log(realEmptyVar);

/** Casting 형변환 

    1. 묵시적 형변환
    2. 명시적 형변환 
*/

// 묵시적
let number = 10;
let string = "20";
const result = number + string;
console.log(result); // 1020 => 10을 문자로 형변환 후 문자열 합치기

// 명시적 형변환
let strA = "10";
let strB = "10개";
let strC = "개10";

let numA = Number(strA);
let numB = Number(strB);

console.log(numA);
console.log(numB);

// 문자가 포함된 숫자를 숫자로 변환하기
let numAA = parseInt(strA, 10); // strA를 10진수 숫자로
let numBB = parseInt(strB, 10); // strA를 10진수 숫자로
let numCC = parseInt(strC, 10);

console.log(numAA);
console.log(numBB);

// 결과가 NaN으로 반환됨 => strC의 문자열이 문자로 시작하기 때문임 (숫자로 시작하는 건 바꿀 수 있는데 문자로 시작하면 못 바꿔줌..)
// parseInt 내장함수 : 문자열의 첫 문자부터 숫자로 변환하게 되므로, 문자로 시작하면 `NaN`을 반환하게 됨
console.log(numCC);

let numAA16 = parseInt(strA, 16); // strA를 16진수 숫자로
let numBB16 = parseInt(strB, 16); // strA를 16진수 숫자로

console.log(numAA16);
console.log(numBB16);

// 숫자를 문자로 형변환
let num = 2022;
let str = String(num); // 명시적 형변환

console.log(str);

let varA;
let varB = null;
let varC = true;

let strvarA = String(varA);
let strvarB = String(varB);
let strvarC = String(varC);

console.log(strvarA); // 문자열 undefined가 반환
console.log(strvarB); // 문자열 null이 반환
console.log(strvarC); // 문자열 true가 반환

// Boolean으로 형변환
let varTrue = 1; // true
let varNumTrue = 1; // true
let varFalse = 0; // false
let varNumFalse = 0; // false
let varBlank = ""; // false

let boolA = Boolean(varTrue);
let boolNumA = Boolean(varNumTrue);
let boolB = Boolean(varFalse);
let boolNumB = Boolean(varNumFalse);
let boolC = Boolean(varBlank);

console.log(boolA);
console.log(boolNumA);
console.log(boolB);
console.log(boolNumB); // false
console.log(boolC);

/** 연산자 */
// 대입 연산자
let numA1 = 1;
let numB1;
let numC1;

numB1 = numC1 = numA1;

console.log(numA1);
console.log(numB1);
console.log(numC1);

// 산술연산자
let numberA = 1;
let numberB = 2;

console.log(numberA + numberB);
console.log(numberA - numberB);
console.log(numberA * numberB);
console.log(numberA / numberB);
console.log(numberA % numberB);

// 복합대입연산자
let number1 = 10;

number1 += 10;
console.log(number1);

number1 -= 10;
console.log(number1);

number1 *= 10;
console.log(number1);

number1 /= 10;
console.log(number1);

number1 %= 10;
console.log(number1);

// 증감 연산자
let a = 1;
//a++; // 후위 연산자
console.log("증감 연산자");
console.log(a++); // 1 => 참조 후 증가
console.log(a); // 2

a = 1;
console.log(++a); // 2 => 증가 후 참조
console.log(a); // 2

// 논리 연산자
// or(||) : 둘 중 하나라도 참이면 참.
// and(&&) : 둘 중 하나라도 거짓이면 거짓.
// not(!) : 참이면 거짓, 거짓이면 참.

boolA = true;
boolB = false;

console.log(boolA || boolB); //true
console.log(boolA && boolB); //false
console.log(!boolA); //false
console.log(!boolB); //true

// 비교연산자
numberA = 2;
numberB = 2;
numberC = "2";

console.log(numberA === numberB); //true
console.log(numberB === numberC); //false

console.log(numberA !== numberB); //false
console.log(numberB !== numberC); //true

console.log(numberA < numberB); //false
console.log(numberB > numberC); //false

console.log(numberA <= numberB); //true
console.log(numberB >= numberC); //true

//null 병합 연산자
// 값이 확정된 변수를 찾을 때 사용.
// null, undefined : 값이 확정되지 않은 변수
varA = 10;
varB = 20;
varC;

console.log(varA ?? varB); //10 => 연산자의 왼쪽을 기준.
console.log(varB ?? varC); //20

// 변수 user에 해당하는 사용자의 이름이 없다면,
// 닉네임으로 사용.
let customerName;
let nickName = "winterHood";

let user = customerName ?? nickName;

console.log(user);

//typeof 연산자
varA = 1; //number
varA = "winterHood"; //string

console.log(typeof varA);

// 확인 결과 string 이면, varA++ 하지 않도록 확인함.
//console.log(varA++); //NaN

//삼항 조건 연산자
varA = "메뉴가 뭐지?";

typeof varA === "string"
  ? console.log("문자 자료형")
  : console.log("문자형 자료형이 아님");

//조건문
num = 11;

if (num === 10) {
  console.log("조건 일치!");
  console.log("num은 10 이상입니다.");
} else if (num > 10) {
  console.log("조건 일치!");
  console.log("num은 10 보다 큽니다.");
} else {
  console.log("조건 불일치!");
  console.log("num은 10 작습니다.");
}

//switch 문
let fruit = "apple";

switch (fruit) {
  case "apple": {
    console.log("사과");
    break;
  }
  case "banana": {
    console.log("바나나");
    break;
  }
  default: {
    console.log("해당 과일이 아님.");
  }
}

//반복문
for (let i = 1; i <= 10; i++) {
  if (i > 5) {
    console.log("반복문 종료");
    break;
  }
  console.log(i);
}

//함수
function greeting() {
  console.log("안녕하세요.");
}

greeting();

function getArea() {
  let width = 10;
  let height = 20;

  let area = width * height;

  console.log(area);
}

getArea();

function getArea2(width, height) {
  let area = width * height;
  console.log(area);
}

getArea2(10, 20);

// 결과를 반환하는 함수
function getArea3(width, height) {
  let area = width * height;
  return area;
}

let result2 = getArea3(50, 60);

console.log(result2);

// 중첩 함수 : 함수 내 또 다른 함수 선언
function greeting1() {
  function greetingWithName(name) {
    console.log(`What are you staring at, ${name}?`);
  }

  let name = "홍길동";
  greetingWithName(name);
}

greeting1();

console.log("------함수와 호이스팅------");

// 함수와 호이스팅(Hoisting)
func(); // func 함수 호출

function func() {
  // func 함수 선언부
  console.log("This is function()");
}

/** 
    함수와 호이스팅 

    - 호이스팅이란? 
    함수 func에 대한 선언이 호출 코드보다 아래에 위치하지만,
    마치 호출보다 먼저 함수를 선언한 것처럼 자연스럽게 동작하고 있음

    함수를 선언하기 전에도 호출할 수 있는 자바스크립트의 기능 ... 

    - 준비 단계란?
    자바스크립트는 코드를 실행하기 전에 준비 단계를 수행함
    따라서, 준비 단계에서 중첩 함수가 아닌 것들은 모두 찾아서 미리 생성해두게 됨 

    - 장점
    코드 내에서 함수 선언 위치를 강제하지 않기 때문에 더 유연한 프로그래밍이 가능함 
 */

/** 함수 표현식 : 함수를 생성하고 값을 변수에 저장하는 방법 
     * 
        함수 표현식으로 만든 함수는 호이스팅되지 않음 
    */
console.log("--함수 표현식--");

let greeting3 = function () {
  console.log("g'day mate");
};

greeting3();

let greeting4 = greeting3; // ()가 없는 점에 주의
greeting4();

// 함수 표현식으로 호이스팅 확인
funcA();
// funcB();

function funcA() {
  // 일반적인 함수
  console.log("func A");
}

// let funcB = function () {
//   // 함수 표현식으로 만든 함수
//   console.log("func B"); // Uncaught - ReferenceError: Cannot access 'funcB' before initialization
// };

/** 콜백 함수 : 함수를 다른 함수의 매개변수로 사용하는 경우  */
console.log("-----콜백 함수-----");

function parentFunc(callback) {
  console.log("parent");
  callback;
}

function childFunc() {
  console.log("child");
}

parentFunc();
parentFunc(childFunc);
childFunc();
childFunc(parentFunc);

// 함수 표현식을 이용한 `콜백함수`
console.log("------함수 표현식을 이용한 `콜백함수`-------");

function repeat(count, callback) {
  for (let idx = 0; idx < count; idx++) {
    callback(idx + 1);
  }
}

const double = function (count) {
  console.log(count * 2);
};

repeat(5, double); // double은 함수 표현식

// 화살표 표현식(화살표 함수) : 함수 표현식의 단축형
// let funcA = (매개변수) => 반환값;

let funcZ = function (매개변수) {
  return 반환값;
};

console.log("--------화살표 표현식 ------------");
greeting4 = (name) => `hello ${name}`;

greetingText = greeting4("홍길동");

console.log(greetingText);

greeting4 = (name) => {
  let greetingText = `hello ${name}`;
  return greetingText;
};

console.log(greeting4("홍길동2"));

// 콜백함수 + 화살표 함수
console.log("----- 콜백함수 + 화살표 함수 ------");

let isConfirm = true;

// callbback method, 2 parameters are function expressions
function confirm(onYes, onNo) {
  if (isConfirm) onYes();
  else onNo();
}

// call callback method
confirm(
  () => console.log("Approved"),
  () => console.log("Declined")
);

/** Scope */
a = 1;

function foo() {
  console.log(a);
}

function bar() {
  console.log(a);
}

foo();
bar();
console.log(a);

/** 객체 

객체 생성 방법
let objA = {}; // 리터럴 객체
let objB = new Object(); // 객체 생성자 

let person = {
    name : "홍길동", // name 프로퍼티 ( 자바에[서는 멤버)
    age : 25 // age 프로퍼티 ( 자바에[서는 멤버)
}
*/

console.log("--------객체-----------");

let person = {
  name: "홍길동",
  age: 25,
  "like cat": true,
};

const personName = person.name;
const personAge = person["age"];

console.log(personName);
console.log(personAge);

// Add Property
person.gender = "male";
person["nickname"] = "Winterlood";

console.log(person.gender);
console.log(person["nickname"]);

// Add Property - key & value : 유동적
function addProperty(obj, key, value) {
  obj[key] = value;
}

let obj = {};

addProperty(obj, "a", 1);
addProperty(obj, "b", 2);
addProperty(obj, "c", 3);

console.log(obj);

// Modify Properties
let cat = {
  name: "귀요미",
  age: 1,
};

cat.name = "귀요미5";

console.log(cat.name);
cat["age"] = 2;

console.log(cat);

// Delete Properties
console.log(cat);

delete cat.name;
console.log(cat);
delete cat.age;
console.log(cat);

// 상수 객체 Properties
const obj2 = {
  a: 1,
  b: "text",
};

obj2.a = 2;
obj2.c = undefined;
delete obj2.b;

console.log(obj2);

// 객체에 특정 프로퍼티의 존재 유무
let obj3 = {
  a: 1,
};
console.log(obj3.a);
console.log(obj3.b);

let isPropertyExists = obj3.b !== undefined;

console.log(isPropertyExists);

// Method
let person2 = {
  name: "홍길동",
  sayHi: function () {
    // 객체의 sayHi 메소드
    console.log("morning");
  },
};

person2.sayHi();

/** 배열

let arrA = new Array(); // 배열 생성자 
let arrB = []; // 배열 리터럴 

 */

let arr = [
  1,
  "1",
  true,
  null,
  undefined,
  () => {},
  function () {},
  [1, 2, 3],
  { a: 1 },
];

console.info(arr);

// 배열 인덱스
let food = ["짜장면", "대연동 서소문 족발", "치킨"];

console.table(food[0], food[1], food[2]);

food[2] = "스시";
food[3] = "대방어 강추";

console.info(food[2]);
console.info(food[3]);

console.log(food);
