# Bài Giảng: Flowchart (Lưu đồ)

## 1. Thông tin bài học
- Môn học: Programming Fundamental
- Chủ đề: Flowchart
- Đối tượng: Người mới bắt đầu

## 2. Mục tiêu bài học
Sau bài này, người học có thể:
- Hiểu Flowchart là gì và vì sao cần dùng.
- Nhận biết các ký hiệu Flowchart cơ bản.
- Vẽ được lưu đồ cho một bài toán đơn giản.
- Chuyển từ Flowchart sang mã giả (pseudocode).

## 3. Khởi động (5 phút)
### Câu hỏi mở
- Khi giải một bài toán lập trình, bạn thường bắt đầu từ đâu?
- Nếu chưa viết code ngay, ta có thể dùng cách nào để mô tả luồng xử lý?

### Dẫn nhập
Flowchart là cách trực quan để biểu diễn các bước giải quyết vấn đề trước khi viết code.

## 4. Nội dung chính

### 4.1. Flowchart là gì?
Flowchart (lưu đồ) là sơ đồ dùng các ký hiệu tiêu chuẩn để mô tả thứ tự các bước xử lý của một thuật toán.

### 4.2. Khi nào nên dùng Flowchart?
- Trước khi viết chương trình.
- Khi cần giải thích thuật toán cho người khác.
- Khi cần rà soát logic để giảm lỗi.

### 4.3. Các ký hiệu cơ bản
| Ký hiệu | Tên | Ý nghĩa |
|---|---|---|
| Hình bầu dục | Start/End | Điểm bắt đầu hoặc kết thúc |
| Hình chữ nhật | Process | Bước xử lý, tính toán |
| Hình bình hành | Input/Output | Nhập hoặc xuất dữ liệu |
| Hình thoi | Decision | Rẽ nhánh điều kiện Đúng/Sai |
| Mũi tên | Flow line | Hướng đi của luồng xử lý |

## 5. Quy trình dạy theo từng bước

### Bước 1: Phân tích đề bài
- Xác định Input là gì.
- Xác định Output cần gì.
- Liệt kê các bước xử lý chính.

### Bước 2: Vẽ khung lưu đồ
- Đặt Start ở trên cùng.
- Sắp xếp các Process theo thứ tự.
- Kết thúc bằng End.

### Bước 3: Thêm điều kiện
- Đặt Decision tại vị trí cần rẽ nhánh.
- Ghi rõ nhánh Đúng/Sai.

### Bước 4: Kiểm tra logic
- Lần theo mũi tên từ Start đến End.
- Kiểm tra có bước nào thiếu hoặc vòng lặp vô hạn không.

## 6. Ví dụ minh họa

### Ví dụ 1: Kiểm tra số chẵn/lẻ
#### Đề bài
Nhập số nguyên n, cho biết n là số chẵn hay lẻ.

#### Phân tích nhanh
- Input: n
- Output: Thông báo Chan hoặc Le
- Điều kiện: n mod 2 == 0

#### Mã giả
1. Bắt đầu
2. Nhập n
3. Nếu n mod 2 == 0 thì in Chan
4. Ngược lại in Le
5. Kết thúc

### Ví dụ 2: Tính điểm trung bình và xếp loại
#### Đề bài
Nhập điểm Toán, Lý, Hóa. Tính trung bình và xếp loại:
- >= 8: Gioi
- >= 6.5: Kha
- >= 5: Trung binh
- < 5: Yeu

#### Gợi ý lưu đồ
- Start
- Input Toan, Ly, Hoa
- Process: Tinh DTB = (Toan + Ly + Hoa) / 3
- Decision theo từng mốc điểm
- Output xep loai
- End

## 7. Hoạt động trên lớp

### Hoạt động 1 (cá nhân, 7 phút)
Vẽ Flowchart cho bài toán: Nhập 2 số a, b. In ra số lớn hơn.

### Hoạt động 2 (nhóm, 10 phút)
Mỗi nhóm chọn 1 bài:
- Tính tổng từ 1 đến n
- Kiểm tra năm nhuận
- Tính tiền điện theo bậc

Yêu cầu:
- Viết Input/Output
- Vẽ Flowchart hoàn chỉnh
- Trình bày trong 2 phút

## 8. Lỗi thường gặp và cách sửa
- Thiếu Start hoặc End: Luôn kiểm tra đủ điểm đầu/cuối.
- Nhánh Decision không ghi rõ Đúng/Sai: Luôn gắn nhãn 2 nhánh.
- Mũi tên đi ngược hoặc chồng chéo: Sắp xếp lại vị trí khối.
- Quá nhiều chi tiết trong một khối: Tách nhỏ thành nhiều Process.

## 10. Tổng kết
- Flowchart giúp nhìn rõ tư duy thuật toán.
- Nắm chắc 5 ký hiệu cơ bản là đủ để bắt đầu.
- Cần luyện từ bài đơn giản đến bài có điều kiện và vòng lặp.

## 11. Bài tập về nhà
1. Vẽ Flowchart cho bài toán tính giai thừa n.
2. Vẽ Flowchart giải phương trình bậc nhất ax + b = 0.
3. Vẽ Flowchart tìm số lớn nhất trong 3 số a, b, c.


