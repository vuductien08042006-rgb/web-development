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