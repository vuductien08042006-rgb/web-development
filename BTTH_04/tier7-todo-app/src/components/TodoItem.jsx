function TodoItem({
  todo,
  editingId,
  editText,
  setEditText,
  onEdit,
  onSave,
  onToggle,
  onDelete,
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "12px",
        margin: "8px 0",
        border: "1px solid #ddd",
        borderRadius: "8px",
        background: todo.done
          ? "#eafbea"
          : "#fff",
      }}
    >
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() =>
          onToggle(todo.id)
        }
      />

      <div style={{ flex: 1 }}>
        {editingId === todo.id ? (
          <input
            value={editText}
            onChange={(e) =>
              setEditText(
                e.target.value
              )
            }
            autoFocus
            style={{
              width: "100%",
              padding: "6px",
            }}
          />
        ) : (
          <>
            <div
              onDoubleClick={() =>
                onEdit(todo)
              }
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                textDecoration:
                  todo.done
                    ? "line-through"
                    : "none",
              }}
            >
              {todo.text}
            </div>

            <small
              style={{
                color: "#777",
              }}
            >
              🕒 {todo.createdAt}
            </small>
          </>
        )}
      </div>

      {editingId === todo.id ? (
        <button
          onClick={onSave}
        >
          💾
        </button>
      ) : (
        <button
          onClick={() =>
            onEdit(todo)
          }
        >
          ✏️
        </button>
      )}

      <button
        onClick={() =>
          onDelete(todo.id)
        }
      >
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;