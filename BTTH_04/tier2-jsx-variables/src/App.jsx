function App() {
  const ten = "Vũ Đức Tiến";
  const tuoi = 19;
  const monHoc = ["HTML", "CSS", "JavaScript", "React"];
  const diemTB = 7.5;
  const canNang = 60;
  const chieuCao = 1.70;
  const bmi = (canNang / (chieuCao * chieuCao)).toFixed(1);
  const gio = new Date().getHours();
  const isOnline = true;
  const isLoggedIn = true;
  const stock = 0;

  const sanPham = [
    { id: 1, ten: "iPhone 15", gia: 25000000 },
    { id: 2, ten: "Samsung S24", gia: 22000000 },
    { id: 3, ten: "Xiaomi 14", gia: 800000 },
    { id: 4, ten: "Tai nghe", gia: 500000 },
    { id: 5, ten: "Cáp sạc", gia: 150000 },
  ];

  const tongGia = sanPham.reduce((sum, sp) => sum + sp.gia, 0);

  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Tier 2 — JSX Variables</h1>

      {/* Bài 2.1 */}
      <div style={{ padding: "15px", background: "#f0f8ff", borderRadius: "8px", marginBottom: "20px" }}>
        <h2>Bài 2.1 — Biến</h2>
        <p>Tên: {ten}</p>
        <p>Tuổi: {tuoi} — Năm sau: {tuoi + 1}</p>
        <p>Xếp loại: {diemTB >= 8 ? "Giỏi" : diemTB >= 6.5 ? "Khá" : "Trung bình"}</p>
        <p>Môn học: {monHoc.join(", ")}</p>
      </div>

      {/* Bài 2.2 */}
      <div style={{ padding: "15px", background: "#fff8f0", borderRadius: "8px", marginBottom: "20px" }}>
        <h2>Bài 2.2 — Conditional</h2>
        <p>{diemTB >= 5 ? "✅ Đậu" : "❌ Rớt"}</p>
        {diemTB >= 8 && <p>🏆 Học bổng!</p>}
        {diemTB < 5 && <p>⚠️ Cần cải thiện!</p>}
      </div>

      {/* Bài 2.3 */}
      <div style={{ padding: "15px", background: "#f0fff0", borderRadius: "8px", marginBottom: "20px" }}>
        <h2>Bài 2.3 — Danh sách</h2>
        <ul>
          {monHoc.map((mon, index) => (
            <li key={index}>{mon}</li>
          ))}
        </ul>
      </div>

      {/* Thử thách 2.1 */}
      <div style={{ padding: "15px", background: "#f5f0ff", borderRadius: "8px", marginBottom: "20px" }}>
        <h2>Thử thách 2.1 — Thông tin + BMI</h2>
        <p>Họ tên: {ten}</p>
        <p>Tuổi: {tuoi}</p>
        <p>Quê quán: Hà Nội</p>
        <p>{gio < 12 ? "☀️ Chào buổi sáng!" : gio < 18 ? "🌤️ Chào buổi chiều!" : "🌙 Chào buổi tối!"}</p>
        <p>BMI: {bmi} — {bmi < 18.5 ? "Gầy" : bmi < 25 ? "Bình thường" : bmi < 30 ? "Thừa cân" : "Béo phì"}</p>
      </div>

      {/* Thử thách 2.2 */}
      <div style={{ padding: "15px", background: "#fff0f5", borderRadius: "8px", marginBottom: "20px" }}>
        <h2>Thử thách 2.2 — Conditional</h2>
        <p>Trạng thái: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
        {isLoggedIn && <p>👤 Chào mừng {ten}!</p>}
        {!isLoggedIn && <p>🔒 Vui lòng đăng nhập</p>}
        {stock === 0 && <p style={{ color: "red" }}>⚠️ Hết hàng!</p>}
        {stock > 0 && <p style={{ color: "green" }}>✅ Còn hàng: {stock}</p>}
      </div>

      {/* Thử thách 2.3 */}
      <div style={{ padding: "15px", background: "#f0f5ff", borderRadius: "8px" }}>
        <h2>Thử thách 2.3 — Sản phẩm</h2>
        {sanPham.map(sp => (
          <div key={sp.id} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid #eee" }}>
            <span>{sp.ten}</span>
            <span style={{ color: sp.gia > 1000000 ? "red" : "black", fontWeight: "bold" }}>
              {sp.gia.toLocaleString()}đ
            </span>
          </div>
        ))}
        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
          Tổng: {tongGia.toLocaleString()}đ
        </p>
      </div>
    </div>
  );
}

export default App;