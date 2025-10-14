import type { FormEvent } from "react";
import "./App.css";

function App() {
  const todos = [
    {
      id: 1,
      title: "Todo 1",
      completed: false,
    },
    {
      id: 2,
      title: "Todo 2",
      completed: false,
    },
    {
      id: 3,
      title: "Todo 3",
      completed: false,
    },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // 画面リロードかけないおまじない
  };

  return (
    <>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Add a todo" />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default App;
