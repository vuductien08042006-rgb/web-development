Câu A1.
|Position |chiếm chỗ |Tham chiếu|Cuộn theo trang|Usecase|
|static   |   có     |không dùng|  có           |mặc định|
|relative |   có     | chính nó |   có          |        |
|absolute | không    |          |  không        |tooltip |
|fixed    | không    |viewport  | không         |navar   |
|sticky   | có       |viewport  | một phần      |header sinh khi cuộn|
    -Khi nào absolute tham chiếu body?
        Khi không có phần tử cha nào được đặt position khác static → absolute sẽ leo lên tham chiếu body (phần tử gốc của trang).
    -Khi nào absolute tham chiếu parent?
        Khi phần tử cha có position là relative, absolute, fixed, hoặc sticky → absolute sẽ tham chiếu theo cha gần nhất đó.
    -Nearest Positioned Ancestor là gì?
        Là phần tử cha gần nhất có position khác static. Khi dùng absolute, trình duyệt sẽ tìm kiếm từ trong ra ngoài.
Câu A2.
    Trường hợp 1
        css.container { display: flex; }
        .item { flex: 1; }
        /* 4 items */
        flex: 1 → mỗi item chia đều không gian, nằm trên 1 hàng ngang:
        ┌──────────┬──────────┬──────────┬──────────┐
        │  Item 1  │  Item 2  │  Item 3  │  Item 4  │
        └──────────┴──────────┴──────────┴──────────┘
    Trường hợp 2
        css.container { display: flex; flex-wrap: wrap; }
        .item { width: 45%; margin: 2.5%; }
        /* 6 items */
        Mỗi item chiếm 45% + 2.5% + 2.5% = 50% → 2 item/hàng, 3 hàng:
        ┌───────────────┬───────────────┐
        │    Item 1     │    Item 2     │
        ├───────────────┼───────────────┤
        │    Item 3     │    Item 4     │
        ├───────────────┼───────────────┤
        │    Item 5     │    Item 6     │
        └───────────────┴───────────────┘
    Trường hợp 3
        css.container { display: flex; justify-content: space-between; align-items: center; }
        /* 3 items */
        space-between → item đầu sát trái, item cuối sát phải, item giữa ở chính giữa. align-items: center → tất cả căn giữa theo chiều dọc:
        ┌─────────────────────────────────────────┐
        │                                         │
        │ [Item 1]       [Item 2]       [Item 3]  │
        │                                         │
        └─────────────────────────────────────────┘
    Trường hợp 4
        css.container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; }
        /* 3 items */
        Cột 1 và 3 cố định 200px, cột 2 chiếm phần còn lại:
        ┌──────────┬──────────────────────┬──────────┐
        │  200px   │         1fr          │  200px   │
        │  Item 1  │       Item 2         │  Item 3  │
        └──────────┴──────────────────────┴──────────┘
    Trường hợp 5
        css.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        /* 7 items */
        3 cột đều nhau → 3 item/hàng:

        Hàng 1: Item 1, 2, 3
        Hàng 2: Item 4, 5, 6
        Hàng 3: Item 7 ở cột đầu tiên, 2 ô còn lại trống

        ┌─────────┬─────────┬─────────┐
        │ Item 1  │ Item 2  │ Item 3  │
        ├─────────┼─────────┼─────────┤
        │ Item 4  │ Item 5  │ Item 6  │
        ├─────────┼─────────┼─────────┤
        │ Item 7  │ (trống) │ (trống) │
        └─────────┴─────────┴─────────┘
Câu C1.
    1. Navigation bar ngang (logo + menu + buttons)
        → Flexbox
        Navbar là bố cục 1 chiều (ngang), các phần tử xếp theo hàng. justify-content: space-between chia logo trái, menu giữa, buttons phải rất tự nhiên. Grid không cần thiết ở đây.
    2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)
        → Grid
        Bố cục 2 chiều (hàng + cột), cần các ô đều nhau chính xác. repeat(3, 1fr) tạo 3 cột bằng nhau, ảnh tự động xuống hàng dù bao nhiêu ảnh. Flexbox khó kiểm soát chiều rộng đều nhau khi số lượng thay đổi.
    3. Layout blog: main content + sidebar
        → Grid
        Cần định nghĩa 2 vùng rõ ràng với kích thước cố định/linh hoạt. Grid grid-template-columns: 1fr 300px diễn đạt ý định rõ ràng hơn. Nếu dùng Flexbox phải dùng flex-shrink, flex-grow phức tạp hơn.
    4. Footer với 4 cột thông tin
        → Grid
        4 cột đều nhau, cố định — đúng bài toán của Grid. repeat(4, 1fr) tạo 4 cột bằng nhau tự động. Dễ responsive hơn Flexbox khi cần đổi thành 2 cột trên mobile.
    5. Card sản phẩm (ảnh trên, text giữa, nút luôn dính đáy)
        → Flexbox
        Bên trong card là bố cục 1 chiều dọc. flex-direction: column + margin-top: auto trên nút là kỹ thuật chuẩn để nút luôn dính đáy dù nội dung dài ngắn khác nhau.
Câu C2.
    Lỗi 1: Nút "Mua" bị nhảy lên/xuống
        Nguyên nhân: Card không có display: flex; flex-direction: column nên các phần tử bên trong xếp bình thường, không có cơ chế đẩy nút xuống đáy. Tên sản phẩm dài ngắn khác nhau → nút bị nhảy loạn.
    /* ✅ Sau — đã sửa */
        .card-container {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch; /* tất cả card đều chiều cao nhau */
        }
        .card {
        width: 30%;
        margin: 1.5%;
        display: flex;           /* thêm */
        flex-direction: column;  /* thêm — xếp dọc */
        }
        .card img { width: 100%; }
        .card h3 { font-size: 18px; }
        .card .btn {
        padding: 10px;
        margin-top: auto;        /* thêm — đẩy nút xuống đáy */
        }

    Lỗi 2: Items vẫn dính góc trái trên
        Nguyên nhân: display: flex tạo flexbox nhưng thiếu justify-content và align-items để căn giữa. Mặc định flex là justify-content: flex-start và align-items: stretch nên content dính góc trái trên.
    /* ✅ Sau — đã sửa */
        .hero {
        height: 100vh;
        display: flex;
        justify-content: center; /* thêm — căn giữa ngang */
        align-items: center;     /* thêm — căn giữa dọc */
        }
        .hero-content {
        text-align: center;
        }

    Lỗi 3: Sidebar bị co lại
        Nguyên nhân: Mặc định flex items có flex-shrink: 1 — cho phép co lại khi không đủ chỗ. Khi content quá dài, sidebar bị ép co nhỏ hơn 250px để nhường chỗ.
    /* ✅ Sau — đã sửa */
        .layout { display: flex; }
        .sidebar {
        width: 250px;
        flex-shrink: 0; /* thêm — không cho phép co lại */
        }
        .content { flex: 1; }
        ----
