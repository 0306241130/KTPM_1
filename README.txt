# Login Test System

## Chạy chương trình

Không cần Node.js hay PHP.

1. Giải nén thư mục.
2. Mở file `index.html` bằng trình duyệt.
3. Dùng tài khoản:
   - Username: `admin`
   - Password: `admin123`

## Một số test case

TC01:
admin / admin123 -> đăng nhập thành công.

TC02:
admin / 123456 -> không được đăng nhập.

TC03:
user123 / admin123 -> không được đăng nhập.

TC04:
Username rỗng -> báo lỗi Username.

TC05:
Password rỗng -> báo lỗi Password.

TC06:
Cả hai rỗng -> báo lỗi dữ liệu.

TC17:
Đăng nhập đúng -> chuyển trang chính.

TC18:
Đăng nhập -> Logout -> quay về Login.

TC20:
Chưa đăng nhập -> không được truy cập trang bảo mật.

TC22:
Login -> Refresh -> vẫn giữ trạng thái đăng nhập bằng sessionStorage.

TC25:
Dùng admin / 123456 để Re-testing lỗi Password. Kết quả mong đợi: PASS vì hệ thống vẫn từ chối Password sai.

## Lưu ý

Đây là website frontend phục vụ học tập và kiểm thử. Dữ liệu đăng nhập được kiểm tra bằng JavaScript, không phải hệ thống authentication thực tế có backend/database.
