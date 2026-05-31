import { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      done: false,
      createdAt: new Date().toLocaleString(),
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addTodo();
    }
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    if (!window.confirm("Bạn có chắc muốn xóa?")) return;

    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  }

  function startEdit(todo) {
    setEditingId(todo.id);
    setEditText(todo.text);
  }

  function saveEdit() {
    if (editText.trim() === "") return;

    setTodos(
      todos.map((todo) =>
        todo.id === editingId
          ? { ...todo, text: editText }
          : todo
      )
    );

    setEditingId(null);
    setEditText("");
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  const activeCount = todos.filter(
    (todo) => !todo.done
  ).length;

  const completedCount = todos.filter(
    (todo) => todo.done
  ).length;

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        📋 Todo App
      </h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          value={inputValue}
          onChange={(e) =>
            setInputValue(e.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder={
            filter === "all"
              ? "Nhập công việc..."
              : filter === "active"
              ? "Thêm việc chưa hoàn thành..."
              : "Thêm việc đã hoàn thành..."
          }
          style={{
            flex: 1,
            padding: "10px",
          }}
        />

        <button onClick={addTodo}>
          ➕ Thêm
        </button>
      </div>

      <TodoFilter
        filter={filter}
        setFilter={setFilter}
      />

      {filteredTodos.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
            color: "#888",
          }}
        >
          📝 Chưa có công việc nào
        </div>
      ) : (
        filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            editingId={editingId}
            editText={editText}
            setEditText={setEditText}
            onEdit={startEdit}
            onSave={saveEdit}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))
      )}

      {todos.length > 0 && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#f5f5f5",
            borderRadius: "8px",
          }}
        >
          <p>
            📌 Tổng số công việc:
            <b> {todos.length}</b>
          </p>

          <p>
            ⏳ Chưa hoàn thành:
            <b> {activeCount}</b>
          </p>

          <p>
            ✅ Hoàn thành:
            <b> {completedCount}</b>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;