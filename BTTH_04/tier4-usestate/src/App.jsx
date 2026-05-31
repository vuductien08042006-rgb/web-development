import { useState } from "react";

function NumberState() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ color: count > 0 ? "green" : count < 0 ? "red" : "black" }}>Bộ đếm: {count}</h2>
      <p>{count > 0 ? "📈 Số dương" : count < 0 ? "📉 Số âm" : "⚪ Bằng 0"}</p>
      <button onClick={() => setCount(count + 1)}>Tăng +1</button>
      <button onClick={() => setCount(count - 1)}>Giảm -1</button>
      <button onClick={() => setCount(count + 5)}>Tăng +5</button>
      <button onClick={() => setCount(count * 2)}>Nhân đôi</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

function StringState() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <label>Tên: </label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nhập tên..." maxLength={100} style={{ padding: "6px", marginLeft: "5px" }} />
        <span style={{ marginLeft: "10px", color: name.length > 80 ? "red" : "#666" }}>{name.length}/100</span>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Email: </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Nhập email..." style={{ padding: "6px", marginLeft: "5px" }} />
        {email && (email.includes("@") ? <span style={{ color: "green", marginLeft: "8px" }}>✅ Hợp lệ</span> : <span style={{ color: "red", marginLeft: "8px" }}>❌ Chưa hợp lệ</span>)}
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Mật khẩu: </label>
        <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Nhập mật khẩu..." style={{ padding: "6px", marginLeft: "5px" }} />
        <button onClick={() => setShowPassword(!showPassword)} style={{ marginLeft: "8px" }}>{showPassword ? "🙈 Ẩn" : "👁️ Hiện"}</button>
      </div>
      <div style={{ background: "#f0f0f0", padding: "10px", borderRadius: "4px" }}>
        <p>Tên: {name || "(chưa nhập)"}</p>
        <p>Email: {email || "(chưa nhập)"}</p>
        {name && <p>Xin chào <strong>{name}</strong>!</p>}
      </div>
    </div>
  );
}

function BooleanState() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const accordionItems = [
    { title: "React là gì?", content: "React là thư viện JavaScript để xây dựng UI." },
    { title: "useState là gì?", content: "useState là hook giúp quản lý state trong component." },
    { title: "Props là gì?", content: "Props là dữ liệu truyền từ component cha xuống con." },
  ];
  return (
    <div style={{ padding: "20px", background: isDarkMode ? "#333" : "#fff", color: isDarkMode ? "white" : "black", borderRadius: "8px" }}>
      <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "🙈 Ẩn nội dung" : "👁️ Hiện nội dung"}</button>
      {isVisible && <div style={{ padding: "10px", border: "1px solid #ddd", margin: "10px 0" }}>Đây là nội dung có thể ẩn/hiện!</div>}
      <hr />
      <button onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}</button>
      <hr />
      <button onClick={() => setIsLiked(!isLiked)}>{isLiked ? "❤️ Đã thích" : "🤍 Thích"}</button>
      <hr />
      <button onClick={() => setIsLightOn(!isLightOn)}>{isLightOn ? "💡 Tắt đèn" : "🔦 Bật đèn"}</button>
      <p>{isLightOn ? "Đèn đang bật sáng!" : "Đèn đang tắt!"}</p>
      <hr />
      <h3>FAQ</h3>
      {accordionItems.map((item, index) => (
        <div key={index} style={{ marginBottom: "8px", border: "1px solid #ddd", borderRadius: "4px" }}>
          <button onClick={() => setOpenIndex(openIndex === index ? null : index)} style={{ width: "100%", padding: "10px", textAlign: "left", background: "#f0f0f0", border: "none", cursor: "pointer" }}>
            {openIndex === index ? "▼" : "▶"} {item.title}
          </button>
          {openIndex === index && <div style={{ padding: "10px" }}>{item.content}</div>}
        </div>
      ))}
    </div>
  );
}

function MultipleStates() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [isStudent, setIsStudent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit() {
    if (name.trim() === "") { setError("Vui lòng nhập tên!"); return; }
    if (age === "" || Number(age) <= 0 || Number(age) >= 100) { setError("Tuổi phải từ 1 đến 99!"); return; }
    if (!email.includes("@")) { setError("Email chưa hợp lệ!"); return; }
    setError("");
    setSubmitted(true);
  }

  function handleReset() {
    setName(""); setAge(""); setEmail("");
    setIsStudent(false); setSubmitted(false); setError("");
  }

  return (
    <div style={{ padding: "20px" }}>
      {!submitted ? (
        <div>
          <div style={{ marginBottom: "10px" }}>
            <label>Tên: </label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nhập tên..." style={{ padding: "6px", marginLeft: "5px" }} />
            {name && <span style={{ marginLeft: "8px", color: "green" }}>Xin chào {name}!</span>}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Tuổi: </label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} style={{ padding: "6px", marginLeft: "5px", width: "80px" }} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Email: </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Nhập email..." style={{ padding: "6px", marginLeft: "5px" }} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              <input type="checkbox" checked={isStudent} onChange={(e) => setIsStudent(e.target.checked)} />
              {" "}Là sinh viên
            </label>
          </div>
          {error && <p style={{ color: "red" }}>⚠️ {error}</p>}
          <button onClick={handleSubmit} style={{ background: "#27ae60", color: "white", border: "none", padding: "8px 20px", borderRadius: "4px" }}>Đăng ký</button>
        </div>
      ) : (
        <div style={{ background: "#d4edda", padding: "15px", borderRadius: "8px" }}>
          <h3>✅ Đăng ký thành công!</h3>
          <p>Tên: {name}</p>
          <p>Tuổi: {age}</p>
          <p>Email: {email}</p>
          <p>Sinh viên: {isStudent ? "Có" : "Không"}</p>
          <button onClick={handleReset} style={{ background: "#3498db", color: "white", border: "none", padding: "8px 20px", borderRadius: "4px" }}>Đăng ký lại</button>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Tier 4 — useState</h1>
      <div style={{ padding: "15px", background: "#f0f8ff", borderRadius: "8px", marginBottom: "20px" }}>
        <h2>Bài 4.1 — useState với số</h2>
        <NumberState />
      </div>
      <div style={{ padding: "15px", background: "#fff8f0", borderRadius: "8px", marginBottom: "20px" }}>
        <h2>Bài 4.2 — useState với chuỗi</h2>
        <StringState />
      </div>
      <div style={{ padding: "15px", background: "#f0fff0", borderRadius: "8px", marginBottom: "20px" }}>
        <h2>Bài 4.3 — useState với boolean</h2>
        <BooleanState />
      </div>
      <div style={{ padding: "15px", background: "#fff0f5", borderRadius: "8px" }}>
        <h2>Bài 4.4 — Kết hợp nhiều useState</h2>
        <MultipleStates />
      </div>
    </div>
  );
}

export default App;