import { forEach, result } from "lodash";

console.log("user-json-from-server");

// 별도로 진짜 공부 많이 해야 함 .. 서버 통신에 대해 자세히 알아야 함
// 비동기 통신 뿐만 아니라 TCP/IP 등을 자세히 공부해야 함 (팀 스터디로 !!!)

/** (면접) 비동기통신 3가지 설명하세요
 * (면접) 자바스크립트에서 서버 통신할 때 쓰는 API 뭐가 있어요? 등 기술면접에서 반드시 묻는 것들임

    1. 대량 데이터를 서버에 요청을 가정 
    2. 서버와 통신 시 `fetch API` 사용 
        서버 요청 주소는 아래의 주소를 사용.
        https://jsonplaceholder.typicode.com/users
        * (면접) 왜 통신할 때 이걸 사용해야 하나요? `promise` 반환되기 위해서 
    3. fetch API 실행 시 `await` 예약어 사용 
    4. 서버에서 JSON이 왔으면 어떻게 해야 함? 
        JS에서 데이터 처리할 때 가장 좋은 방법은? `객체` 형태로 쓰는 것임 
        따라서, `객체`로 변환해야 함

        결론: `response`되는 것은 `JSON`이므로, `객체`로 변환해주면 됨 
            response.json() 실행 시, `await` 예약어 사용 지정해줘야 함 
    5. 객체 배열을 화면에 출력하기 위한 함수 구현 

*/

/*
// 지금부터 구현

// 1. 통신부 구현 (1~4번) "통신 기능"
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json(); // json -> object
  return data; // 여기서 이미 객체 배열을 반환
}

// 2. DOM 객체 쓰기 : 화면 출력부 구현 (DOM을 이용해서 만들기) "화면 렌더링 기능" - 객체 배열로 변환
function renderDataToDom(render) {
  const result = document.getElementById("result");

  render.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `UserID: ${item.id}, Name: ${item.name}, Username: ${item.username}, Email: ${item.email}`;
    result.appendChild(li);
  });
}

// 3. 1번의 함수를 호출
async function init() {
  const data = await fetchData();
  renderDataToDom(data);
}

// 페이지 로드하면 init 함수 호출
init();


*/

// =========================================================================================

// 1. 통신부 구현
async function commToServer() {
  // (1) fetchAPI 사용
  // 서버와 통신 시, 서버에서 언제 응답( 요청한 결과, response )이 빠를 수도 있고, 느릴 수도 있음 => "비동기 처리"
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // response 결과가 JSON 포맷임 => 객체(리터럴 객체) 배열 => "비동기 처리"
  const users = await response.json();

  // 화면 출력
  // ㄴ 던져줄 때 매개변수로 "객체"를 전달해야 함
  display(users);
}

//  2. 화면 출력부 구현
function display(users) {
  // 출력할 화면의 요소를 지정
  const result = document.querySelector("#result");

  // html 코드 작성
  let htmlStr = "";

  users.forEach((user) => {
    htmlStr += `${user.name} - ${user.username} - ${user.email} <br>`;
  });

  result.innerHTML = htmlStr;
}

// 3. 1번의 함수를 호출
commToServer();
