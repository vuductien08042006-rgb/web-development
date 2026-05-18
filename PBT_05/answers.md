Câu A1.
    1. Thẻ <meta viewport> chuẩn
        html<meta name="viewport" content="width=device-width, initial-scale=1.0">
        Giải thích từng thuộc tính:
        name="viewport" — khai báo đây là thẻ điều chỉnh vùng hiển thị (viewport)
        content="..." — chứa các tham số cấu hình
        width=device-width — đặt chiều rộng trang = chiều rộng thật của màn hình thiết bị (không dùng chiều rộng mặc định 980px)
        initial-scale=1.0 — mức zoom ban đầu là 100%, không phóng to hay thu nhỏ
    2. Nếu THIẾU thẻ này, iPhone hiển thị như thế nào?
        iPhone sẽ giả lập màn hình rộng 980px rồi thu nhỏ toàn bộ trang để vừa màn hình điện thoại, dẫn đến:

        Chữ rất nhỏ, khó đọc
        Người dùng phải zoom tay mới đọc được
        Layout desktop bị thu nhỏ toàn bộ, trông như nhìn từ xa
        CSS responsive (media query) không hoạt động đúng
    3. Mobile-First vs Desktop-First               Mobile-First          Desktop-first
        Viết CSS mặc định cho   📱 Mobile  🖥️ Desktop Dùng media query        min-width   max-width Hướng mở rộng           Nhỏ → Lớn    Lớn → Nhỏ
    Mobile-First với breakpoint 768px:
        css/* Mặc định: mobile */
        .container {
        font-size: 14px;
        padding: 10px;
        }

        /* Khi màn hình >= 768px: tablet/desktop */
        @media (min-width: 768px) {
        .container {
            font-size: 16px;
            padding: 20px;
        }
        }
    Desktop-First với breakpoint 768px:
        css/* Mặc định: desktop */
        .container {
        font-size: 16px;
        padding: 20px;
        }

        /* Khi màn hình <= 768px: mobile */
        @media (max-width: 768px) {
        .container {
            font-size: 14px;
            padding: 10px;
        }
        }
    Tại sao Mobile-First được khuyên dùng?
        -Hơn 60% người dùng truy cập web bằng điện thoại
        -Hiệu năng tốt hơn — mobile tải CSS tối thiểu, không thừa
        -Buộc tư duy ưu tiên nội dung quan trọng trước
        -Google ưu tiên mobile-first indexing khi xếp hạng SEO
        
Câu A2.
    xs — Dưới 576px
        Đây là kích thước nhỏ nhất, dành cho các điện thoại nhỏ như iPhone SE. Lưới sản phẩm nên hiển thị 1 cột để nội dung không bị chật chội, người dùng dễ đọc và dễ bấm.
        css.product-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
        }

    sm — Từ 576px trở lên
        Dành cho điện thoại lớn như iPhone 14, Samsung Galaxy. Màn hình đã rộng hơn nên có thể hiển thị 2 cột thoải mái.
        css@media (min-width: 576px) {
        .product-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        }

    md — Từ 768px trở lên
        Đây là kích thước tablet như iPad. Không gian đủ rộng để hiển thị 3 cột mà không bị chèn ép.
        css@media (min-width: 768px) {
        .product-grid {
            grid-template-columns: repeat(3, 1fr);
        }
        }

    lg — Từ 992px trở lên
        Dành cho laptop nhỏ. Lúc này tăng lên 4 cột giúp trang trông chuyên nghiệp và tận dụng không gian tốt hơn.
        css@media (min-width: 992px) {
        .product-grid {
            grid-template-columns: repeat(4, 1fr);
        }
        }

    xl — Từ 1200px trở lên
        Màn hình laptop lớn hoặc desktop thông thường. Giữ nguyên 4 cột nhưng tăng gap và padding để thoáng hơn.
        css@media (min-width: 1200px) {
        .product-grid {
            gap: 24px;
        }
        }

    xxl — Từ 1400px trở lên
        Màn hình lớn, TV, hoặc màn hình 4K. Có thể đẩy lên 6 cột để tận dụng tối đa không gian hiển thị.
        css@media (min-width: 1400px) {
        .product-grid {
            grid-template-columns: repeat(6, 1fr);
        }
        }
Câu A3.
        375px (iPhone SE) — nhỏ hơn 576px, không có media query nào khớp → áp dụng CSS mặc định → .container width: **100%**
        600px — lớn hơn 576px, khớp media query đầu tiên → .container width: **540px**
        800px — lớn hơn 768px, khớp media query thứ hai → .container width: **720px**
        1000px — lớn hơn 992px, khớp media query thứ ba → .container width: **960px**
        1400px — lớn hơn 1200px, khớp media query thứ tư → .container width: **1140px**
        Điền bảng:
        Chiều rộng màn hình           .container width             
        375px(iPhone SE)               100%
        600px                          540px
        800px                          720px
        1000px                         960px
        1400px                         1140px
Câu A4.
        1. Variables ($primary-color)
        Biến trong SCSS cho phép lưu giá trị tái sử dụng nhiều lần. Thay vì gõ #3498db khắp nơi, chỉ cần đổi 1 chỗ là thay đổi toàn bộ.
        scss$primary-color: #3498db;
        $font-size-base: 16px;
        $spacing: 20px;

        .button {
        background-color: $primary-color;
        font-size: $font-size-base;
        padding: $spacing;
        }
        2. Nesting (CSS lồng nhau)
        Thay vì viết selector dài lặp đi lặp lại, SCSS cho phép lồng các selector con bên trong selector cha — giống cấu trúc HTML.
        scss/* SCSS */
        .navbar {
        background: #333;

        .logo {
            color: white;
            font-size: 24px;
        }

        .menu {
            display: flex;

            a {
            color: gray;
            text-decoration: none;

            &:hover {
                color: white;
            }
            }
        }
        }
        Sau khi compile ra CSS sẽ thành .navbar .logo, .navbar .menu a... tự động.
        3. Mixins (@mixin, @include)
        Mixin giống như hàm trong lập trình — đóng gói một nhóm CSS hay dùng, rồi gọi lại bất cứ đâu, có thể truyền tham số.
        scss/* Định nghĩa mixin */
        @mixin flex-center($direction: row) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: $direction;
        }

        /* Sử dụng */
        .hero {
        @include flex-center();
        }

        .sidebar {
        @include flex-center(column);
        }
        4. @extend / Inheritance
        @extend cho phép một selector kế thừa toàn bộ style của selector khác, tránh lặp code.
        scss/* Class gốc */
        .btn {
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        }

        /* Kế thừa và thêm màu riêng */
        .btn-primary {
        @extend .btn;
        background-color: #3498db;
        color: white;
        }

        .btn-danger {
        @extend .btn;
        background-color: #e74c3c;
        color: white;
        }
        Tại sao trình duyệt KHÔNG đọc được .scss?
        Trình duyệt chỉ hiểu HTML, CSS, JavaScript thuần túy. File .scss là ngôn ngữ mở rộng do con người tạo ra để viết code dễ hơn, trình duyệt không có engine để xử lý cú pháp như $variable, @mixin, hay nesting.


