import { useState } from "react";

function App() {
  // =========================
  // BÀI 5.1 CLICK EVENTS
  // =========================

  const [color, setColor] = useState("skyblue");
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [liked, setLiked] = useState(false);

  function randomColor() {
    const color =
      "#" + Math.floor(Math.random() * 16777215).toString(16);

    setColor(color);
  }

  // =========================
  // BÀI 5.2 INPUT EVENTS
  // =========================

  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const isValidEmail = email.includes("@");

  const wordCount =
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length;

  // =========================
  // BÀI 5.3 KEYBOARD EVENTS
  // =========================

  const keys = ["A", "B", "C", "D", "E"];

  const [targetKey, setTargetKey] = useState(
    keys[Math.floor(Math.random() * keys.length)]
  );

  const [message, setMessage] = useState("");

  const [position, setPosition] = useState({
    x: 100,
    y: 100,
  });

  const [bgColor, setBgColor] = useState("white");

  function handleKeyDown(e) {
    // Game đoán phím

    if (e.key.toUpperCase() === targetKey) {
      setMessage("🎉 Chính xác!");

      setTargetKey(
        keys[Math.floor(Math.random() * keys.length)]
      );
    }

    // Di chuyển ô vuông

    if (e.key === "ArrowUp") {
      setPosition((p) => ({
        ...p,
        y: p.y - 10,
      }));
    }

    if (e.key === "ArrowDown") {
      setPosition((p) => ({
        ...p,
        y: p.y + 10,
      }));
    }

    if (e.key === "ArrowLeft") {
      setPosition((p) => ({
        ...p,
        x: p.x - 10,
      }));
    }

    if (e.key === "ArrowRight") {
      setPosition((p) => ({
        ...p,
        x: p.x + 10,
      }));
    }

    // Ctrl + D

    if (e.ctrlKey && e.key === "d") {
      e.preventDefault();

      setBgColor(
        bgColor === "white"
          ? "lightblue"
          : "white"
      );
    }
  }

  // =========================
  // BÀI 5.4 FORM EVENTS
  // =========================

  const [formData, setFormData] = useState({
    emailForm: "",
    password: "",
    confirmPassword: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.emailForm.includes("@")) {
      alert("Email không hợp lệ");
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      alert("Mật khẩu không khớp");
      return;
    }

    setSubmitted(true);
  }

  const emailError =
    formData.emailForm &&
    !formData.emailForm.includes("@");

  const passwordError =
    formData.confirmPassword &&
    formData.password !==
      formData.confirmPassword;

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      style={{
        padding: "20px",
        backgroundColor: bgColor,
        minHeight: "100vh",
      }}
    >
      <h1>TIER 5 EVENTS</h1>

      {/* ========================= */}
      {/* BÀI 5.1 */}
      {/* ========================= */}

      <h2>5.1 Click Events</h2>

      <div
        style={{
          width: "250px",
          height: "100px",
          backgroundColor: color,
          marginBottom: "10px",
        }}
      ></div>

      <button onClick={randomColor}>
        Đổi màu ngẫu nhiên
      </button>

      <br />
      <br />

      <button
        onClick={() => setCountA(countA + 1)}
      >
        Nút A
      </button>

      <p>Số lần click A: {countA}</p>

      <button
        onClick={() => setCountB(countB + 1)}
      >
        Nút B
      </button>

      <p>Số lần click B: {countB}</p>

      <button
        onClick={() => setLiked(!liked)}
      >
        {liked ? "❤️ Đã thích" : "🤍 Thích"}
      </button>

      <hr />

      {/* ========================= */}
      {/* BÀI 5.2 */}
      {/* ========================= */}

      <h2>5.2 Input Events</h2>

      <input
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        placeholder="Nhập email..."
      />

      <p>
        {isValidEmail
          ? "✅ Email hợp lệ"
          : "❌ Email phải chứa @"}
      </p>

      <br />

      <input
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
        placeholder="Nhập nội dung..."
      />

      <p>Preview: {text}</p>

      <p>Số ký tự: {text.length}</p>

      <p>Số từ: {wordCount}</p>

      <hr />

      {/* ========================= */}
      {/* BÀI 5.3 */}
      {/* ========================= */}

      <h2>5.3 Keyboard Events</h2>

      <p>
        Hãy nhấn phím:
        <strong> {targetKey}</strong>
      </p>

      <p>{message}</p>

      <p>
        Dùng phím mũi tên để di chuyển ô
        vuông
      </p>

      <p>Nhấn Ctrl + D để đổi nền</p>

      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          position: "absolute",
          left: position.x,
          top: position.y,
        }}
      ></div>

      <hr style={{ marginTop: "150px" }} />

      {/* ========================= */}
      {/* BÀI 5.4 */}
      {/* ========================= */}

      <h2>5.4 Form Events</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <br />

            <input
              type="text"
              name="emailForm"
              value={formData.emailForm}
              onChange={handleChange}
            />

            {emailError && (
              <p style={{ color: "red" }}>
                Email phải chứa @
              </p>
            )}
          </div>

          <br />

          <div>
            <label>Mật khẩu</label>
            <br />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <br />

          <div>
            <label>
              Xác nhận mật khẩu
            </label>
            <br />

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            {passwordError && (
              <p style={{ color: "red" }}>
                Mật khẩu không khớp
              </p>
            )}
          </div>

          <br />

          <button type="submit">
            Đăng ký
          </button>
        </form>
      ) : (
        <div>
          <h3>
            ✅ Đăng ký thành công
          </h3>

          <p>
            Email: {formData.emailForm}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;