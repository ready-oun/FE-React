import "./Main.css";

function Main() {
  const number = 10;
  const obj = { a: 1 };

  // Login 했다고 가정하고 객체 직접 만들어라
  /** 
        사용자의 세션 정보가 있어야 함 : Session이란, 사용자의 접속 상태 
        ㄴ 세션이 있다고 생각하고 객체를 만들어보자 
        객체를 초기화해서 props 담아야 함 

        로그인한 경우 => Logout 이 뜨게 
        로그아웃한 경우 => Login 이 뜨게 
   */

  //   let user = "";

  //   if ((user = "Login")) {
  //     return <div>{"Would you Log out?"}</div>;
  //   } else if ((user = "Logout")) {
  //     return <div>{"Would you Log in?"}</div>;
  //   }

  // 1. if else
  const user = { username: "Robin", loginFlag: false };

  if (user.loginFlag == true) {
    return (
      <>
        <div className="logout">
          Happy to be with you, {user.username}! <a href="#">Logout</a>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="login">
          Your benefits are waiting for you. <a href="#">Login</a>
        </div>
      </>
    );
  }

  /*
  const userState = "Login";
  const Login = "Login";
  const Logout = "Logout";

  return (
    <>
      <h2>
        Are you sure to{" "}
        {userState == Login ? (
          <span style={{ color: "red" }}>Login</span>
        ) : (
          <span style={{ color: "blue" }}>Logout</span>
        )}
        ?
      </h2>
    </>
  );
*/
  //   return (
  //     <main>
  //       <h1>main</h1>
  //       <h2>{number}</h2>
  //       <h2>{number + 10}</h2>
  //       <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
  //       <h2>10</h2>
  //       <h2>{[111, 222, 333]}</h2>

  //       <h2>{true}</h2>
  //       <h2>{true}</h2>
  //     </main>
  //   );
}

export default Main;
