import { useState, useRef } from "react";

function App() {
  // =========================
  // BÀI 6.1 LIST BASICS
  // =========================

  const [students] = useState([
    { id: 1, name: "Minh", age: 20 },
    { id: 2, name: "An", age: 21 },
    { id: 3, name: "Linh", age: 19 },
  ]);

  const avgAge =
    students.reduce((sum, s) => sum + s.age, 0) /
    students.length;

  // =========================
  // BÀI 6.2 CREATE
  // =========================

  const [subjects, setSubjects] = useState([
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
  ]);

  const [newSubject, setNewSubject] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const inputRef = useRef(null);

  function addSubject() {
    if (newSubject.trim() === "") {
      alert("Tên môn học không được để trống");
      return;
    }

    const item = {
      id: Date.now(),
      name: newSubject,
    };

    setSubjects([...subjects, item]);

    setSuccessMsg("✅ Đã thêm thành công!");

    setNewSubject("");

    inputRef.current.focus();
  }

  // =========================
  // BÀI 6.3 DELETE
  // =========================

  const [users, setUsers] = useState([
    { id: 1, name: "Minh" },
    { id: 2, name: "An" },
    { id: 3, name: "Linh" },
  ]);

  const [deletedItem, setDeletedItem] =
    useState(null);

  function deleteUser(user) {
    const confirmDelete = window.confirm(
      `Xóa ${user.name}?`
    );

    if (!confirmDelete) return;

    setDeletedItem(user);

    setUsers(
      users.filter(
        (item) => item.id !== user.id
      )
    );

    setTimeout(() => {
      setDeletedItem(null);
    }, 5000);
  }

  function undoDelete() {
    if (!deletedItem) return;

    setUsers((prev) => [
      ...prev,
      deletedItem,
    ]);

    setDeletedItem(null);
  }

  function deleteAll() {
    if (
      window.confirm(
        "Bạn có chắc muốn xóa tất cả?"
      )
    ) {
      setUsers([]);
    }
  }

  // =========================
  // BÀI 6.4 UPDATE
  // =========================

  const [items, setItems] = useState([
    { id: 1, name: "Minh", age: 20 },
    { id: 2, name: "An", age: 21 },
    { id: 3, name: "Linh", age: 19 },
  ]);

  const [editingId, setEditingId] =
    useState(null);

  const [editName, setEditName] =
    useState("");

  const [editAge, setEditAge] =
    useState("");

  const [saveMessage, setSaveMessage] =
    useState("");

  function startEdit(item) {
    setEditingId(item.id);
    setEditName(item.name);
    setEditAge(item.age);
  }

  function saveEdit() {
    if (editName.trim() === "") {
      alert("Tên không được để trống");
      return;
    }

    setItems(
      items.map((item) =>
        item.id === editingId
          ? {
              ...item,
              name: editName,
              age: Number(editAge),
            }
          : item
      )
    );

    setEditingId(null);

    setSaveMessage("✅ Đã lưu!");

    setTimeout(() => {
      setSaveMessage("");
    }, 3000);
  }

  function cancelEdit() {
    setEditingId(null);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>TIER 6 - LISTS & CRUD</h1>

      {/* ========================= */}
      {/* BÀI 6.1 */}
      {/* ========================= */}

      <h2>6.1 Render Danh Sách</h2>

      {students.map((student, index) => (
        <div
          key={student.id}
          style={{
            padding: "10px",
            marginBottom: "5px",
            background: "#eee",
            color:
              student.age >= 20
                ? "green"
                : "black",
          }}
        >
          STT: {index + 1} | {student.name}
          - {student.age} tuổi
        </div>
      ))}

      <p>
        Tuổi trung bình:
        {avgAge.toFixed(1)}
      </p>

      <hr />

      {/* ========================= */}
      {/* BÀI 6.2 */}
      {/* ========================= */}

      <h2>6.2 CREATE</h2>

      <input
        ref={inputRef}
        value={newSubject}
        onChange={(e) =>
          setNewSubject(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter")
            addSubject();
        }}
        placeholder="Tên môn học"
      />

      <button onClick={addSubject}>
        ➕ Thêm
      </button>

      <p>{successMsg}</p>

      {subjects.map((item) => (
        <div key={item.id}>
          {item.name}
        </div>
      ))}

      <hr />

      {/* ========================= */}
      {/* BÀI 6.3 */}
      {/* ========================= */}

      <h2>6.3 DELETE</h2>

      {users.length > 0 && (
        <button onClick={deleteAll}>
          🗑 Xóa tất cả
        </button>
      )}

      <br />
      <br />

      {users.length === 0 ? (
        <p>Danh sách trống</p>
      ) : (
        users.map((user) => (
          <div
            key={user.id}
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              marginBottom: "5px",
            }}
          >
            <span>{user.name}</span>

            <button
              onClick={() =>
                deleteUser(user)
              }
            >
              Xóa
            </button>
          </div>
        ))
      )}

      {deletedItem && (
        <div>
          <p>
            Đã xóa:
            {deletedItem.name}
          </p>

          <button onClick={undoDelete}>
            Hoàn tác
          </button>
        </div>
      )}

      <hr />

      {/* ========================= */}
      {/* BÀI 6.4 */}
      {/* ========================= */}

      <h2>6.4 UPDATE</h2>

      {saveMessage && (
        <p>{saveMessage}</p>
      )}

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            background: "#f4f4f4",
            padding: "10px",
            marginBottom: "5px",
          }}
        >
          {editingId === item.id ? (
            <>
              <input
                value={editName}
                onChange={(e) =>
                  setEditName(
                    e.target.value
                  )
                }
                style={{
                  border:
                    "2px solid orange",
                }}
              />

              <input
                type="number"
                value={editAge}
                onChange={(e) =>
                  setEditAge(
                    e.target.value
                  )
                }
              />

              <button
                onClick={saveEdit}
              >
                Lưu
              </button>

              <button
                onClick={cancelEdit}
              >
                Hủy
              </button>
            </>
          ) : (
            <>
              {item.name} - {item.age} tuổi

              <button
                style={{
                  marginLeft: "10px",
                }}
                onClick={() =>
                  startEdit(item)
                }
              >
                ✏️ Sửa
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;