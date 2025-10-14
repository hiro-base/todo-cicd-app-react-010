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

  return (
    <>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </div>
      <form>
        <input type="text" name="title" placeholder="Add a todo" />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default App;
