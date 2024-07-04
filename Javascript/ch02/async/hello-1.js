console.log("hello");

/*
// function 앞에 `async`를 붙임
async function displayHello() {
  console.log("hello async...");
}

displayHello();
*/

// 성공한 케이스
async function whatsYourFavorite() {
  let fav = "JavaScript";

  return new Promise((resolve, reject) => resolve(fav));
}

async function displaySubject(subject) {
  return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
}

whatsYourFavorite().then(displaySubject).then(console.log);

// async 붙기 전에는 원래 Promise 형태이지만, async가 붙으면 async이다.
// async 함수는 Promise 형태를 반환하는 형태가 됨

/** 지금부터 잘봐
    async function은 promise 객체를 반환함 

    따라서, `async`와 함께 `await`을 사용할 수 있음을 생각할 수 있음
 */

async function whatsYourFavorite_async() {
  let fav = "JavaScript";

  // 눈에는 안 보이지만 V8 엔진이 내부적으로 promise로 반환함
  return fav; // 여기서 자동으로 Promise.resolve(fav)로 변환됨
}

async function displaySubject_async(subject) {
  return `Hello, ${subject}`;
}

// 사용하기 : await를 적용
/* 이게 또 *중요*함 : await 만들 때 함수를 만들어서 사용함 
    => `비동기 함수`가 되어야 함 
        비동기는 비동기끼리 되어야 함 따라서, `async function`이 되어야 함
*/
async function init() {
  // func 이름은 임의로 설정
  // 원래 promise 메소드 체이닝 단점을 보완함 : 엄청 단순해져서 가독성 짱

  // *await + asyncFunc()*
  // whatsYourFavorite_async() 함수의 실행이 끝날 때까지 기다린 후 결과값을 response에 저장
  const response = await whatsYourFavorite_async();
  // displaySubject_async() 함수의 실행이 끝날 때까지 기다린 후 결과값을 result에 저장
  // 단, response 결과를 받을 때까지 처리를 기다려야 함
  const result = await displaySubject_async(response); // 여기에 response 안 넣으면 Hello, undefined가 나옴

  console.log(response);
  console.log(result);
  /* Hello, Javascript가 한번 더 나와야한다는데
   Hello, undefined /n Hello, Javascript 가 출력됨
   - 왜 이럼? displaySubject_async()에 response 안 넣어서였음
   */
}

init();

/* 
    - 장점
    async 가 안 붙은 애들은 메소드 내부를 봐야 비동기인지 아닌지 확인할 수 있는 반면,
    async await은 바로 앞에 보여서 여러 모로 편함. 비동기끼리 묶을 수 있음
*/
