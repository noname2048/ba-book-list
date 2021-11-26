import { useState } from "react";

export default function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((prev) => [...prev, todo]);
    setTodo("");
  };

  return (
    <div>
      <h1>My Todos({todos.length})</h1>
      <ul>
        {todos.map((ele, idx) => (
          <li key={idx}>{ele}</li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write your todo..."
          value={todo}
          onChange={onChange}
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}
