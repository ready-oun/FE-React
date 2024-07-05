import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppForState from "./AppForState.jsx";
import AppForStateResult from "./AppForStateResult.jsx";
import "./index.css";
import RegisterResult from "./components/Register.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<RegisterResult />);
// 컴포넌트가 부모-자식 간 관계가 있다
// render = 화면에 출력함 + <App /> 얘를 불러서
// <App>은 App.jsx에서 <Header> <Main> <Footer> 를 부르잖음
// => 결국 상하관계가 있따
