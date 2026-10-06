# KTPM_1
# TÀI LIỆU MÔ TẢ CÁC CHỨC NĂNG CẦN KIỂM THỬ HỆ THỐNG ĐĂNG NHẬP

## 1. Mục đích

Tài liệu này mô tả các chức năng của hệ thống đăng nhập cần được kiểm thử nhằm đảm bảo hệ thống hoạt động đúng theo yêu cầu.

Việc kiểm thử tập trung vào các trường hợp đăng nhập thành công, đăng nhập thất bại, kiểm tra dữ liệu đầu vào, quản lý trạng thái đăng nhập, đăng xuất và bảo vệ các trang yêu cầu người dùng phải đăng nhập.

---

## 2. Thông tin tài khoản kiểm thử

**Tài khoản hợp lệ:**

* Username: `admin`
* Password: `admin123`

Tài khoản trên được sử dụng để kiểm tra các trường hợp đăng nhập thành công và một số trường hợp kiểm thử liên quan.

---

# 3. Các chức năng cần kiểm thử

## 3.1. Chức năng đăng nhập bằng thông tin hợp lệ

**Mô tả:**
Kiểm tra hệ thống có cho phép người dùng đăng nhập khi nhập đúng username và password hay không.

**Dữ liệu kiểm thử:**

* Username: `admin`
* Password: `admin123`

**Kết quả mong đợi:**
Đăng nhập thành công và người dùng được chuyển đến trang chính của hệ thống.

**Test Case liên quan:** TC01

---

## 3.2. Kiểm tra đăng nhập với mật khẩu sai

**Mô tả:**
Kiểm tra hệ thống có từ chối đăng nhập khi username đúng nhưng password không đúng hay không.

**Dữ liệu kiểm thử:**

* Username: `admin`
* Password: `123456`

**Kết quả mong đợi:**
Hệ thống không cho phép đăng nhập và hiển thị thông báo lỗi phù hợp.

**Test Case liên quan:** TC02, TC25

---

## 3.3. Kiểm tra đăng nhập với username sai

**Mô tả:**
Kiểm tra hệ thống khi người dùng nhập username không tồn tại nhưng password đúng.

**Dữ liệu kiểm thử:**

* Username: `user123`
* Password: `admin123`

**Kết quả mong đợi:**
Hệ thống từ chối đăng nhập và hiển thị thông báo lỗi.

**Test Case liên quan:** TC03

---

## 3.4. Kiểm tra bỏ trống dữ liệu

**Mô tả:**
Kiểm tra hệ thống có phát hiện trường hợp người dùng không nhập username hoặc password.

Các trường hợp cần kiểm tra:

* Bỏ trống username.
* Bỏ trống password.
* Bỏ trống cả username và password.

**Kết quả mong đợi:**
Hệ thống không cho phép đăng nhập và hiển thị thông báo yêu cầu nhập dữ liệu.

**Test Case liên quan:** TC04, TC05, TC06

---

## 3.5. Kiểm tra dữ liệu có khoảng trắng

**Mô tả:**
Kiểm tra cách hệ thống xử lý username hoặc password có chứa khoảng trắng.

**Kết quả mong đợi:**
Hệ thống xử lý dữ liệu khoảng trắng đúng theo yêu cầu, không cho phép dữ liệu không hợp lệ đăng nhập.

**Test Case liên quan:** TC07, TC08

---

## 3.6. Kiểm tra ký tự đặc biệt

**Mô tả:**
Kiểm tra hệ thống khi người dùng nhập các ký tự đặc biệt vào username hoặc password.

**Ví dụ:**

* Username: `admin@#$`
* Password: `@#$%`

**Kết quả mong đợi:**
Hệ thống kiểm tra dữ liệu đầu vào và từ chối thông tin đăng nhập không hợp lệ.

**Test Case liên quan:** TC11, TC12

---

## 3.7. Kiểm tra giới hạn độ dài dữ liệu

**Mô tả:**
Kiểm tra hệ thống khi username hoặc password vượt quá giới hạn độ dài cho phép.

**Kết quả mong đợi:**
Hệ thống không cho phép nhập hoặc không cho phép đăng nhập với dữ liệu vượt quá giới hạn quy định.

**Test Case liên quan:** TC13, TC14

---

## 3.8. Kiểm tra phân biệt chữ hoa và chữ thường

**Mô tả:**
Kiểm tra hệ thống có phân biệt chữ hoa và chữ thường trong password hay không.

**Dữ liệu kiểm thử:**

* Username: `admin`
* Password: `ADMIN123`

**Kết quả mong đợi:**
Hệ thống từ chối đăng nhập vì password không đúng.

**Test Case liên quan:** TC15

---

## 3.9. Kiểm tra đăng nhập lại sau khi nhập sai

**Mô tả:**
Kiểm tra người dùng có thể tiếp tục đăng nhập sau khi nhập sai thông tin lần đầu.

**Quy trình:**

1. Nhập username đúng.
2. Nhập password sai.
3. Hệ thống thông báo lỗi.
4. Nhập lại password đúng.

**Kết quả mong đợi:**
Lần đầu đăng nhập thất bại nhưng lần thứ hai phải đăng nhập thành công khi thông tin chính xác.

**Test Case liên quan:** TC16

---

## 3.10. Kiểm tra chuyển hướng sau khi đăng nhập

**Mô tả:**
Kiểm tra hệ thống có chuyển người dùng đến đúng trang sau khi đăng nhập thành công.

**Kết quả mong đợi:**
Sau khi đăng nhập thành công, người dùng được chuyển đến trang chính/trang Home.

**Test Case liên quan:** TC17

---

## 3.11. Chức năng đăng xuất

**Mô tả:**
Kiểm tra người dùng có thể đăng xuất khỏi hệ thống.

**Quy trình:**

1. Đăng nhập bằng tài khoản hợp lệ.
2. Truy cập trang chính.
3. Nhấn nút Logout/Đăng xuất.

**Kết quả mong đợi:**
Người dùng được đăng xuất và không còn quyền truy cập các trang yêu cầu đăng nhập.

**Test Case liên quan:** TC18

---

## 3.12. Kiểm tra đăng nhập lại sau khi đăng xuất

**Mô tả:**
Kiểm tra người dùng có thể đăng nhập lại sau khi đã đăng xuất.

**Quy trình:**

1. Đăng nhập.
2. Đăng xuất.
3. Nhập lại username và password hợp lệ.

**Kết quả mong đợi:**
Hệ thống cho phép đăng nhập lại thành công.

**Test Case liên quan:** TC19

---

## 3.13. Kiểm tra trang được bảo vệ

**Mô tả:**
Kiểm tra người dùng chưa đăng nhập có thể truy cập trực tiếp vào trang yêu cầu đăng nhập hay không.

**Kết quả mong đợi:**
Người dùng chưa đăng nhập không được phép truy cập trang bảo vệ và phải được chuyển về trang đăng nhập.

**Test Case liên quan:** TC20

---

## 3.14. Kiểm tra nút Back sau khi đăng xuất

**Mô tả:**
Kiểm tra người dùng có thể sử dụng nút Back của trình duyệt để quay lại trang riêng tư sau khi đã đăng xuất hay không.

**Kết quả mong đợi:**
Người dùng không được phép truy cập lại nội dung yêu cầu đăng nhập.

**Test Case liên quan:** TC21

---

## 3.15. Kiểm tra trạng thái đăng nhập khi Refresh

**Mô tả:**
Kiểm tra trạng thái đăng nhập của người dùng sau khi tải lại trang.

**Quy trình:**

1. Đăng nhập thành công.
2. Đang ở trang chính.
3. Nhấn Refresh/F5.

**Kết quả mong đợi:**
Hệ thống duy trì trạng thái đăng nhập theo thiết kế và người dùng vẫn có thể truy cập trang yêu cầu đăng nhập.

**Test Case liên quan:** TC22

---

## 3.16. Kiểm tra Refresh sau khi đăng nhập thất bại

**Mô tả:**
Kiểm tra hệ thống không tạo trạng thái đăng nhập sau khi người dùng nhập sai thông tin.

**Quy trình:**

1. Nhập username/password sai.
2. Hệ thống thông báo đăng nhập thất bại.
3. Nhấn Refresh.

**Kết quả mong đợi:**
Người dùng vẫn ở trạng thái chưa đăng nhập.

**Test Case liên quan:** TC23

---

## 3.17. Kiểm tra nhập sai nhiều lần

**Mô tả:**
Kiểm tra hệ thống xử lý khi người dùng liên tục nhập thông tin đăng nhập không chính xác.

**Kết quả mong đợi:**
Hệ thống không cho phép đăng nhập với thông tin sai và vẫn hoạt động bình thường.

**Test Case liên quan:** TC10, TC24

---

# 4. Bảng tổng hợp chức năng và Test Case

| STT | Chức năng cần kiểm thử             | Test Case  |
| --- | ---------------------------------- | ---------- |
| 1   | Đăng nhập hợp lệ                   | TC01       |
| 2   | Mật khẩu sai                       | TC02, TC25 |
| 3   | Username sai                       | TC03       |
| 4   | Bỏ trống username                  | TC04       |
| 5   | Bỏ trống password                  | TC05       |
| 6   | Bỏ trống cả hai trường             | TC06       |
| 7   | Username có khoảng trắng           | TC07       |
| 8   | Password có khoảng trắng           | TC08       |
| 9   | Username và password sai           | TC09       |
| 10  | Nhập sai nhiều lần                 | TC10, TC24 |
| 11  | Ký tự đặc biệt                     | TC11, TC12 |
| 12  | Độ dài username/password           | TC13, TC14 |
| 13  | Phân biệt chữ hoa/chữ thường       | TC15       |
| 14  | Sai rồi nhập lại đúng              | TC16       |
| 15  | Chuyển hướng sau đăng nhập         | TC17       |
| 16  | Đăng xuất                          | TC18       |
| 17  | Đăng nhập lại sau đăng xuất        | TC19       |
| 18  | Bảo vệ trang riêng tư              | TC20       |
| 19  | Back sau khi đăng xuất             | TC21       |
| 20  | Refresh sau khi đăng nhập          | TC22       |
| 21  | Refresh sau khi đăng nhập thất bại | TC23       |

---

# 5. Tiêu chí PASS và FAIL

## 5.1. Tiêu chí PASS

Test Case được đánh giá là **PASS** khi:

* Hệ thống hoạt động đúng với yêu cầu.
* Dữ liệu hợp lệ được chấp nhận.
* Dữ liệu không hợp lệ bị từ chối.
* Thông báo lỗi được hiển thị phù hợp.
* Người dùng được chuyển hướng đúng.
* Trạng thái đăng nhập được quản lý chính xác.
* Người dùng không thể truy cập trái phép vào trang được bảo vệ.

## 5.2. Tiêu chí FAIL

Test Case được đánh giá là **FAIL** khi:

* Hệ thống cho phép đăng nhập bằng thông tin sai.
* Hệ thống từ chối thông tin đăng nhập hợp lệ.
* Không hiển thị thông báo lỗi khi dữ liệu không hợp lệ.
* Chuyển hướng sai trang.
* Người dùng chưa đăng nhập vẫn truy cập được trang bảo vệ.
* Sau khi đăng xuất, người dùng vẫn truy cập được nội dung yêu cầu đăng nhập.

---

# 6. Regression Testing

**Regression Testing** là quá trình kiểm thử lại các chức năng đã hoạt động sau khi hệ thống được sửa đổi hoặc cập nhật, nhằm đảm bảo việc sửa lỗi không làm phát sinh lỗi mới ở các chức năng khác.

Trong hệ thống này, Regression Testing được thực hiện đối với các chức năng đăng nhập, đăng xuất, bảo vệ trang và quản lý trạng thái đăng nhập.

**Ví dụ:**

TC02 phát hiện lỗi hệ thống cho phép đăng nhập bằng password sai. Sau khi sửa lỗi, cần kiểm thử lại TC02 và các chức năng liên quan để đảm bảo việc sửa lỗi không ảnh hưởng đến đăng nhập hợp lệ.

---

# 7. Re-testing

**Re-testing** là quá trình thực hiện lại Test Case đã bị FAIL sau khi lỗi đã được sửa để xác nhận lỗi đã được khắc phục.

Trong hệ thống này:

* **TC02:** Kiểm tra đăng nhập bằng password sai.
* Ban đầu TC02 bị FAIL vì hệ thống cho phép đăng nhập bằng password sai.
* Sau khi sửa lỗi, thực hiện lại TC02.
* **TC25:** Kiểm tra lại lỗi password sai sau khi đã sửa.

**Kết quả mong đợi:**
Hệ thống phải từ chối password sai và TC25 được đánh giá là PASS.

---

# 8. Quy trình thực hiện kiểm thử

Quy trình kiểm thử hệ thống đăng nhập được thực hiện theo các bước:

**Bước 1:** Khởi động hệ thống.

**Bước 2:** Truy cập trang đăng nhập.

**Bước 3:** Nhập dữ liệu theo từng Test Case.

**Bước 4:** Thực hiện thao tác đăng nhập hoặc thao tác được yêu cầu.

**Bước 5:** Quan sát kết quả thực tế.

**Bước 6:** So sánh kết quả thực tế với kết quả mong đợi.

**Bước 7:** Đánh dấu Test Case là PASS hoặc FAIL.

**Bước 8:** Nếu phát hiện lỗi, ghi nhận lỗi để sửa.

**Bước 9:** Sau khi lỗi được sửa, thực hiện Re-testing.

**Bước 10:** Thực hiện Regression Testing để đảm bảo các chức năng khác vẫn hoạt động bình thường.

---

# 9. Kết luận

Tài liệu đã mô tả các chức năng chính cần kiểm thử của hệ thống đăng nhập, bao gồm đăng nhập thành công, đăng nhập thất bại, kiểm tra dữ liệu đầu vào, đăng xuất, bảo vệ trang, duy trì trạng thái đăng nhập và xử lý các trường hợp bất thường.

Việc xây dựng các Test Case và thực hiện Regression Testing, Re-testing giúp đảm bảo hệ thống hoạt động ổn định, hạn chế lỗi và đáp ứng đúng yêu cầu của người sử dụng.
