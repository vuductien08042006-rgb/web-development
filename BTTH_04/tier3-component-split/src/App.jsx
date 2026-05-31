import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
import PriceTag from "./components/PriceTag";

const products = [
  { id: 1, name: "iPhone 15", price: "25.000.000", image: "https://placehold.co/200" },
  { id: 2, name: "Samsung S24", price: "22.000.000", image: "https://placehold.co/200" },
  { id: 3, name: "Xiaomi 14", price: "15.000.000", image: "https://placehold.co/200" },
];

const users = [
  { id: 1, name: "Vũ Đức Tiến", email: "tien@example.com", avatar: "https://placehold.co/80" },
  { id: 2, name: "Nguyễn An", email: "an@example.com", avatar: "https://placehold.co/80" },
  { id: 3, name: "Trần Linh", email: "linh@example.com", avatar: "https://placehold.co/80" },
];

function App() {
  return (
    <div>
      <Header />

      <main style={{ padding: "20px" }}>
        {/* Bài 3.2 — ProductCard */}
        <h2 style={{ textAlign: "center" }}>🛒 Sản phẩm</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {products.map(p => (
            <ProductCard key={p.id} name={p.name} price={p.price} image={p.image} />
          ))}
        </div>

        {/* Thử thách — UserCard */}
        <h2 style={{ textAlign: "center", marginTop: "30px" }}>👤 Thành viên</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {users.map(u => (
            <UserCard key={u.id} name={u.name} email={u.email} avatar={u.avatar} />
          ))}
        </div>

        {/* Thử thách — PriceTag */}
        <h2 style={{ textAlign: "center", marginTop: "30px" }}>🏷️ Giá khuyến mãi</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PriceTag originalPrice={25000000} salePrice={20000000} />
          <PriceTag originalPrice={5000000} salePrice={3500000} />
          <PriceTag originalPrice={1000000} salePrice={799000} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;