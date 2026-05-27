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