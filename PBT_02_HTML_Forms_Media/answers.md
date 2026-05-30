Câu A1
  1.type="email" → Ô nhập text, tự kiểm tra có dấu @ và định dạng email → Dùng cho form đăng ký tài khoản
  2.type="password" → Ô nhập mật khẩu, ký tự bị ẩn bằng * hoặc • → Dùng cho đăng nhập tài khoản
  3.type="number" → Ô nhập số, có nút tăng giảm → Dùng để nhập số lượng sản phẩm
  4.type="date" → Hiển thị lịch để chọn ngày → Dùng để chọn ngày giao hàng
  5.type="tel" → Ô nhập số điện thoại → Dùng cho thông tin liên hệ khách hàng
  6.type="url" → Ô nhập link website, tự kiểm tra định dạng URL → Dùng để nhập link website cửa hàng
  7.type="search" → Ô tìm kiếm có biểu tượng/xóa nhanh → Dùng cho thanh tìm kiếm sản phẩm
  8.type="file" → Nút chọn file từ máy tính → Dùng để upload ảnh đại diện hoặc hóa đơn
  9.type="checkbox" → Ô vuông tích chọn nhiều lựa chọn → Dùng để đồng ý điều khoản sử dụng
  10.type="radio" → Nút tròn chỉ chọn được 1 đáp án → Dùng để chọn phương thức thanh toán
Câu A2.
- Trường hợp 1:<input type="text" required value="">
    Dự đoán:
    Khi bấm Submit, form sẽ KHÔNG gửi đi.
    Trình duyệt hiện thông báo yêu cầu nhập dữ liệu.
    Tại sao?
    Thuộc tính required nghĩa là bắt buộc phải nhập.
    value="" đang rỗng nên không hợp lệ.
- Trường hợp 2:<input type="email" value="abc">
    Dự đoán:
    Form sẽ KHÔNG submit được.
    Trình duyệt báo email không đúng định dạng.
    Tại sao?
    type="email" yêu cầu dữ liệu phải có dạng email.
    "abc" không có ký tự @ và tên miền.
- Trường hợp 3:<input type="number" min="1" max="10" value="15">
    Dự đoán:
    Form không submit được.
    Trình duyệt báo giá trị vượt quá giới hạn.
    Tại sao?
    min="1" và max="10" quy định số chỉ từ 1 đến 10.
    User nhập 15 nên vượt quá max.
- Trường hợp 4:<input type="text" pattern="[0-9]{10}" value="abc123">
    Dự đoán:
    Form không submit được.
    Trình duyệt báo dữ liệu không đúng mẫu yêu cầu.
    Tại sao?
    pattern="[0-9]{10}" yêu cầu đúng 10 chữ số.
    "abc123":
    chứa chữ cái
    không đủ 10 số
- Trường hợp 5:<input type="password" minlength="8" value="123">
    Dự đoán:
    Form không submit được.
    Trình duyệt báo mật khẩu quá ngắn.
    Tại sao?
    minlength="8" yêu cầu tối thiểu 8 ký tự.
    "123" chỉ có 3 ký tự.
-So sánh với dự đoán:
    Trường hợp	      Dự đoán	           Kết quả thực tế
    Required	      Không submit	       Đúng
    Email	          Báo sai định dạng	   Đúng
    Number min/max	  Báo vượt giới hạn	   Đúng
    Pattern	          Báo sai mẫu	       Đúng
    Minlength	      Báo quá ngắn	       Đúng 
Câu A3.
    1.Tại sao <label for="email"> quan trọng cho người dùng screen reader?
     Trả lời:for liên kết với id của input.
             Screen reader sẽ đọc đúng tên ô nhập liệu.
             Người dùng khiếm thị biết cần nhập gì.
             Click vào label cũng focus vào input.
             Nếu không có <label>, screen reader chỉ đọc “edit text”, user không biết ô dùng để làm gì.
             VD:<label for="email">Email</label>
                <input type="email" id="email">
    2. Khi nào dùng <fieldset> + <legend>?
   Dùng để nhóm các input liên quan.
   Ví dụ:
    <fieldset>
    <legend>Giới tính</legend>
    <input type="radio" name="gender"> Nam
    <input type="radio" name="gender"> Nữ
    </fieldset>
    <fieldset>: nhóm các input.
    <legend>: tiêu đề của nhóm.
    Giúp form rõ ràng và screen reader hiểu cấu trúc.
    3.aria-label dùng khi nào?Tại sao KHÔNG nên dùng aria-label khi đã có <label>?
        <button aria-label="Gửi đơn hàng">🛒</button>
        Dùng khi phần tử không có text hiển thị (icon button).
        Giúp screen reader hiểu chức năng.
        Không nên dùng thay <label> vì:
        <label> là semantic HTML chuẩn.
        <label> hỗ trợ accessibility + click focus tốt hơn.
        aria-label chỉ dùng cho trường hợp đặc biệt.
Câu A4.
     1. loading="lazy" trên <img> là gì?
    Ví dụ:
    <img src="iphone.jpg" loading="lazy">
    -loading="lazy" nghĩa là ảnh chỉ được tải khi user cuộn gần tới ảnh.
    -Giúp:
        +tăng tốc độ tải trang
        +giảm băng thông
        +cải thiện hiệu năng website
        +Khi KHÔNG nên dùng:
        +Ảnh đầu trang (hero image)
        +Logo
        +Ảnh quan trọng cần hiển thị ngay.
        2. Tại sao nên có nhiều <source> trong <video>?
            Ví dụ:
            <video controls>
                <source src="video.mp4" type="video/mp4">
                <source src="video.webm" type="video/webm">
            </video>
            -Vì mỗi trình duyệt hỗ trợ format video khác nhau.
            -Nhiều <source> giúp video chạy trên nhiều browser hơn.
            -3 format video phổ biến:
            +MP4
            +WebM
            +OGG
        3. Thuộc tính alt trên <img> dùng để làm gì?
            -Mô tả nội dung ảnh cho screen reader.
            -Hiển thị khi ảnh bị lỗi.
            -Hỗ trợ SEO và accessibility.
            -Ví dụ alt tốt:
            a. Ảnh sản phẩm iPhone 16
                alt="iPhone 16 Pro Max màu Titan Natural"
            b. Ảnh trang trí (decorative)
                alt=""
            c. Ảnh biểu đồ doanh thu Q1/2026
                alt="Biểu đồ doanh thu quý 1 năm 2026 tăng từ 2 tỷ lên 5 tỷ đồng".
Câu A5.
        Cách 1 — Chỉ dùng <img>
            <img src="product.jpg" alt="iPhone">
        Khi dùng:
        -Khi chỉ cần hiển thị ảnh đơn giản.
        -Không cần chú thích hay mô tả thêm.
        *Ví dụ thực tế:
        1. Logo website
        <img src="logo.png" alt="Logo ShopTLU">
        2. Icon giỏ hàng
        <img src="cart.png" alt="Giỏ hàng">
        Cách 2 — Dùng <figure> + <figcaption>
            <figure>
                <img src="product.jpg" alt="iPhone 16 Pro Max 256GB Titan">
                <figcaption>iPhone 16 Pro Max — 25.990.000đ</figcaption>
            </figure>
        Khi dùng:
        -Khi ảnh cần chú thích hoặc mô tả đi kèm.
        -Nội dung caption liên quan trực tiếp đến ảnh.
        *Ví dụ thực tế:
        1. Ảnh sản phẩm có tên và giá
        <figure>
            <img src="iphone16.jpg" alt="iPhone 16 Pro Max">
            <figcaption>iPhone 16 Pro Max — 25.990.000đ</figcaption>
        </figure>
        2. Biểu đồ doanh thu
        <figure>
            <img src="chart.png" alt="Biểu đồ doanh thu quý 1 năm 2026">
            <figcaption>Doanh thu Q1/2026 tăng 30%</figcaption>
        </figure>
Câu C1.
        -Lỗi 1: Dòng 2 — Input "Tên" không có <label for="...">, vi phạm accessibility.
        Sửa:
        <label for="name">Tên:</label>
                <input type="text" id="name" name="name" required>
        -Lỗi 2: Dòng 2 — Input "Tên" thiếu thuộc tính name, dữ liệu sẽ không được gửi khi submit form.
        Sửa:
            <input type="text" id="name" name="name" required>
        -Lỗi 3: Dòng 4 — Input email không có <label>, screen reader khó nhận biết.
        Sửa:
                <input type="email" id="email" name="email" required>
                <input type="email" id="email" name="email" placeholder="Email của bạn">
        -Lỗi 4: Dòng 4 — Input email thiếu required, user có thể submit khi để trống.
        Sửa:
            <input type="email" id="email" name="email" required>
        -Lỗi 5: Dòng 6 — Input password không có <label>, vi phạm accessibility.
        Sửa:
            <label for="password">Mật khẩu:</label>
            <input type="password" id="password" name="password">
        -Lỗi 6: Dòng 6 — Password thiếu validation như minlength, mật khẩu quá ngắn vẫn được nhập.
        Sửa:
            <input type="password" id="password" name="password" minlength="8" required>
        -Lỗi 7: Dòng 9 — Phone dùng type="text" thay vì type="tel", không tối ưu cho mobile và không có validation số điện thoại.
        Sửa:
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required>
        -Lỗi 8: Dòng 15 — "Tôi đồng ý điều khoản" chỉ có <label> nhưng không có checkbox để user chọn.
        Sửa:
            <label>
            <input type="checkbox" required>
            Tôi đồng ý điều khoản
            </label>
Câu C2.
        1. Pattern regex
        CMND/CCCD — đúng 12 chữ số
            pattern="[0-9]{12}"
        Số tài khoản — từ 10 đến 15 chữ số
            pattern="[0-9]{10,15}"
        2. HTML5 validation đã đủ an toàn cho ngân hàng chưa?
        Chưa đủ.
        Vì:
        -HTML5 validation chỉ chạy ở frontend.
        -User có thể tắt validation hoặc gửi request giả bằng DevTools/Postman.
        -Ngân hàng bắt buộc phải validate thêm ở Backend để đảm bảo bảo mật.
        3. Ba validation HTML5 KHÔNG làm được
        -Kiểm tra confirm password có giống password không.
        -Kiểm tra email/username đã tồn tại trong database chưa.
        -Validation logic phức tạp theo điều kiện (ví dụ chọn chuyển khoản thì phải nhập số tài khoản).
        4. Hai rủi ro nếu chỉ validate Frontend
        -Hacker gửi dữ liệu độc hại như SQL Injection hoặc XSS.
        -User bypass validation để gửi dữ liệu sai hoặc gian lận hệ thống.
        ---
