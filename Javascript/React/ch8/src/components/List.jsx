import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  // useState 훅을 사용해 search 상태 변수를 선언하고, 초기값을 빈 문자열로 설정
  const [search, setSearch] = useState("");

  // 검색 입력값이 변경될 때 호출되는 함수
  const onChangeSearch = (e) => {
    // 입력된 값을 search 상태 변수에 저장
    setSearch(e.target.value);
  };

  // 검색 입력값이 변경될 때 호출되는 함수   // 검색 기능을 구현하는 함수
  const getFilterData = () => {
    // 검색 문자열이 없으면, 원본 todos 반환
    if (search === "") {
      return todos;
    }

    // 검색 문자열을 소문자로 변환하여 포함하는 todo 항목을 필터링
    // includes 메서드를 사용해 검색 문자열을 포함하는 항목을 필터링
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  // 필터링된 todo 항목들을 얻음
  const filteredTodos = getFilterData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      {/* 검색 입력란, 검색 문자열이 변경되면 onChangeSearch 함수 호출 */}
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          /***
           * map 함수는 콜백 함수를 받아서 배열의 모든 요소에 대해서 콜백함수를 수행한 뒤,
           * 이 콜백 함수가 반환한 값들을 모아서 새로운 매열을 반환한
           * map 함수를 jsx 에서 사용하면
           * 콜백 함수가 html 요소를 반환하도록 설정할 수 있음
           *
           * 그래서, 콜백 함수의 반환값들이 리스트 형태로 렌더링이 됨
           *
           * 그래서 리스트 형태로 렌더링된 컴포넌트들은
           * 서로를 구분할 때 각각의 요소를 kye 라는 prop을 통해서 구분하게 됨
           *
           * 따라서, 리스트로 어떠한 컴포넌트를 렌더링하고
           * 있을 때는 모든 아이템 컴포넌트에게 반드시 key 라는
           * prop 를 고유한 값으로 전달해주어야 함
           *
           */
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;

/**
 * 핵심 내용 요약
useState 훅을 사용해 search 상태 변수를 관리합니다.

onChangeSearch 함수는 입력된 검색 문자열을 search 상태 변수에 저장합니다.

getFilterData 함수는 search 문자열을 기반으로 todos 배열을 필터링하여 반환합니다.

map 함수는 필터링된 todos 배열을 반복하여 각 항목을 TodoItem 컴포넌트로 변환합니다. 각 항목은 key prop으로 고유하게 식별됩니다.

- 연관된 JavaScript/React 개념
useState 훅: 상태를 관리하기 위해 React에서 사용하는 훅으로, 함수형 컴포넌트에서 상태 변수를 선언하고 관리할 수 있게 해줍니다.

map 함수: 배열의 각 요소에 대해 주어진 콜백 함수를 호출하여 새로운 배열을 반환합니다.

key prop: React에서 리스트를 렌더링할 때 각 항목을 고유하게 식별하기 위해 사용하는 prop입니다.
 */
