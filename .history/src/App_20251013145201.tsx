import { useState, type FormEvent } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
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
  ]);
  const [title, setTitle] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // 画面リロードかけないおまじない

    setTodos([...todos, { id: todos.length + 1, title, completed: false }]);
  };

  return (
    <>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add a todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>{title}</div>
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default App;
