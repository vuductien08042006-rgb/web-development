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