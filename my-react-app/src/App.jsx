import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  function addTodo() {
    if (inputValue.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: inputValue, done: false }]);
    setInputValue("");
  }

  function toggleTodo(id) {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  function deleteTodo(id) {
    setTodos(todos.filter(t => t.id !== id));
  }

  const filteredTodos = todos.filter(t => {
    if (filter === "active") return !t.done;
    if (filter === "completed") return t.done;
    return true;
  });

  const activeCount = todos.filter(t => !t.done).length;

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>📋 Todo List</h1>

      <div style={{ display: "flex", marginBottom: "20px" }}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          placeholder="Nhập công việc... (Enter để thêm)"
          style={{ flex: 1, padding: "10px", fontSize: "16px", border: "2px solid #ddd", borderRadius: "4px 0 0 4px" }}
        />
        <button onClick={addTodo} style={{
          padding: "10px 20px", background: "#3498db",
          color: "white", border: "none",
          borderRadius: "0 4px 4px 0", cursor: "pointer"
        }}>
          Thêm
        </button>
      </div>

      <TodoFilter filter={filter} setFilter={setFilter} />

      {filteredTodos.length === 0 ? (
        <p style={{ textAlign: "center", color: "#999" }}>
          {todos.length === 0 ? "📝 Chưa có công việc nào" : "Không có công việc phù hợp"}
        </p>
      ) : (
        filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
        ))
      )}

      {todos.length > 0 && (
        <p style={{ textAlign: "center", color: "#666", marginTop: "15px" }}>
          Còn <strong>{activeCount}</strong> việc chưa hoàn thành
        </p>
      )}
    </div>
  );
}

export default App;