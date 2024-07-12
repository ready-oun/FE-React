import "./App.css";
import { useRef, useState } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import ExamForUseReducer from "./components/ExamForUseReducer";

/**
 * ch8 (To do App) 소스 사용
 *
 * - useReducer hook 활용
 * 목적 : root app에는 자식 컴포넌트에서 사용될 기능(함수)을 직접 구현해서 자식에게 전달 중임
 *      따라서, 향후 자식 컴포넌트에서 기능이 대폭 늘어날 수 있다고 가정하면, root app에서 관리해야 함
 *
 *      그래서, 부모 컴포넌트 함수 내부에 구현해야 함
 *      부모 컴포넌트 함수 외부에서 구현하려고 한다면 ...
 * 
 * 
무엇인가: 컴포넌트의 복잡한 상태 로직을 관리하는 Hook.
왜 쓰는가: 복잡한 상태 변경 로직을 보다 구조적으로 관리하기 위해 사용합니다.
어떤 상황에 쓰는가: 상태 변경 로직이 복잡하거나, 여러 하위 컴포넌트에서 상태를 업데이트할 때 사용합니다.
어떻게 작동하는가: 리듀서 함수와 초기 상태를 받아 현재 상태와 디스패치 함수를 반환합니다.
어떻게 쓰는가: const [state, dispatch] = useReducer(reducer, initialState);

 * - createContext 활용
 *   App - Header
 *       - Editor
 *       - List - TodoItem
 *
 *   문제점 : 삭제 기능의 경우 실제 사용하는 컴포넌트는 TodoItem 이지만,
 *          App 생성한 후 List 거쳐서 전달되고 있음
 *
 *          따라서, 관계의 깊이기 깊어지면 질수록 유지보수가 힘들어짐
 *          버그 발생 가능성이 높아짐
 *
 *          만약에, App 에서 TodoItem 으로 삭제함수를 direct 로
 *          전달할 수 있으면 어떨까...?
 */

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "청소하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "요리하기",
    date: new Date().getTime(),
  },
];

// App() 외부에 선언
// 리렌더링이 될때마다, App() 호출됨으로
// Context 가 생성됨을 고려함

function App() {
  // const [todos, setTodos] = useState(mockData);

  // todo 번호, 3번 부터 시작
  const idRef = useRef(3);

  // 새로운 todo 데이터 생성 함수
  // 1. 데이터 생성
  // 2. 생성된 데이터를 상태변수에 저장
  const onCreate = (content) => {
    const newToDo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newToDo, ...todos]);
  };

  // update 함수
  const onUpdate = (targetId) => {
    // todos 값들 중에서
    // id 값이 일치하는 todo 에 대해서
    // isDone 을 변경
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  // 삭제 함수
  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <TodoContext.Provider
        value={{
          todos,
          onCreate,
          onUpdate,
          onDelete,
        }}
      >
        <Editor />
        <List />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
