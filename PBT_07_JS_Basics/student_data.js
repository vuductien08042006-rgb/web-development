const students = [
  { name: "An",    math: 8,  physics: 7, cs: 9, gender: "M" },
  { name: "Bình",  math: 6,  physics: 9, cs: 7, gender: "F" },
  { name: "Chi",   math: 9,  physics: 6, cs: 8, gender: "F" },
  { name: "Dũng",  math: 5,  physics: 5, cs: 6, gender: "M" },
  { name: "Em",    math: 10, physics: 8, cs: 9, gender: "F" },
  { name: "Phong", math: 3,  physics: 4, cs: 5, gender: "M" },
  { name: "Giang", math: 7,  physics: 7, cs: 7, gender: "F" },
  { name: "Huy",   math: 4,  physics: 6, cs: 3, gender: "M" },
];

// 1. Tính điểm trung bình
function tinhTB(sv) {
  return sv.math * 0.4 + sv.physics * 0.3 + sv.cs * 0.3;
}

// 2. Xếp loại
function xepLoai(tb) {
  if (tb >= 8.0) return "Giỏi";
  if (tb >= 6.5) return "Khá";
  if (tb >= 5.0) return "Trung bình";
  return "Yếu";
}

// 3. In bảng kết quả
console.log("| STT | Tên      | TB  | Xếp loại    |");
console.log("|-----|----------|-----|-------------|");

for (let i = 0; i < students.length; i++) {
  const sv = students[i];
  const tb = tinhTB(sv);
  const loai = xepLoai(tb);
  const stt = String(i + 1).padEnd(3);
  const ten = sv.name.padEnd(8);
  const tbStr = tb.toFixed(1).padEnd(3);
  const loaiStr = loai.padEnd(11);
  console.log(`| ${stt} | ${ten} | ${tbStr} | ${loaiStr} |`);
}

// 4. Đếm số SV mỗi xếp loại
let soGioi = 0, soKha = 0, soTB = 0, soYeu = 0;
for (let i = 0; i < students.length; i++) {
  const loai = xepLoai(tinhTB(students[i]));
  if (loai === "Giỏi")        soGioi++;
  else if (loai === "Khá")    soKha++;
  else if (loai === "Trung bình") soTB++;
  else                        soYeu++;
}
console.log("\n--- Thống kê xếp loại ---");
console.log(`Giỏi: ${soGioi} SV`);
console.log(`Khá: ${soKha} SV`);
console.log(`Trung bình: ${soTB} SV`);
console.log(`Yếu: ${soYeu} SV`);

// 5. Tìm SV cao nhất và thấp nhất
let svCaoNhat = students[0];
let svThapNhat = students[0];
for (let i = 1; i < students.length; i++) {
  if (tinhTB(students[i]) > tinhTB(svCaoNhat)) svCaoNhat = students[i];
  if (tinhTB(students[i]) < tinhTB(svThapNhat)) svThapNhat = students[i];
}
console.log("\n--- Điểm cao nhất / thấp nhất ---");
console.log(`Cao nhất: ${svCaoNhat.name} - ${tinhTB(svCaoNhat).toFixed(1)}`);
console.log(`Thấp nhất: ${svThapNhat.name} - ${tinhTB(svThapNhat).toFixed(1)}`);

// 6. Điểm TB toàn lớp từng môn
let tongMath = 0, tongPhysics = 0, tongCs = 0;
for (let i = 0; i < students.length; i++) {
  tongMath    += students[i].math;
  tongPhysics += students[i].physics;
  tongCs      += students[i].cs;
}
const n = students.length;
console.log("\n--- Điểm TB toàn lớp từng môn ---");
console.log(`Toán:    ${(tongMath / n).toFixed(2)}`);
console.log(`Lý:      ${(tongPhysics / n).toFixed(2)}`);
console.log(`CNTT:    ${(tongCs / n).toFixed(2)}`);

// 7. Bonus: Điểm TB theo giới tính
let tongTB_M = 0, soM = 0;
let tongTB_F = 0, soF = 0;
for (let i = 0; i < students.length; i++) {
  const tb = tinhTB(students[i]);
  if (students[i].gender === "M") { tongTB_M += tb; soM++; }
  else                            { tongTB_F += tb; soF++; }
}
console.log("\n--- Điểm TB theo giới tính ---");
console.log(`Nam (M): ${(tongTB_M / soM).toFixed(2)}`);
console.log(`Nữ (F):  ${(tongTB_F / soF).toFixed(2)}`);