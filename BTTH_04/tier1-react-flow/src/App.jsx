import { useState } from "react";

function BadCounter() {
  let count = 0;

  function handleClick() {
    count = count + 1;
    console.log("BadCounter count:", count);
  }

  return (
    <div style={{ padding: "15px", background: "#fff3f3", borderRadius: "8px", marginBottom: "20px" }}>
      <h2>❌ Biến thường</h2>
      <p>Bộ đếm: {count}</p>
      <button onClick={handleClick}>Tăng (+1)</button>
      <p style={{ color: "red" }}>⚠️ Nhấn nút → Console tăng nhưng UI KHÔNG đổi!</p>
    </div>
  );
}

function GoodCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "15px", background: "#f3fff3", borderRadius: "8px", marginBottom: "20px" }}>
      <h2>✅ useState</h2>
      <p>Bộ đếm: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng (+1)</button>
      <p style={{ color: "green" }}>✅ Nhấn nút → UI CẬP NHẬT!</p>
    </div>
  );
}

function FlowDemo() {
  const [step, setStep] = useState(1);

  return (
    <div style={{ padding: "15px", background: "#f0f0f0", borderRadius: "8px" }}>
      <h2>Luồng hoạt động</h2>
      <p>Bước hiện tại: {step}</p>
      <button onClick={() => setStep(step + 1)}>Bước tiếp →</button>
      <button onClick={() => setStep(1)}>Quay lại đầu</button>
      <div style={{ marginTop: "10px" }}>
        {step === 1 && <p>👋 Bước 1: Xin chào!</p>}
        {step === 2 && <p>📖 Bước 2: Đang học React</p>}
        {step === 3 && <p>🎯 Bước 3: Hiểu useState</p>}
        {step === 4 && <p>🎉 Bước 4: Hoàn thành!</p>}
      </div>
    </div>
  );
}

function App() {
  console.log("1️⃣ Component được gọi!"); 
  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Tier 1 — React Flow</h1>
      <BadCounter />
      <GoodCounter />
      <FlowDemo />
    </div>
  );
}

export default App;