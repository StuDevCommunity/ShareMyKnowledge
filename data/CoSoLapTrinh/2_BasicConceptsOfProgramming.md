# Bài giảng: Basic Concepts of Programming

## 1. Thông tin bài học
- Môn học: Programming Fundamental
- Chủ đề: Basic Concepts of Programming
- Đối tượng: Người mới bắt đầu

## 2. Mục tiêu bài học
Sau bài này, người học có thể:
- Hiểu các khái niệm nền tảng trong lập trình.
- Viết được chương trình C++ đơn giản có nhập/xuất, rẽ nhánh, lặp và hàm.
- Phân biệt được biến, hằng, kiểu dữ liệu và phạm vi biến.
- Tránh các lỗi logic cơ bản khi mới học lập trình.

## 3. Các khái niệm cốt lõi

### 3.1. Comment (chú thích)
Comment là phần ghi chú trong mã nguồn, **không được thực thi** khi chạy chương trình.

Trong C++:
- Comment 1 dòng: `// noi dung`
- Comment nhiều dòng: `/* noi dung */`

Lưu ý: Comment nên ngắn gọn, giải thích "vì sao", không lặp lại điều code đã quá rõ.

Ví dụ:
```cpp
int age = 18; // tuoi cua sinh vien

/*
Tinh tong 2 so a va b
de in ra man hinh
*/
int sum = a + b;
```

### 3.2. Biến và hằng
**Biến (variable)** là vùng nhớ có tên, dùng để lưu dữ liệu có thể thay đổi trong quá trình chạy.

Ví dụ khai báo:
```cpp
int age = 18;
double gpa = 3.5;
```

**Hằng (constant)** là giá trị không đổi sau khi khởi tạo.
```cpp
const double PI = 3.14159;
```

Quy tắc đặt tên:
- Không bắt đầu bằng chữ số.
- Không dùng từ khóa (vd: `if`, `while`, `class`).
- Nên đặt tên có nghĩa: `totalScore`, `studentName`.

### 3.3. Kiểu dữ liệu (Data Type)
Kiểu dữ liệu cho compiler biết dữ liệu được lưu theo định dạng nào và phép toán nào hợp lệ.

Một số kiểu dữ liệu C++ phổ biến:

| Kiểu | Ý nghĩa | Ví dụ |
|---|---|---|
| `int` | Số nguyên | `-3, 0, 25` |
| `long long` | Số nguyên lớn | `10000000000` |
| `float`, `double` | Số thực | `3.14, -0.5` |
| `char` | 1 ký tự | `'A'`, `'9'` |
| `bool` | Đúng/Sai | `true`, `false` |
| `string` | Chuỗi ký tự | `"Hello"` |

Phân loại thường gặp:
- Built-in: `int`, `double`, `char`, `bool`, ...
- User-defined: `struct`, `class`, `enum`, ...
- Compound/derived: mảng, con trỏ, tham chiếu, ...

Ví dụ khai báo nhiều kiểu dữ liệu:
```cpp
int year = 2026;
double temperature = 36.5;
char grade = 'A';
bool isPassed = true;
string school = "ABC";
```

### 3.4. Toán tử và biểu thức
#### a) Toán tử số học
- `+`, `-`, `*`, `/`, `%`
- `/` là chia số thực nếu có toán hạng thực; là chia nguyên nếu cả hai toán hạng là số nguyên.
- `%` chỉ dùng cho số nguyên (lấy phần dư).

#### b) Toán tử gán
- `=`, `+=`, `-=`, `*=`, `/=`, `%=`

#### c) Toán tử so sánh
- `==`, `!=`, `>`, `<`, `>=`, `<=`

#### d) Toán tử logic
- `&&` (và), `||` (hoặc), `!` (phủ định)

#### e) Toán tử tăng/giảm
- `++x` (prefix): tăng trước, rồi trả về giá trị mới.
- `x++` (postfix): trả về giá trị cũ, rồi mới tăng.

Ví dụ:
```cpp
int x = 10;
int y = ++x; // x = 11, y = 11
int z = x++; // z = 11, x = 12
```

### 3.5. Ép kiểu dữ liệu (Type Casting)
Ép kiểu giúp chuyển dữ liệu từ kiểu này sang kiểu khác.

```cpp
int a = 5, b = 2; 
double c = static_cast<double>(a) / b; // c = 2.5
```

Nếu không ép kiểu trong ví dụ trên, `a / b` sẽ là chia nguyên và kết quả là `2`.

### 3.6. Nhập/Xuất dữ liệu cơ bản
Trong C++:
- Nhập: `cin`
- Xuất: `cout`

```cpp
int n;
cout << "Nhap n: ";
cin >> n;
cout << "Gia tri vua nhap: " << n << '\n';
```

## 4. Cấu trúc điều khiển chương trình

### 4.1. Tuần tự (Sequence)
Lệnh được chạy từ trên xuống dưới theo thứ tự viết trong chương trình.

Ví dụ:
```cpp
int a = 2;
int b = 3;
int c = a + b;
cout << c << '\n'; // 5
```

### 4.2. Rẽ nhánh (Selection)
#### if / else if / else
```cpp
if (score >= 8) {
    cout << "Gioi";
} else if (score >= 6.5) {
    cout << "Kha";
} else {
    cout << "Can co gang";
}
```

#### switch
Phù hợp khi so sánh nhiều trường hợp của **một biến** (thường là số nguyên, char, enum).

Ví dụ:
```cpp
int day = 3;
switch (day) {
    case 2:
        cout << "Thu Hai";
        break;
    case 3:
        cout << "Thu Ba";
        break;
    default:
        cout << "Ngay khac";
}
```

### 4.3. Vòng lặp (Iteration)
- `for`: biết trước số lần lặp.
- `while`: lặp khi điều kiện còn đúng.
- `do...while`: chạy ít nhất 1 lần rồi mới kiểm tra điều kiện.

Ví dụ:
```cpp
// for: in 1 -> 3
for (int i = 1; i <= 3; i++) {
    cout << i << ' ';
}

// while: tinh tong 1 -> n
int n = 5, i = 1, sum = 0;
while (i <= n) {
    sum += i;
    i++;
}

// do...while: nhap den khi hop le
int x;
do {
    cout << "Nhap x > 0: ";
    cin >> x;
} while (x <= 0);
```

Từ khóa liên quan:
- `break`: thoát vòng lặp ngay.
- `continue`: bỏ qua phần còn lại của lần lặp hiện tại.

## 5. Hàm (Function) và phạm vi biến (Scope)

### 5.1. Hàm là gì?
Hàm là khối lệnh thực hiện một nhiệm vụ cụ thể, giúp chia nhỏ bài toán và tái sử dụng code.

```cpp
int sum(int a, int b) {
    return a + b;
}
```

### 5.2. Tham số và giá trị trả về
- **Tham số (parameter)**: dữ liệu đầu vào của hàm.
- **Giá trị trả về (return value)**: kết quả hàm trả lại cho nơi gọi.
- Hàm không trả về dùng kiểu `void`.

Ví dụ:
```cpp
double average(double a, double b, double c) {
    return (a + b + c) / 3.0;
}

void printGreeting(string name) {
    cout << "Xin chao, " << name << '\n';
}
```

### 5.3. Phạm vi biến
- Biến cục bộ (local): chỉ dùng được trong khối lệnh/hàm khai báo nó.
- Biến toàn cục (global): khai báo ngoài mọi hàm, dùng được ở nhiều nơi (cần dùng cẩn thận).

Ví dụ:
```cpp
int globalCount = 0; // bien toan cuc

void increase() {
    int localStep = 1; // bien cuc bo
    globalCount += localStep;
}
```

## 6. Cấu trúc dữ liệu cơ bản

### 6.1. Mảng (Array)
Mảng lưu nhiều phần tử cùng kiểu dữ liệu, truy cập qua chỉ số (index từ 0).

```cpp
int a[5] = {1, 2, 3, 4, 5};
cout << a[0]; // 1
```

### 6.2. Chuỗi (String)
Trong C++, nên dùng `string` để thao tác chuỗi dễ hơn mảng ký tự.

```cpp
string name = "An";
cout << name.length(); // 2
```

## 7. Lỗi thường gặp khi mới học
- Nhầm `=` (gán) với `==` (so sánh).
- Chia nguyên ngoài ý muốn (`5 / 2 = 2`).
- Quên khởi tạo biến trước khi dùng.
- Lỗi lệch chỉ số mảng (truy cập ngoài phạm vi).
- Điều kiện vòng lặp sai dẫn đến lặp vô hạn.

## 8. Ví dụ tổng hợp
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Nhap n: ";
    cin >> n;

    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }

    if (n > 0) {
        cout << "Tong tu 1 den n = " << sum << '\n';
    } else {
        cout << "n can lon hon 0\n";
    }

    return 0;
}
```

## 9. Tổng kết
- Nắm chắc biến, kiểu dữ liệu, toán tử và ép kiểu là nền tảng quan trọng.
- Rẽ nhánh, vòng lặp, hàm là bộ khung của hầu hết chương trình.
- Khi gặp lỗi, ưu tiên kiểm tra kiểu dữ liệu, điều kiện và chỉ số.
