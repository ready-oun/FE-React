// 브라우저 DOM 제어

// 주문정보 취득 => DOM 요소 선택
const title = document.querySelector("#container > h2");

// 책 제목 => HTML + CSS + JavaScript 실습(명령형 프로그래밍)

// 버튼 요소 선택 => DOM 요소 선택
const orderBtn = document.querySelector("#order");

// 주문정보 입력 => DOM 요소 선택
const orderInfo = document.querySelector("#orderInfo");

// 버튼 객체에 이벤트 등록 => 추가적으로 주문 처리
orderBtn.addEventListener("click", () => {
  // DOM에 노드(p tag) 추가
  // p tag에 text node 추가해서 도서 title을 저장
  // p tag와 text node 서로 관계 설정
});