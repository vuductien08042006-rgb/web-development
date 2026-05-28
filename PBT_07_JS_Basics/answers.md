Câu A1.
        -Đoạn 1.Output: undefined
        -Đoạn 2.Output: không kết quả
        -Đoạn 3.Output:không kết quả
        -Đoạn 4.Output: [1, 2, 3, 4]
        -Đoạn 5.Output:Trong block: 2 Ngoài block: 1
Câu A2.
        typeof null → "object" 
        typeof undefined → "undefined"
        typeof NaN → "number" 
        "5" + 3 → "53" 
        "5" - 3 → 2 
        "5" * "3" → 15 
        true + true → 2 
        [] + [] → ""
        [] + {} → 
        {} + [] → 0
    -Giải thích tại sao "5" + 3 và "5" - 3 khác nhau:
        Toán tử + có 2 vai trò: cộng số và nối chuỗi. Khi một trong hai vế là string, JS ưu tiên nối chuỗi → "5" + 3 ra "53".
        Toán tử - chỉ có một vai trò duy nhất là trừ số, không có chức năng nối chuỗi. Vì vậy JS buộc phải ép "5" thành number 5 rồi tính → 5 - 3 = 2.
Câu A3.
                console.log(5 == "5");               true
                console.log(5 === "5");               false
                console.log(null == undefined);       true
                console.log(null === undefined);     false
                console.log(NaN == NaN);             false
                console.log(0 == false);             true
                console.log(0 === false);            false
                console.log("" == false);            true
        -Từ giờ trở đi nên  dùng === 
        -Tại sao?
                == thực hiện ép kiểu ngầm (type coercion) theo các quy tắc phức tạp, dễ gây bug khó phát hiện.
                === so sánh cả giá trị lẫn kiểu dữ liệu, kết quả rõ ràng và dự đoán được.
                Code dùng === dễ đọc, dễ debug hơn vì bạn biết chính xác mình đang so sánh gì.
Câu A4.
        6 giá trị Falsy trong JavaScript:
                false, 0, "", null, undefined, NaN
                Ngoài 6 cái này, mọi thứ đều Truthy — kể cả [], {}, "0", " "...

        Dự đoán kết quả:
                if ("0") → In "A" — chuỗi "0" không rỗng, Truthy
                if ("") → Không in — chuỗi rỗng, Falsy
                if ([]) → In "C" — mảng rỗng vẫn là object, Truthy
                if ({}) → In "D" — object rỗng vẫn là object, Truthy
                if (null) → Không in — null là Falsy
                if (0) → Không in — 0 là Falsy
                if (-1) → In "G" — số khác 0, Truthy
                if (" ") → In "H" — có dấu cách, không rỗng, Truthy
Câu A5.
        -Cách 1:var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
        -Cách 2:var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
        -Cách 3:var html = `<div class="card">
        <h2>${title}</h2>
        <p>${description}</p>
        <span>Giá: ${price}đ</span>
        </div>`;
Câu C1.
        -Lỗi 1 — Dùng = thay vì == trong điều kiện
                Sửa:
                if (giaSauGiam === 0)
        -Lỗi 2 — Truyền chuỗi thay vì số
                Sửa:
                const gia = tinhGiaGiamGia(100000, 20)
        -Lỗi 3 —  Thêm vào đầu hàm:
                if (typeof giaBan !== "number" || isNaN(giaBan) || giaBan < 0) {
                return "Giá bán không hợp lệ"
                }
        -Lỗi 4 — phanTramGiam = 110 vượt 100 nhưng không return lỗi rõ
                Đã có kiểm tra, nhưng thông báo nên rõ hơn:
                return `Lỗi: ${phanTramGiam}% không hợp lệ (phải từ 0-100)`
        -Lỗi 5 — Thiếu kiểm tra giaBan = 0
                Đã được fix sau khi sửa Lỗi 1
        -Lỗi 6 (lỗi ẩn) — var i trong vòng lặp + setTimeout
                for (var i = 0; i < 5; i++) {
                setTimeout(function() {
                        console.log("Item " + i)  // In ra "Item 5" cả 5 lần!
                }, 1000)
                }
        -Sửa bằng let — let có block scope, mỗi vòng lặp giữ riêng giá trị i
                for (let i = 0; i < 5; i++) {
                setTimeout(function() {
                        console.log("Item " + i)  // In đúng: 0, 1, 2, 3, 4
                }, 1000)
                }
                -Tại sao var bị lỗi? Vì var là function scope — tất cả các callback setTimeout dùng chung cùng một biến i. Đến khi timeout 1000ms chạy, vòng lặp đã chạy xong, i = 5 rồi → in ra Item 5 cả 5 lần.
                let là block scope — mỗi lần lặp tạo ra một biến i riêng, setTimeout giữ đúng giá trị của lần lặp đó.
