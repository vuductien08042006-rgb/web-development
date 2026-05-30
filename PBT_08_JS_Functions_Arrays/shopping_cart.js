function createCart() {
  let items = [];
  let discount = null;

  const DISCOUNT_CODES = {
    SALE10:   { type: "percent", value: 0.1   },
    SALE20:   { type: "percent", value: 0.2   },
    FREESHIP: { type: "fixed",   value: 30000 },
  };

  const fmt = (n) => n.toLocaleString("vi-VN");

  return {
    addItem(product, quantity = 1) {
      const existing = items.find((i) => i.id === product.id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        items.push({ ...product, quantity });
      }
    },

    removeItem(productId) {
      items = items.filter((i) => i.id !== productId);
    },

    updateQuantity(productId, newQuantity) {
      if (newQuantity <= 0) return this.removeItem(productId);
      const item = items.find((i) => i.id === productId);
      if (item) item.quantity = newQuantity;
    },

    getTotal() {
      const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
      if (!discount) return subtotal;
      if (discount.type === "percent") return subtotal * (1 - discount.value);
      if (discount.type === "fixed")   return subtotal - discount.value;
      return subtotal;
    },

    applyDiscount(code) {
      if (DISCOUNT_CODES[code]) {
        discount = DISCOUNT_CODES[code];
        console.log(`✅ Áp dụng mã "${code}" thành công!`);
      } else {
        console.log(`❌ Mã "${code}" không hợp lệ.`);
      }
    },

    getItemCount() {
      return items.reduce((sum, i) => sum + i.quantity, 0);
    },

    clearCart() {
      items = [];
      discount = null;
    },

    printCart() {
      if (items.length === 0) {
        console.log("🛒 Giỏ hàng trống.");
        return;
      }

      const COL = { idx: 3, name: 16, qty: 4, price: 13, total: 13 };

      const border = (l, r) => {
        const w = COL.idx + COL.name + COL.qty + COL.price + COL.total + 14;
        return l + "─".repeat(w) + r;
      };

      const pad  = (str, len) => String(str).padEnd(len);
      const padL = (str, len) => String(str).padStart(len);

      console.log(border("┌", "┐"));
      console.log(
        "│ " + pad("#", COL.idx) + " │ " +
        pad("Sản phẩm", COL.name) + " │ " +
        padL("SL", COL.qty) + " │ " +
        padL("Đơn giá", COL.price) + " │ " +
        padL("Tổng", COL.total) + " │"
      );
      console.log(border("├", "┤"));

      items.forEach((item, idx) => {
        const lineTotal = item.price * item.quantity;
        console.log(
          "│ " + pad(idx + 1, COL.idx) + " │ " +
          pad(item.name, COL.name) + " │ " +
          padL(item.quantity, COL.qty) + " │ " +
          padL(fmt(item.price), COL.price) + " │ " +
          padL(fmt(lineTotal), COL.total) + " │"
        );
      });

      console.log(border("├", "┤"));

      const total = this.getTotal();
      const label = discount ? "Tổng (đã giảm giá):" : "Tổng cộng:";
      const innerWidth = COL.idx + COL.name + COL.qty + COL.price + COL.total + 14;
      const row = label + " " + fmt(Math.round(total)) + "đ";
      console.log("│ " + row.padEnd(innerWidth - 1) + "│");
      console.log(border("└", "┘"));
      console.log();
    },
  };
}

// ===================== TEST =====================

const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16",   price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000  }, 2);
cart.addItem({ id: 1, name: "iPhone 16",   price: 25990000 }, 1);

console.log("=== GIỎ HÀNG BAN ĐẦU ===");
cart.printCart();

cart.applyDiscount("SALE10");
console.log("=== SAU KHI ÁP MÃ SALE10 ===");
cart.printCart();

console.log("Số SP:", cart.getItemCount());

cart.removeItem(3);
console.log("Sau khi xóa AirPods Pro:");
console.log("Số SP:", cart.getItemCount());
cart.printCart();