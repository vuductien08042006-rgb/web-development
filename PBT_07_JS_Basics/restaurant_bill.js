const monAn = [
  { ten: "Phở bò",  gia: 65000, soLuong: 2 },
  { ten: "Trà đá",  gia: 5000,  soLuong: 3 },
  { ten: "Bún chả", gia: 55000, soLuong: 1 },
];

const coTip = true;

function tinhHoaDon(danhSach, coTip = false) {
  const homNay = new Date();
  const laThuBa = homNay.getDay() === 3;

  const tongCong = danhSach.reduce((sum, mon) => sum + mon.gia * mon.soLuong, 0);

  let phanTramGiam = 0;
  if (tongCong > 1000000)     phanTramGiam = 15;
  else if (tongCong > 500000) phanTramGiam = 10;
  if (laThuBa)                phanTramGiam += 5;

  const soTienGiam = tongCong * phanTramGiam / 100;
  const sauGiamGia = tongCong - soTienGiam;
  const vat        = sauGiamGia * 0.08;
  const tip        = coTip ? sauGiamGia * 0.05 : 0;
  const thanhToan  = sauGiamGia + vat + tip;

  function formatTien(so) {
    return so.toLocaleString("vi-VN") + "đ";
  }

  function dongKe(nhan, gia, width = 38) {
    const chuoi = nhan + gia;
    const pad   = width - chuoi.length;
    return "║ " + nhan + " ".repeat(Math.max(0, pad)) + gia + " ║";
  }

  function duongKe(char = "═", width = 40) {
    return "╠" + char.repeat(width) + "╣";
  }

  const W = 40;
  const tieu = "HÓA ĐƠN NHÀ HÀNG";
  const padding = Math.floor((W - tieu.length) / 2);

  console.log("╔" + "═".repeat(W) + "╗");
  console.log("║" + " ".repeat(padding) + tieu + " ".repeat(W - padding - tieu.length) + "║");
  console.log(duongKe());

  danhSach.forEach((mon, i) => {
    const tongMon = mon.gia * mon.soLuong;
    const tenPart = `${i + 1}. ${mon.ten}`;
    const chiTiet = `x${mon.soLuong}  @${mon.gia / 1000}k = ${tongMon / 1000}k`;
    const hang    = tenPart.padEnd(16) + chiTiet;
    const pad     = W - hang.length;
    console.log("║ " + hang + " ".repeat(Math.max(0, pad - 1)) + "║");
  });

  console.log(duongKe());
  console.log(dongKe(`Tổng cộng:`.padEnd(28),              formatTien(tongCong)));
  console.log(dongKe(`Giảm giá (${phanTramGiam}%):`.padEnd(28), formatTien(soTienGiam)));
  console.log(dongKe(`VAT (8%):`.padEnd(28),               formatTien(vat)));
  if (coTip) {
    console.log(dongKe(`Tip (5%):`.padEnd(28),             formatTien(tip)));
  }
  console.log(duongKe());
  console.log(dongKe("THANH TOÁN:".padEnd(28),             formatTien(thanhToan)));
  console.log("╚" + "═".repeat(W) + "╝");

  if (laThuBa) console.log("\n🎉 Thứ 4 vui vẻ! Bạn được giảm thêm 5%");

  return thanhToan;
}

tinhHoaDon(monAn, coTip);