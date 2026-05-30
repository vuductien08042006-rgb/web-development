function pipe(...fns) {
  return (value) => fns.reduce((acc, fn) => fn(acc), value);
}

function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function debounce(fn, delay) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

async function retry(fn, maxAttempts = 3) {
  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const result = await fn();
      console.log(`✅ Thành công ở lần ${attempt}`);
      return result;
    } catch (err) {
      lastError = err;
      console.log(`❌ Lần ${attempt} thất bại: ${err.message}`);
      if (attempt < maxAttempts) console.log(`🔄 Thử lại...`);
    }
  }
  throw new Error(`Thất bại sau ${maxAttempts} lần: ${lastError.message}`);
}

// ===================== TEST =====================

const process = pipe(
  (x) => x * 2,
  (x) => x + 10,
  (x) => x.toString(),
  (x) => "Kết quả: " + x
);
console.log(process(5));

const expensiveCalc = memoize((n) => {
  console.log("Đang tính...");
  let result = 0;
  for (let i = 0; i < n; i++) result += i;
  return result;
});
console.log(expensiveCalc(1000000));
console.log(expensiveCalc(1000000));

const search = debounce((query) => {
  console.log("Searching:", query);
}, 500);
search("i");
search("ip");
search("iphone");

let callCount = 0;
const flakyApi = () =>
  new Promise((resolve, reject) => {
    callCount++;
    if (callCount < 3) reject(new Error("Server lỗi"));
    else resolve({ data: "OK" });
  });

retry(flakyApi, 3).then((res) => console.log("Kết quả:", res));

const alwaysFail = () =>
  new Promise((_, reject) => reject(new Error("Không kết nối được")));

retry(alwaysFail, 3).catch((err) => console.log("💥", err.message));