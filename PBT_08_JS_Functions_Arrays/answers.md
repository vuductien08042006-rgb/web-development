Câu A1.
1. Function Declaration
javascriptfunction tinhThueBaoHiem(luong) {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  const thuc_nhan = luong - thue;
  return { thuong: thue, thuc_nhan };
}

2. Function Expression
javascriptconst tinhThueBaoHiem = function(luong) {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  const thuc_nhan = luong - thue;
  return { thuong: thue, thuc_nhan };
};

3. Arrow Function
javascriptconst tinhThueBaoHiem = (luong) => {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  const thuc_nhan = luong - thue;
  return { thuong: thue, thuc_nhan };
};
3 cách có khác nhau về hoisting .
VD:
console.log(bieu_thuc(15000000)); 
var bieu_thuc = function(luong) {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  return { thuong: thue, thuc_nhan: luong - thue };
};
console.log(arrow(15000000));  // ReferenceError (nếu dùng const/let)

const arrow = (luong) => {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  return { thuong: thue, thuc_nhan: luong - thue };
};
console.log(bieu_thuc(15000000));  
var bieu_thuc = function(luong) {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  return { thuong: thue, thuc_nhan: luong - thue };
};
Câu A2.
Đoạn 1: Dự đoán output
javascriptconst c = counter();
console.log(c.increment()); // 1
console.log(c.increment()); // 2
console.log(c.increment()); // 3
console.log(c.decrement()); // 2
console.log(c.getCount()); // 2
Đoạn 2: Output sau 200ms
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2
Giải thích tại sao var và let khác nhau
Với var:
var i có function scope, toàn bộ vòng lặp chỉ tạo ra 1 biến i duy nhất. Cả 3 callback đều trỏ về cùng ô nhớ đó. Khi setTimeout kích hoạt (sau 100ms), vòng lặp đã chạy xong, i đã bằng 3. Nên cả 3 in ra var: 3.
Với let:
let j có block scope, mỗi vòng lặp JS tạo ra một biến j hoàn toàn mới. Mỗi callback closure giữ riêng bản j của lần lặp đó, không bị ảnh hưởng khi vòng lặp tiếp tục.
Câu A3.
1. Lấy các số chẵn → [2, 4, 6, 8, 10]
javascriptconst result1 = nums.filter(n => n % 2 === 0);
2. Nhân mỗi số với 3 → [3, 6, 9, ..., 30]
javascriptconst result2 = nums.map(n => n * 3);
3. Tính tổng tất cả → 55
javascriptconst result3 = nums.reduce((acc, n) => acc + n, 0);
4. Tìm số đầu tiên > 7 → 8
javascriptconst result4 = nums.find(n => n > 7);
5. Kiểm tra CÓ số > 10 không → false
javascriptconst result5 = nums.some(n => n > 10);
6. Kiểm tra TẤT CẢ đều > 0 → true
javascriptconst result6 = nums.every(n => n > 0);
7. Tạo mảng "Số X là [chẵn/lẻ]" → ["Số 1 là lẻ", "Số 2 là chẵn", ...]
javascriptconst result7 = nums.map(n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);
8. Đảo ngược mảng (không mutate gốc) → [10, 9, ..., 1]
javascriptconst result8 = [...nums].reverse();
Câu A4.
// Destructuring
console.log(name, price, ram, color); // "iPhone 16" 25990000 8 "Titan"
console.log(specs);                   // ReferenceError: specs is not defined
// Spread
onsole.log(updated.price);   // 23990000
console.log(updated.sale);    // true
console.log(product.price);   // 25990000  (gốc KHÔNG đổi)
// Spread gotcha
console.log(product.specs.ram); // 16  (không phải 8!)
Câu C1.
const processOrders = (orders) =>
  orders
    .filter(({ status, total }) => status === "completed" && total > 100000)
    .map(({ id, customer, total }) => ({
      id,
      customer,
      total,
      discount: total * 0.1,
      finalTotal: total * 0.9,
    }))
    .sort((a, b) => b.finalTotal - a.finalTotal);