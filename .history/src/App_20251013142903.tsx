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

  console.log(todos);

  return (
    <>
      <div>
        {todos.map((todo) => (
          <div>{todo.title}</div>
        ))}
      </div>
    </>
  );
}

export default App;
