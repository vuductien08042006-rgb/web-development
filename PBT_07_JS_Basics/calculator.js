function calculate(num1, operator, num2) {
  // Kiểm tra input có phải số không
  if (typeof num1 !== "number" || typeof num2 !== "number" || isNaN(num1) || isNaN(num2)) {
    return "Lỗi: Input không phải số";
  }

  // Kiểm tra chia cho 0
  if (operator === "/" && num2 === 0) {
    return "Lỗi: Không thể chia cho 0";
  }

  // Tính toán
  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;
  if (operator === "/") return num1 / num2;
  if (operator === "%") return num1 % num2;
  if (operator === "**") return num1 ** num2;

  // Operator không hợp lệ
  return `Lỗi: Operator '${operator}' không hợp lệ`;
}

// Test
console.log(calculate(10, "+", 5));      
console.log(calculate(10, "/", 0));      
console.log(calculate(10, "^", 5));      
console.log(calculate("abc", "+", 5));   
console.log(calculate(2, "**", 10));    