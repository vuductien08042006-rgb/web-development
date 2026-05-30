Câu A1.
    1. Inline CSS
        Viết trực tiếp vào attribute style của từng thẻ HTML.
        html
        Vd: <h1 style="color: #2563eb; font-size: 32px;">Tiêu đề</h1>
        Ưu điểm:
        -Áp dụng ngay, không cần file riêng
        -Override được mọi CSS khác (độ ưu tiên cao nhất)

        Nhược điểm:
        -Không tái sử dụng được — mỗi thẻ phải viết lại
        -Khó maintain — sửa màu phải tìm từng dòng
        -Không được browser cache
        -Khi nào dùng: Override khẩn cấp, hoặc style do JavaScript tạo động.
    2. Internal CSS
        Viết trong thẻ <style> đặt trong <head>.
        Vd:<head>
        <style>
            h1 {
            color: #2563eb;
            font-size: 32px;
            }
        </style>
        </head>
        Ưu điểm:
        -Gọn trong 1 file, không cần tạo file CSS riêng
        -Phù hợp để làm prototype nhanh

        Nhược điểm:
        -Không dùng lại được cho trang khác
        -File HTML phình to, khó đọc
        -Không được cache riêng
        -Khi nào dùng: Trang đơn (single-page), làm bài tập nhanh, prototype.
    3.External CSS
            Viết trong file .css riêng, liên kết vào HTML bằng thẻ <link>.
            <!-- Trong file HTML -->
            <head>
            <link rel="stylesheet" href="styles.css">
            </head>
            /* Trong file styles.css */
            h1 {
            color: #2563eb;
            font-size: 32px;
            }
            Ưu điểm:
            -Tái sử dụng cho nhiều trang — sửa 1 chỗ = đổi cả site
            -Browser cache lại → trang sau load nhanh hơn
            -Tách biệt HTML và CSS → dễ maintain, dễ làm nhóm

            Nhược điểm:
            -Cần tạo thêm file riêng
            -Nếu file CSS lỗi đường dẫn → toàn bộ style mất
            -Khi nào dùng: Mọi dự án thực tế (production).
    Câu hỏi thêm: Nếu cùng 1 element có cả 3 cách, cách nào thắng?
           Thứ tự ưu tiên (từ cao → thấp): Inline CSS  >  Internal CSS  =  External CSS
           Inline CSS có điểm cao nhất nên luôn thắng. Internal và External ngang nhau về specificity — cái nào viết sau sẽ thắng (rule sau ghi đè rule trước).
Câu A2.
    1. h1 → Chọn: "ShopTLU"
    (tất cả thẻ h1, ở đây chỉ có 1)
    2. .price → Chọn: "25.990.000đ" và "45.990.000đ"
    (tất cả element có class price)
    3. #app header → Chọn: toàn bộ thẻ <header class="top-bar dark">
    (header nằm trong #app)
    4. nav a:first-child → Chọn: "Home"
    (thẻ <a> đầu tiên trong nav)
    5. .product.featured h2 → Chọn: "MacBook Pro"
    (h2 bên trong element có cả 2 class product VÀ featured)
    6. article > p → Chọn: "25.990.000đ", "Mô tả sản phẩm..." (×2), "45.990.000đ"
    (tất cả <p> là con trực tiếp của <article> — có 4 thẻ p tổng cộng)
    7. a[href="/"] → Chọn: "Home"
    (thẻ a có attribute href bằng đúng "/")
    8. .top-bar.dark h1 → Chọn: "ShopTLU"
    (h1 bên trong element có cả 2 class top-bar VÀ dark)
Câu A3.
        -Trường hợp 1: content-box (mặc định)
        content-box: width chỉ tính phần content
        ┌─────────────────────────────────┐  ← margin (10px)
        │  ┌───────────────────────────┐  │  ← border (5px)
        │  │  ┌─────────────────────┐  │  │  ← padding (20px)
        │  │  │   content (400px)   │  │  │
        │  │  └─────────────────────┘  │  │
        │  └───────────────────────────┘  │
        └─────────────────────────────────┘
        Chiều rộng hiển thị = width + padding×2 + border×2
        = 400 + 20×2 + 5×2 = 450px
        Không gian chiếm trên trang = 450 + margin×2
        = 450 + 10×2 = 470px

        -Trường hợp 2: border-box
        border-box: width đã bao gồm padding + border
        Chiều rộng hiển thị = width = 400px
        Kích thước content thực tế = width - padding×2 - border×2
        = 400 - 20×2 - 5×2 = 350px
        Không gian chiếm trên trang = 400 + margin×2
        = 400 + 10×2 = 420px

        -Trường hợp 3: Margin Collapse
        .box-a { margin-bottom: 25px; }
        .box-b { margin-top: 40px; }
        Khoảng cách = 40px (không phải 65px)
        Tại sao không phải 65px?
        Đây là hiện tượng Margin Collapse — khi 2 margin dọc chạm nhau, trình duyệt chỉ lấy giá trị lớn hơn, không cộng lại:
        box-a
        ↕ 25px  ←┐
        ↕ 40px  ←┘ chỉ lấy max(25, 40) = 40px
        box-b

        Lưu ý: Margin collapse chỉ xảy ra theo chiều dọc (top/bottom), không xảy ra theo chiều ngang (left/right).


        -Nâng cao: Margin âm
        .box-a { margin-bottom: -10px; }
        .box-b { margin-top: 40px; }
        Khoảng cách = 30px
        Công thức khi có margin âm:
        max(dương) + min(âm) = 40 + (-10) = 30px
        box-a
        ↕ 30px  ← 40px bị kéo lên 10px bởi margin âm
        box-b
Câu A4.
1. Tính Specificity từng Rule
        Rule A: p
        p
        ↓
        element = 1

        → (0, 0, 1)

        Rule B: .price
        .price
        ↓
        class = 1

        → (0, 1, 0)

        Rule C: #main-price
        #main-price
        ↓
        ID = 1

        → (1, 0, 0)

        Rule D: p.price
        p  .price
        ↓    ↓
        element=1  class=1

        → (0, 1, 1)

        So sánh trực quan
        Rule A:  (0, 0, 1)  →    1
        Rule B:  (0, 1, 0)  →   10
        Rule C:  (1, 0, 0)  →  100  ← cao nhất
        Rule D:  (0, 1, 1)  →   11

        Hình dung như số có 3 chữ số: a|b|c → Rule C = 100, Rule D = 11, Rule B = 10, Rule A = 1

    2. Element sẽ có màu gì?
        → Màu đỏ red (Rule C thắng)
        Vì #main-price có specificity (1,0,0) cao nhất — ID selector luôn thắng class và element selector.
        C (1,0,0) red      ← thắng ✅
        D (0,1,1) green
        B (0,1,0) blue
        A (0,0,1) black
    3. Thêm style="color: orange"
        → Màu cam orange
        Inline style có specificity (1, 0, 0, 0) — luôn thắng mọi rule trong file CSS:
        inline style  (1,0,0,0) orange   ← thắng ✅
        #main-price   (0,1,0,0) red
        p.price       (0,0,1,1) green
        .price        (0,0,1,0) blue
        p             (0,0,0,1) black
    4. Rule A thêm !important
        cssp { color: black !important; }
        → Màu đen black
        Vì !important phá vỡ toàn bộ quy tắc specificity, kể cả inline style:
        !important      black    ← thắng ✅ (vượt mọi thứ)
        inline style    orange
        #main-price     red
        p.price         green
        .price          blue
Câu B1.
    1.Element   Vd: selectorbody, header, table, footer.
    2.Descendant    Vd: selectornav a, header h1, aside ul li
    3.Class     Vd: selectornav a.active
    4.Pseudo-class  Vd: selectornav a:hover
    5.Pseudo-class selector (nth-child)     Vd: tbody tr:nth-child(even)
Câu B2.
        ## Phần 1 — Content-box vs Border-box
        ### Hộp 1 (content-box)
        Chiều rộng thực tế:
        300 + 20 + 20 + 5 + 5 = 350px
        Kết quả đo từ DevTools: 350px
        ---
        ### Hộp 2 (border-box)
        Chiều rộng thực tế:
        300px
        Kết quả đo từ DevTools: 300px
        ---
        ### Giải thích sự khác biệt
        - Với content-box:
        width chỉ tính phần content.
        Padding và border sẽ cộng thêm vào kích thước thật.
        - Với border-box:
        width bao gồm luôn content + padding + border.
        Vì vậy kích thước thực tế không tăng thêm.
        ---
        # Phần 2 — Layout 3 cột
        ## Không dùng border-box
        Tổng chiều rộng:
        - Sidebar:
        250 + 15 + 15 + border
        - Content:
        500 + 20 + 20 + border
        - Ads:
        250 + 15 + 15 + border
        => Tổng lớn hơn 1000px nên layout bị tràn.
        ---
        ## Dùng border-box
        Padding và border được tính bên trong width.
        Tổng 3 cột vẫn đúng 1000px nên layout hiển thị chuẩn.
Câu B3.
 1. Danh sách 10 rules + specificity
        1. p
        Specificity: (0,0,1)
        2. .text
        Specificity: (0,1,0)
        3. .highlight
        Specificity: (0,1,0)
        4. p.text
        Specificity: (0,1,1)
        5. p.highlight
        Specificity: (0,1,1)
        6. .text.highlight
        Specificity: (0,2,0)
        7. p.text.highlight
        Specificity: (0,2,1)
        8. #demo
        Specificity: (1,0,0)
        9. #demo.text
        Specificity: (1,1,0)
        10. p#demo.text.highlight
        Specificity: (1,2,1)
        ---
    ## 2. Element cuối cùng hiển thị màu gì?
        Element cuối cùng hiển thị màu đen (black).
        ---
    ## 3. Tại sao?
        Rule:
        p#demo.text.highlight {
            color: black;
        }
        có specificity cao nhất:
        (1,2,1)
        Nó gồm:
        - 1 ID
        - 2 class
        - 1 element
        nên được ưu tiên cao nhất.
        ---
    ## 4. Thay đổi thứ tự rules trong CSS file có đổi kết quả không?
        - Nếu specificity KHÁC nhau:
        Không đổi kết quả.
        Rule có specificity cao hơn luôn thắng.
        - Nếu specificity BẰNG nhau:
        Rule viết sau sẽ thắng.
Câu C1.
        1. Tính chiều rộng thực tế (content-box)
        Sidebar:
        width:   300px
        padding: 20px × 2  = 40px
        border:  1px × 2   = 2px
        ─────────────────────────
        Tổng:              342px
        Content:
        width:   660px
        padding: 30px × 2  = 60px
        border:  1px × 2   = 2px
        ─────────────────────────
        Tổng:              722px
        Tổng 2 cột = 342 + 722 = 1064px > 960px → VỠ
        2. Tại sao vỡ
        Container chỉ có 960px nhưng tổng 2 cột là 1064px, không đủ chỗ → content bị đẩy xuống dòng.
        3. Hai cách sửa
        Cách 1 — Dùng border-box:
        css.sidebar, .content {
            box-sizing: border-box;
        }

        Cách 2 — Không dùng border-box, tính lại width:
        css.sidebar {
            width: 258px; /* 300 - 40(padding) - 2(border) = 258px */
        }
        .content {
            width: 598px; /* 660 - 60(padding) - 2(border) = 598px */
        }
Câu C2.
    1."Sản phẩm A" (h2) có font-size =20px và color =green.
    2."Mô tả sản phẩm" (p trong card featured) có color =blue.
    3."Sản phẩm B" (h2) có font-size =20px và color = blue.
    4."Mô tả sản phẩm B" (p.highlight) có color = green.

    -Giải thích cascade + inheritance
        1. "Sản phẩm A" — h2.title.highlight trong #featured
        font-size = 20px
        Chỉ có 1 rule áp dụng: .card .title { font-size: 20px } → không tranh chấp
        color = green
        3 rule tranh chấp:
        .card → blue → độ ưu tiên (0,1,0)
        #featured .title → red → độ ưu tiên (1,1,0) → mạnh hơn
        .highlight → green !important → !important thắng tất cả
        ✅ green
        2. "Mô tả sản phẩm" — p trong #featured
        color = blue
        .card p { color: inherit } → lấy màu từ cha là .card
        .card { color: blue } → cha có màu blue
        ✅ blue
        3. "Sản phẩm B" — h2.title trong .card thường
        font-size = 20px
        .card .title { font-size: 20px } → không tranh chấp
        ✅ 20px
        color = blue
        Chỉ có .card { color: blue } áp dụng
        Không có #id, không có !important
        ✅ blue
        4. "Mô tả sản phẩm B" — p.highlight
        color = green
        .card p { color: inherit } → bình thường sẽ kế thừa blue
        Nhưng .highlight { color: green !important } → !important thắng
        ✅ green
        -
                