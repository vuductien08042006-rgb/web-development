function ProductCard({ name, price }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      margin: "10px",
      width: "180px",
      textAlign: "center"
    }}>
      <h3>{name}</h3>
      <p style={{ color: "#e74c3c", fontWeight: "bold" }}>{price}</p>
      <button style={{
        background: "#3498db", color: "white",
        border: "none", padding: "8px 16px", borderRadius: "4px"
      }}>
        Thêm vào giỏ
      </button>
    </div>
  );
}

export default ProductCard;