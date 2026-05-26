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