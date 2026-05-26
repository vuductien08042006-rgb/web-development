Câu A1.
Kích thước       < 768px         768px - 991px       ≥ 992px             Số cột             1 cột           2 cột               4 cột           Box layout  Mỗi box chiếm full width (xếp dọc)/2 box / hàng (xếp 2 cột)/4 box / hàng (xếp ngang)
    -Câu hỏi thêm
        col-md-6 nghĩa là gì?
        md = medium = màn hình từ 768px trở lên (tablet). 6 = chiếm 6/12 cột = nửa chiều rộng. Vậy col-md-6 nghĩa là: "Từ màn hình tablet trở lên, box này chiếm 1/2 chiều rộng".
        Tại sao không cần viết col-sm-12?
        Bootstrap hoạt động theo nguyên tắc mobile-first: class col-12 (không có prefix) đã áp dụng cho tất cả kích thước từ nhỏ nhất. Khi gặp màn hình lớn hơn, các class col-md-* và col-lg-* sẽ ghi đè lên. Nên col-sm-12 là thừa vì col-12 đã bao phủ rồi.
Câu A2.
    1.
        Kích thước màn hình                       Trạng thái
        < 768px (mobile)                           Ẩn (d-none → display: none)
        ≥ 768px (tablet/desktop)               Hiện (d-md-block → display: block)
            -Element này ẩn trên mobile, hiện từ tablet trở lên. Dùng để ẩn menu, sidebar, banner trên điện thoại.
    2.
        mt-3 — margin-top với size 3, tức là thêm khoảng cách 1rem (16px) phía trên element.
        px-4 — padding theo trục x (left + right) với size 4, tức là thêm 1.5rem padding ở cả hai bên trái và phải.
        mb-auto — margin-bottom tự động, thường dùng để đẩy element xuống cuối trong flexbox.
        py-2 — padding theo trục y (top + bottom) với size 2, tức là thêm 0.5rem padding trên và dưới.
        ms-3 — margin-start (margin-left) với size 3, tức là thêm 1rem khoảng cách bên trái element.
    3.
        .container là container có chiều rộng cố định (fixed-width) và thay đổi theo từng breakpoint. Ví dụ ở màn hình md thì max-width là 720px, ở lg là 960px,... Nội dung sẽ được căn giữa và có giới hạn chiều rộng rõ ràng.
        .container-fluid luôn chiếm 100% chiều rộng màn hình ở mọi kích thước, không có max-width. Thường dùng cho các thành phần cần full-width như banner, navbar, hero section.
        .container-md là dạng kết hợp: ở màn hình nhỏ hơn md (< 768px) nó hoạt động như container-fluid (100% width), nhưng từ breakpoint md trở lên thì nó hoạt động như container thông thường (có max-width cố định). Dùng khi muốn full-width trên mobile nhưng có giới hạn trên desktop.
Câu C1.
    1.
        Để đổi màu primary trong Bootstrap, cần dùng SASS và thực hiện theo quy trình sau:
        Cần công cụ: Node.js + Sass (cài bằng npm install sass)
        File cần modify là file SASS của dự án, tạo file custom.scss rồi viết như sau:
        $primary: #E63946;
        @import "bootstrap/scss/bootstrap";
        Sau đó compile file này ra CSS:
        sass custom.scss custom.css
        Rồi trong HTML thay thế link Bootstrap CDN bằng file custom.css vừa compile. Toàn bộ các component dùng màu primary như .btn-primary, .bg-primary, .text-primary, .border-primary sẽ tự động đổi sang #E63946 mà không cần sửa từng chỗ.
    2.
        Khi override trực tiếp bằng CSS thuần, bạn chỉ thay đổi được đúng class .btn-primary đó, còn hàng chục class khác liên quan như .btn-outline-primary, .bg-primary, .text-primary, .border-primary, .badge.bg-primary, .alert-primary,... vẫn giữ màu xanh gốc → giao diện bị loang lổ không đồng nhất.
        Dùng SASS variable thì chỉ cần đổi $primary một chỗ duy nhất, Bootstrap tự tính toán và áp dụng màu mới cho toàn bộ hệ thống component liên quan, kể cả hover state, focus state, màu chữ tương phản tự động. Đây là nguyên tắc Single Source of Truth — một nguồn duy nhất kiểm soát toàn bộ.
Câu C2.
/* NAVBAR */
* { margin: 0; padding: 0; box-sizing: border-box; }

nav {
  background: #1a1a2e;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  position: sticky;
  top: 0;
}

nav .logo {
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  text-decoration: none;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

nav ul a {
  color: white;
  text-decoration: none;
  font-size: 0.95rem;
}

nav ul a:hover { color: #E63946; }

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 2px;
  background: white;
}

@media (max-width: 768px) {
  .hamburger { display: flex; }
  nav ul {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #1a1a2e;
    flex-direction: column;
    padding: 1rem 2rem;
    gap: 1rem;
  }
  nav ul.open { display: flex; }
}

/* PRODUCT CARD */
.card {
  width: 280px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  font-family: sans-serif;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body { padding: 1rem; }

.card-title {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.75rem;
}

.badge {
  display: inline-block;
  background: #E63946;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
}

.btn {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: #E63946;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
}

.btn:hover { background: #c1121f; }
    Tổng cộng khoảng ~80 dòng CSS chỉ cho 2 component.
    So sánh Bootstrap vs CSS thuần:
        Số dòng CSS cần viết: Bootstrap chỉ cần 0 dòng vì dùng class có sẵn, CSS thuần cần khoảng 80 dòng trở lên.
    Thời gian phát triển: Bootstrap xong trong 5-10 phút, CSS thuần mất  30-60 phút vì phải viết từ đầu, test responsive, xử lý cross-browser.
        Khả năng tùy biến: CSS thuần tùy biến hoàn toàn tự do theo ý muốn, Bootstrap bị giới hạn bởi hệ thống class có sẵn, muốn làm khác phải override.
    Khi NÊN dùng Bootstrap:
        Dự án cần làm nhanh, prototype, hackathon, admin panel nội bộ, team không có designer, cần giao diện chuẩn nhìn được ngay.
    Khi KHÔNG NÊN dùng Bootstrap:
        Dự án có thiết kế riêng độc đáo từ designer, landing page cần pixel-perfect theo bản Figma, cần tối ưu performance tuyệt đối (Bootstrap thêm ~30KB CSS không dùng đến), hoặc khi design system của công ty đã có sẵn component riêng.    

