import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/TempNew";
import NotFound from "./pages/NotFound";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
    // nav("/home");
  };

  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>Move to New Page</button>
      {/*<button onClick={onClickButton}>Move to Home Page</button>*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

/**
 * React Router
 * 1. 라이브러리 설치 : npm i react-router-dom
 *  main.jsx에서 <BrowserRouter> 추가
 *
 *  이동할 컴포넌트 작성함(Home, Diary, New, NotFound)
 *
 *
 * 2. Router 활용한 컴포넌트 이동
 *    기본 URL + "라우팅 정보"
 *    http://localhost:5174/ + "라우팅 정보"
 *    - "/" : Home 페이지로
 *    - "/new" :
 *    - "/diary" : Diary 페이지로
 * 4. 동적 Routing
 *    기본 URL + "라우팅 정보(쿼리 스트링)"
 *    "http://localhost:5174/" + "라우팅 정보"
 *
 *    쿼리 스트링
 *    - /diary/10
 *    10일에 대한 상세 일기를
 */
