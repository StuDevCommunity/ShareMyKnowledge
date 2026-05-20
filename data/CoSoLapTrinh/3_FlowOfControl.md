# Bài giảng: Flow of Control trong C++ (Cấu trúc rẽ nhánh và vòng lặp)

## 1. Thông tin bài học
- Môn học: Programming Fundamental
- Chủ đề: Flow of Control trong C++
- Đối tượng: Người mới bắt đầu

## 2. Mục tiêu bài học
Sau bài học, người học có thể:
- Hiểu luồng thực thi của chương trình là gì.
- Sử dụng thành thạo các cấu trúc rẽ nhánh: `if`, `if...else`, `else if`, `switch`.
- Sử dụng thành thạo các cấu trúc lặp: `for`, `while`, `do...while`.
- Kết hợp rẽ nhánh và lặp để giải bài toán thực tế.
- Nhận diện và tránh các lỗi logic thường gặp.

## 3. Kiến thức nền cần có
- Biến, kiểu dữ liệu cơ bản (`int`, `double`, `char`, `bool`, `string`).
- Toán tử so sánh (`==`, `!=`, `>`, `<`, `>=`, `<=`).
- Toán tử logic (`&&`, `||`, `!`).
- Nhập/xuất dữ liệu bằng `cin`, `cout`.

## 4. Flow of Control là gì?
Flow of Control (luồng điều khiển) là **thứ tự chương trình thực thi các câu lệnh**.

Mặc định, chương trình chạy theo **tuần tự từ trên xuống dưới**.  
Khi có điều kiện hoặc vòng lặp, chương trình có thể:
- Rẽ sang nhánh khác.
- Lặp lại một nhóm lệnh nhiều lần.

---

## 5. Cấu trúc rẽ nhánh (Selection)

### 5.1. `if` (một nhánh)
Dùng khi chỉ cần xử lý nếu điều kiện đúng.

**Cú pháp:**
```cpp
if (dieu_kien) {
    // khoi lenh
}
```

**Ví dụ:**
```cpp
#include <iostream>
using namespace std;

int main() {
    int age;
    cin >> age;

    if (age >= 18) {
        cout << "Ban da du tuoi bau cu.\n";
    }
    return 0;
}
```

### 5.2. `if...else` (hai nhánh)
Dùng khi có 2 trường hợp: đúng và sai.

**Cú pháp:**
```cpp
if (dieu_kien) {
    // dung
} else {
    // sai
}
```

**Ví dụ: kiểm tra số chẵn/lẻ**
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    if (n % 2 == 0) {
        cout << "So chan\n";
    } else {
        cout << "So le\n";
    }
    return 0;
}
```

### 5.3. `else if` (nhiều nhánh)
Dùng khi có nhiều điều kiện loại trừ nhau.

**Ví dụ: xếp loại điểm**
```cpp
#include <iostream>
using namespace std;

int main() {
    double score;
    cin >> score;

    if (score >= 8.5) {
        cout << "Gioi\n";
    } else if (score >= 7.0) {
        cout << "Kha\n";
    } else if (score >= 5.0) {
        cout << "Trung binh\n";
    } else {
        cout << "Yeu\n";
    }
    return 0;
}
```

### 5.4. `if` lồng nhau (nested if)
Khi điều kiện bên trong phụ thuộc điều kiện bên ngoài.

**Ví dụ: xét tam giác hợp lệ và tam giác vuông**
```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;

    if (a + b > c && a + c > b && b + c > a) {
        if (a * a + b * b == c * c ||
            a * a + c * c == b * b ||
            b * b + c * c == a * a) {
            cout << "Tam giac vuong\n";
        } else {
            cout << "Tam giac thuong\n";
        }
    } else {
        cout << "Khong phai tam giac\n";
    }
    return 0;
}
```

### 5.5. `switch...case`
Phù hợp khi kiểm tra **nhiều giá trị cụ thể** của cùng một biểu thức.

**Cú pháp:**
```cpp
switch (bieu_thuc) {
    case gia_tri_1:
        // xu ly
        break;
    case gia_tri_2:
        // xu ly
        break;
    default:
        // xu ly mac dinh
}
```

**Ví dụ: in thứ trong tuần**
```cpp
#include <iostream>
using namespace std;

int main() {
    int day;
    cin >> day;

    switch (day) {
        case 2: cout << "Thu Hai\n"; break;
        case 3: cout << "Thu Ba\n"; break;
        case 4: cout << "Thu Tu\n"; break;
        case 5: cout << "Thu Nam\n"; break;
        case 6: cout << "Thu Sau\n"; break;
        case 7: cout << "Thu Bay\n"; break;
        case 8: cout << "Chu Nhat\n"; break;
        default: cout << "Khong hop le\n";
    }
    return 0;
}
```

Lưu ý quan trọng:
- Nếu quên `break`, chương trình có thể chạy tiếp sang `case` bên dưới (fall-through).
- `switch` không thay thế hoàn toàn `if`; nó phù hợp nhất với giá trị rời rạc.

---

## 6. Cấu trúc vòng lặp (Iteration)

### 6.1. `for`
Phù hợp khi biết trước số lần lặp.

**Cú pháp:**
```cpp
for (khoi_tao; dieu_kien; cap_nhat) {
    // khoi lenh lap
}
```

**Ví dụ: tính tổng từ 1 đến n**
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    long long sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }

    cout << "Tong = " << sum << '\n';
    return 0;
}
```

### 6.2. `while`
Phù hợp khi **chưa biết trước** số lần lặp, lặp đến khi điều kiện sai.

**Ví dụ: đếm số chữ số của n**
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    if (n < 0) n = -n;

    if (n == 0) {
        cout << 1 << '\n';
        return 0;
    }

    int count = 0;
    while (n > 0) {
        count++;
        n /= 10;
    }
    cout << count << '\n';
    return 0;
}
```

### 6.3. `do...while`
Khối lệnh chạy ít nhất 1 lần, sau đó mới kiểm tra điều kiện.

**Ví dụ: nhập số dương**
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    do {
        cout << "Nhap n > 0: ";
        cin >> n;
    } while (n <= 0);

    cout << "Ban da nhap: " << n << '\n';
    return 0;
}
```

### 6.4. Vòng lặp lồng nhau
Một vòng lặp đặt bên trong vòng lặp khác.

**Ví dụ: in bảng cửu chương 1-5**
```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        cout << "Bang " << i << ":\n";
        for (int j = 1; j <= 10; j++) {
            cout << i << " x " << j << " = " << i * j << '\n';
        }
        cout << '\n';
    }
    return 0;
}
```

### 6.5. `break` và `continue` trong vòng lặp
- `break`: thoát ngay khỏi vòng lặp hiện tại.
- `continue`: bỏ qua phần còn lại của vòng lặp hiện tại, chuyển sang lần lặp kế tiếp.

**Ví dụ:**
```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 10; i++) {
        if (i == 8) break;        // dung tai i = 8
        if (i % 2 == 0) continue; // bo qua so chan
        cout << i << ' ';         // 1 3 5 7
    }
    return 0;
}
```

---

## 7. Kết hợp rẽ nhánh và vòng lặp

### Ví dụ: menu đơn giản
```cpp
#include <iostream>
using namespace std;

int main() {
    int choice;
    do {
        cout << "\n===== MENU =====\n";
        cout << "1. Cong 2 so\n";
        cout << "2. Kiem tra chan/le\n";
        cout << "0. Thoat\n";
        cout << "Chon: ";
        cin >> choice;

        if (choice == 1) {
            int a, b;
            cin >> a >> b;
            cout << "Tong = " << a + b << '\n';
        } else if (choice == 2) {
            int n;
            cin >> n;
            cout << (n % 2 == 0 ? "Chan\n" : "Le\n");
        } else if (choice != 0) {
            cout << "Lua chon khong hop le\n";
        }
    } while (choice != 0);

    return 0;
}
```

---

## 8. So sánh nhanh: dùng cái nào khi nào?

| Tình huống | Cấu trúc nên dùng |
|---|---|
| Chỉ cần kiểm tra 1 điều kiện | `if` |
| Có 2 nhánh đúng/sai | `if...else` |
| Nhiều mức điều kiện theo khoảng | `else if` |
| Nhiều giá trị rời rạc của cùng biểu thức | `switch...case` |
| Biết trước số lần lặp | `for` |
| Chưa biết trước số lần lặp | `while` |
| Cần chạy ít nhất 1 lần | `do...while` |

---

## 9. Lỗi thường gặp và cách tránh
1. **Nhầm `=` với `==` trong điều kiện**  
   - Sai: `if (x = 5)`  
   - Đúng: `if (x == 5)`

2. **Quên cập nhật biến trong vòng lặp `while`**  
   - Dễ gây lặp vô hạn.

3. **Quên `break` trong `switch`**  
   - Dễ chạy sai nhánh do fall-through.

4. **Lỗi off-by-one**  
   - Ví dụ `i < n` và `i <= n` cho kết quả khác nhau.

5. **Điều kiện quá phức tạp, khó đọc**  
   - Tách điều kiện thành biến `bool` trung gian.

---

## 10. Bài tập luyện tập

### Bài 1: In các số từ 1 đến n chia hết cho 3
Nhập `n`, in các số từ `1` đến `n` chia hết cho `3`.

#### Lời giải tham khảo
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Nhap n: ";
    cin >> n;
    
    cout << "Cac so tu 1 den " << n << " chia het cho 3:\n";
    for (int i = 1; i <= n; i++) {
        if (i % 3 == 0) {
            cout << i << " ";
        }
    }
    cout << '\n';
    
    return 0;
}
```

**Input/Output:**
```
Nhap n: 15
Cac so tu 1 den 15 chia het cho 3:
3 6 9 12 15
```

---

### Bài 2: Kiểm tra số nguyên tố
Nhập `n`, kiểm tra `n` có phải số nguyên tố hay không.

#### Lời giải tham khảo
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Nhap n: ";
    cin >> n;
    
    if (n < 2) {
        cout << n << " khong phai so nguyen to\n";
        return 0;
    }
    
    bool isPrime = true;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        cout << n << " la so nguyen to\n";
    } else {
        cout << n << " khong phai so nguyen to\n";
    }
    
    return 0;
}
```

**Input/Output:**
```
Nhap n: 17
17 la so nguyen to

---

Nhap n: 12
12 khong phai so nguyen to
```

---

### Bài 3: Máy tính mini với menu
Viết chương trình máy tính mini với menu:
- Cộng, trừ, nhân, chia 2 số.
- Chọn phép tính bằng `switch`.
- Cho phép chạy lại bằng `do...while`.

#### Lời giải tham khảo
```cpp
#include <iostream>
using namespace std;

int main() {
    int choice;
    double a, b;
    
    do {
        cout << "\n===== MAY TINH MINI =====\n";
        cout << "1. Cong\n";
        cout << "2. Tru\n";
        cout << "3. Nhan\n";
        cout << "4. Chia\n";
        cout << "0. Thoat\n";
        cout << "Chon: ";
        cin >> choice;
        
        if (choice >= 1 && choice <= 4) {
            cout << "Nhap a va b: ";
            cin >> a >> b;
            
            switch (choice) {
                case 1:
                    cout << "Ket qua: " << a + b << '\n';
                    break;
                case 2:
                    cout << "Ket qua: " << a - b << '\n';
                    break;
                case 3:
                    cout << "Ket qua: " << a * b << '\n';
                    break;
                case 4:
                    if (b != 0) {
                        cout << "Ket qua: " << a / b << '\n';
                    } else {
                        cout << "Loi: Khong chia duoc cho 0\n";
                    }
                    break;
            }
        } else if (choice != 0) {
            cout << "Lua chon khong hop le\n";
        }
    } while (choice != 0);
    
    return 0;
}
```

**Input/Output:**
```
===== MAY TINH MINI =====
1. Cong
2. Tru
3. Nhan
4. Chia
0. Thoat
Chon: 1
Nhap a va b: 5 3
Ket qua: 8

Chon: 0
```

---

### Bài 4: In tam giác sao vuông
In tam giác sao vuông có chiều cao `h`.

#### Lời giải tham khảo
```cpp
#include <iostream>
using namespace std;

int main() {
    int h;
    cout << "Nhap chieu cao: ";
    cin >> h;
    
    cout << "Tam giac sao:\n";
    for (int i = 1; i <= h; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << '\n';
    }
    
    return 0;
}
```

**Input/Output:**
```
Nhap chieu cao: 5
Tam giac sao:
* 
* * 
* * * 
* * * * 
* * * * * 
```

---

### Bài 5: Nhập điểm 3 môn, xếp loại theo thang điểm tùy chọn
Nhập điểm 3 môn, xếp loại theo thang điểm tùy chọn.

#### Lời giải tham khảo
```cpp
#include <iostream>
using namespace std;

int main() {
    double mon1, mon2, mon3;
    cout << "Nhap diem 3 mon: ";
    cin >> mon1 >> mon2 >> mon3;
    
    double avg = (mon1 + mon2 + mon3) / 3.0;
    
    cout << "Diem trung binh: " << avg << '\n';
    
    if (avg >= 8.5) {
        cout << "Xep loai: Gioi\n";
    } else if (avg >= 7.0) {
        cout << "Xep loai: Kha\n";
    } else if (avg >= 5.5) {
        cout << "Xep loai: Trung binh\n";
    } else if (avg >= 4.0) {
        cout << "Xep loai: Yeu\n";
    } else {
        cout << "Xep loai: Kem\n";
    }
    
    return 0;
}
```

**Input/Output:**
```
Nhap diem 3 mon: 8 7.5 9
Diem trung binh: 8.16667
Xep loai: Kha
```

## 11. Tổng kết
- Cấu trúc rẽ nhánh giúp chương trình ra quyết định.
- Cấu trúc vòng lặp giúp lặp lại tác vụ hiệu quả.
- Khi giải bài toán, nên xác định rõ:
  - Điều kiện quyết định (dùng `if`/`switch`)
  - Số lần lặp dự kiến (dùng `for`/`while`/`do...while`)
- Viết đúng cú pháp là bước đầu; viết rõ ràng, tránh lỗi logic mới là mục tiêu quan trọng.
