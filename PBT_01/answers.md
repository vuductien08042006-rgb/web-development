Phần A.
 Câu A1.
  1.
  B1.Trình duyệt gửi HTTP Request từ client đến server
  B2.Request đi qua mạng Internet đến server
  B3.Server xử lý request và tìm file (ví dụ: index.html)
  B4.Server trả về HTTP Response (200 OK) kèm nội dung HTML
  B5.Trình duyệt nhận HTML → parse HTML
  B6.Trình duyệt tiếp tục fetch CSS và JS
  B7.Trình duyệt render giao diện (hiển thị trang web)
  Nguồn tham chiếu: 01_introduction_html_universe.md
            Phần: “2. Big Picture — Web hoạt động như thế nào?” (Client–Server Architecture)
            Phần: “3. Core Technical Truth — Browser Rendering Pipeline”
  2.
   Tab Network trong DevTools hiển thị:
        Danh sách các request (HTML, CSS, JS, image…)
        Thông tin HTTP Request / Response
        Status Code (200, 404, 500…)
        Thời gian tải tài nguyên
        Các file được browser fetch (CSS, JS)
        Nguồn tham chiếu: 01_introduction_html_universe.md
            Phần: “2. Big Picture — Web hoạt động như thế nào?” (Client–Server Architecture)
            Phần: “3. Core Technical Truth — Browser Rendering 
Câu A2.
    Trang web bị goople đánh giá SEO thấp vì:
     web đang dùng tất cả là thẻ <div> nên goople không biết được:
     -header
     -menu
     -main
     -sản phẩm
     -footer
    -> vì vập bị đánh giá Seo thấp. 
    Các lỗi semantic:
      1.dùng <div class="header"> thay vì <header>
      2.Menu không dùng <nav>
      3.Menu không dùng <ul><li>
      4.<div class="main"> không dùng <main>
      5.<div class="product"> không dùng <article> hoặc <section>
      6.<div class="footer"> không dùng <footer>
      ****Bản sửa lại:
       <header>
    <h1 class="logo">
        <a href="/">ShopTLU</a>
    </h1>

    <nav>
        <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/products">Sản phẩm</a></li>
        </ul>
    </nav>
</header>

<main>
    <section class="products">
        <article class="product">
            <h2>iPhone 16 Pro</h2>

            <p class="price">25.990.000đ</p>

            <figure>
                <img src="iphone.jpg" alt="iPhone 16 Pro chính hãng">
            </figure>
        </article>
    </section>
</main>

<footer>
    <p>© 2026 ShopTLU</p>
</footer>
Câu A3.
   Kết quả là: 
     Hộp 1
     Text A Text B
     Hộp 2
     Text C Text D
     Hộp 3
    Giải thích: vì <div> là thẻ block nên nó sẽ chiếm toàn bộ dòng,đóng thẻ nó sẽ tự xuống dòng. <span> và <strong> là thẻ inline nên sẽ chỉ chiếm phần nội dung nó có-> hiển thị cùng dòng. 
    Nguồn tham chiếu: 01_introduction_html_universe.md
            Phần: “3. Core Technical Truth — Browser Rendering Pipeline”
Câu A4.
    -lý do không nên dùng <table> để layout web:
      1.sai semantic
      2.khó reponsive
      3.code khó bảo trì,khó mở rộng
      4.hiệu năng kém
      5.là anti-pattern
    -Sự khác nhau giữa <thead> <tbody> và<tfoot>
      +<thead> dùng chứa tiêu đề của bảng
      +<tbody> dùng để chứa nội dung chính
      +<tfoot> dùng để tổng kết
Phần B.
   Bài B3.
     -Lỗi 1: Dòng 1 — <!DOCTYPE> sai chuẩn — Sửa thành <!DOCTYPE html>
     -Lỗi 2: Dòng 4 — Thẻ <title> không đóng — Thêm </title>
     -Lỗi 3: Dòng 5 — charset="utf8" sai chuẩn — Sửa thành charset="UTF-8"
     -Lỗi 4: Dòng 9 — Thẻ <h1> không đóng đúng (<h1> thay vì </h1>) — Sửa thành </h1>
     -Lỗi 5: Dòng 13 — Thẻ <a> không đóng — Sửa <a> thành </a>
     -Lỗi 6: Dòng 20 — Thuộc tính src không có dấu ngoặc kép — Sửa thành src="iphone.jpg"
     -Lỗi 7: Dòng 20 — Thẻ <img> thiếu thuộc tính alt (lỗi semantic) — Thêm alt="iPhone 16 Pro"
     -Lỗi 8: Dòng 22 — Sai thứ tự đóng thẻ <b> và <p> — Sửa thành <p>Giá: <b>25.990.000đ</b></p>
     -Lỗi 9: Dòng 28 — Dùng <td> cho tiêu đề bảng (sai semantic) — Sửa thành <th>
     -Lỗi 10: Dòng 37 — Có 2 thẻ <main> (sai semantic) — Đổi thẻ <main> thứ hai thành <aside>
     -Lỗi 11: Dòng 42 — Thẻ <p> trong <footer> không đóng — Thêm </p>
     -Lỗi 12: Dòng 2 — Thẻ <html> thiếu thuộc tính ngôn ngữ — Thêm lang="vi"
  