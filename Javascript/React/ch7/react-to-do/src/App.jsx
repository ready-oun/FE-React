import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <TodoList />
      <TodoItem />
    </div>
  );
}

export default App;
