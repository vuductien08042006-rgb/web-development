function startGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  const MAX_LIVES = 7;
  let guessCount = 0;
  const guessedNumbers = [];

  alert("Chào mừng! Tôi đã chọn một số từ 1 đến 100. Bạn có 7 lần đoán!");

  while (guessCount < MAX_LIVES) {
    const input = prompt(
      `Lần đoán thứ ${guessCount + 1}/${MAX_LIVES}\nNhập số từ 1-100:`
    );

    // Người dùng bấm Cancel
    if (input === null) {
      alert("Bạn đã thoát game!");
      return;
    }

    const guess = parseInt(input, 10);

    // Validate: chỉ nhận số 1-100
    if (isNaN(guess) || guess < 1 || guess > 100) {
      alert("⚠ Vui lòng nhập số hợp lệ từ 1 đến 100!");
      continue;
    }

    // Đã đoán số này rồi
    if (guessedNumbers.includes(guess)) {
      alert(`⚠ Bạn đã đoán số ${guess} rồi! Hãy thử số khác.`);
      continue;
    }

    // Hợp lệ → ghi nhận
    guessedNumbers.push(guess);
    guessCount++;

    // Kiểm tra kết quả
    if (guess === secretNumber) {
      alert(`🎉 Đúng rồi! Bạn đoán đúng sau ${guessCount} lần!`);
      return;
    } else if (guess < secretNumber) {
      alert(`↑ Cao hơn! Số cần tìm lớn hơn ${guess}\n(Còn ${MAX_LIVES - guessCount} lần đoán)`);
    } else {
      alert(`↓ Thấp hơn! Số cần tìm nhỏ hơn ${guess}\n(Còn ${MAX_LIVES - guessCount} lần đoán)`);
    }
  }

  // Hết lượt
  alert(`💀 Hết lượt! Đáp án là ${secretNumber}. Chúc may mắn lần sau!`);
}