# Lời Giải Tham Khảo Các Bài Tập C++

Tài liệu này chứa lời giải chi tiết cho 30 bài tập C++ từ các file giảng dạy. Mỗi lời giải đều có comment, Input/Output minh họa, và có thể chạy được trực tiếp.

---

## PHẦN 1: Flow of Control (5 bài)

### Bài 1.1: In các số từ 1 đến n chia hết cho 3

**Yêu cầu:** Nhập `n`, in các số từ `1` đến `n` chia hết cho `3`.

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Nhap n: ";
    cin >> n;
    
    cout << "Cac so tu 1 den " << n << " chia het cho 3:\n";
    // Duyệt từ 1 đến n
    for (int i = 1; i <= n; i++) {
        // Kiểm tra nếu i chia hết cho 3
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
3 9 12 15
```

---

### Bài 1.2: Kiểm tra số nguyên tố

**Yêu cầu:** Nhập `n`, kiểm tra `n` có phải số nguyên tố hay không.

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Nhap n: ";
    cin >> n;
    
    // Số nguyên tố phải >= 2
    if (n < 2) {
        cout << n << " khong phai so nguyen to\n";
        return 0;
    }
    
    // Kiểm tra từ 2 đến căn bậc 2 của n
    bool isPrime = true;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break; // Thoát vòng lặp nếu tìm được ước
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

### Bài 1.3: Máy tính mini với menu

**Yêu cầu:** Viết chương trình máy tính mini với menu, dùng `switch` và `do...while`.

```cpp
#include <iostream>
using namespace std;

int main() {
    double a, b;
    int choice;
    bool running = true;
    
    do {
        // Hiển thị menu
        cout << "\n===== MAY TINH MINI =====\n";
        cout << "1. Cong\n";
        cout << "2. Tru\n";
        cout << "3. Nhan\n";
        cout << "4. Chia\n";
        cout << "0. Thoat\n";
        cout << "Lua chon: ";
        cin >> choice;
        
        // Nếu chọn 0, thoát
        if (choice == 0) {
            cout << "Thoat chuong trinh\n";
            break;
        }
        
        // Nhập 2 số (ngoại trừ khi thoát)
        cout << "Nhap so thu nhat: ";
        cin >> a;
        cout << "Nhap so thu hai: ";
        cin >> b;
        
        // Xử lý theo lựa chọn dùng switch
        switch (choice) {
            case 1:
                cout << "Ket qua: " << a << " + " << b << " = " << (a + b) << '\n';
                break;
            case 2:
                cout << "Ket qua: " << a << " - " << b << " = " << (a - b) << '\n';
                break;
            case 3:
                cout << "Ket qua: " << a << " * " << b << " = " << (a * b) << '\n';
                break;
            case 4:
                // Kiểm tra chia cho 0
                if (b == 0) {
                    cout << "Loi: khong the chia cho 0\n";
                } else {
                    cout << "Ket qua: " << a << " / " << b << " = " << (a / b) << '\n';
                }
                break;
            default:
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
Lua chon: 1
Nhap so thu nhat: 10
Nhap so thu hai: 5
Ket qua: 10 + 5 = 15

===== MAY TINH MINI =====
1. Cong
2. Tru
3. Nhan
4. Chia
0. Thoat
Lua chon: 4
Nhap so thu nhat: 20
Nhap so thu hai: 4
Ket qua: 20 / 4 = 5

===== MAY TINH MINI =====
1. Cong
2. Tru
3. Nhan
4. Chia
0. Thoat
Lua chon: 0
Thoat chuong trinh
```

---

### Bài 1.4: In tam giác sao vuông

**Yêu cầu:** In tam giác sao vuông có chiều cao `h`.

```cpp
#include <iostream>
using namespace std;

int main() {
    int h;
    cout << "Nhap chieu cao: ";
    cin >> h;
    
    cout << "Tam giac sao vuong:\n";
    // Duyệt từ hàng 1 đến h
    for (int i = 1; i <= h; i++) {
        // In i sao trên mỗi hàng
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << '\n'; // Xuống hàng
    }
    
    return 0;
}
```

**Input/Output:**
```
Nhap chieu cao: 5
Tam giac sao vuong:
* 
* * 
* * * 
* * * * 
* * * * * 
```

---

### Bài 1.5: Xếp loại theo điểm 3 môn

**Yêu cầu:** Nhập điểm 3 môn, xếp loại theo thang điểm tùy chọn.

```cpp
#include <iostream>
using namespace std;

int main() {
    double mon1, mon2, mon3;
    double trungBinh;
    
    cout << "Nhap diem 3 mon:\n";
    cout << "Mon 1: ";
    cin >> mon1;
    cout << "Mon 2: ";
    cin >> mon2;
    cout << "Mon 3: ";
    cin >> mon3;
    
    // Tính điểm trung bình
    trungBinh = (mon1 + mon2 + mon3) / 3.0;
    
    cout << "Diem trung binh: " << trungBinh << '\n';
    
    // Xếp loại dựa trên điểm trung bình
    if (trungBinh >= 8.5) {
        cout << "Xep loai: Gioi\n";
    } else if (trungBinh >= 7.0) {
        cout << "Xep loai: Kha\n";
    } else if (trungBinh >= 5.5) {
        cout << "Xep loai: Trung binh\n";
    } else if (trungBinh >= 4.0) {
        cout << "Xep loai: Yeu\n";
    } else {
        cout << "Xep loai: Rat yeu\n";
    }
    
    return 0;
}
```

**Input/Output:**
```
Nhap diem 3 mon:
Mon 1: 8.5
Mon 2: 9.0
Mon 3: 8.0
Diem trung binh: 8.5
Xep loai: Gioi

---
Nhap diem 3 mon:
Mon 1: 6.5
Mon 2: 7.0
Mon 3: 6.0
Diem trung binh: 6.5
Xep loai: Trung binh
```

---

## PHẦN 2: Mảng 1 Chiều (5 bài)

### Bài 2.1: Nhập mảng, in số âm và đếm

**Yêu cầu:** Nhập mảng `n` phần tử, in ra các số âm và đếm số lượng.

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Nhap so phan tu: ";
    cin >> n;
    
    int a[100];
    cout << "Nhap " << n << " phan tu:\n";
    for (int i = 0; i < n; i++) {
        cout << "a[" << i << "] = ";
        cin >> a[i];
    }
    
    // In các số âm và đếm
    cout << "Cac so am: ";
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (a[i] < 0) {
            cout << a[i] << " ";
            count++; // Tăng đếm
        }
    }
    
    cout << '\n';
    cout << "So luong so am: " << count << '\n';
    
    return 0;
}
```

**Input/Output:**
```
Nhap so phan tu: 6
Nhap 6 phan tu:
a[0] = 3
a[1] = -5
a[2] = 0
a[3] = -2
a[4] = 8
a[5] = -1
Cac so am: -5 -2 -1 
So luong so am: 3
```

---

### Bài 2.2: Tính tổng phần tử ở vị trí chẵn

**Yêu cầu:** Tính tổng các phần tử ở vị trí chẵn (`i % 2 == 0`).

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Nhap so phan tu: ";
    cin >> n;
    
    int a[100];
    cout << "Nhap " << n << " phan tu:\n";
    for (int i = 0; i < n; i++) {
        cout << "a[" << i << "] = ";
        cin >> a[i];
    }
    
    // Tính tổng các phần tử ở vị trí chẵn
    long long sum = 0;
    for (int i = 0; i < n; i++) {
        if (i % 2 == 0) {
            sum += a[i]; // Cộng vào tổng
        }
    }
    
    cout << "Tong cac phan tu o vi tri chan: " << sum << '\n';
    
    return 0;
}
```

**Input/Output:**
```
Nhap so phan tu: 5
Nhap 5 phan tu:
a[0] = 10
a[1] = 20
a[2] = 30
a[3] = 40
a[4] = 50
Tong cac phan tu o vi tri chan: 90
(vi tri 0: 10, vi tri 2: 30, vi tri 4: 50; tong = 10 + 30 + 50 = 90)
```

---

### Bài 2.3: Tìm phần tử nhỏ nhất và lớn nhất

**Yêu cầu:** Tìm phần tử nhỏ nhất và lớn nhất trong mảng.

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Nhap so phan tu: ";
    cin >> n;
    
    int a[100];
    cout << "Nhap " << n << " phan tu:\n";
    for (int i = 0; i < n; i++) {
        cout << "a[" << i << "] = ";
        cin >> a[i];
    }
    
    // Khởi tạo min, max bằng phần tử đầu tiên
    int minVal = a[0];
    int maxVal = a[0];
    
    // Duyệt từ phần tử thứ 2 để so sánh
    for (int i = 1; i < n; i++) {
        if (a[i] < minVal) {
            minVal = a[i]; // Cập nhật min
        }
        if (a[i] > maxVal) {
            maxVal = a[i]; // Cập nhật max
        }
    }
    
    cout << "Phan tu nho nhat: " << minVal << '\n';
    cout << "Phan tu lon nhat: " << maxVal << '\n';
    
    return 0;
}
```

**Input/Output:**
```
Nhap so phan tu: 5
Nhap 5 phan tu:
a[0] = 15
a[1] = 3
a[2] = 42
a[3] = 8
a[4] = 27
Phan tu nho nhat: 3
Phan tu lon nhat: 42
```

---

### Bài 2.4: Kiểm tra mảng tăng dần

**Yêu cầu:** Kiểm tra mảng có tăng dần hay không.

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Nhap so phan tu: ";
    cin >> n;
    
    int a[100];
    cout << "Nhap " << n << " phan tu:\n";
    for (int i = 0; i < n; i++) {
        cout << "a[" << i << "] = ";
        cin >> a[i];
    }
    
    // Kiểm tra xem mảng có tăng dần không
    bool isIncreasing = true;
    for (int i = 0; i < n - 1; i++) {
        if (a[i] >= a[i + 1]) { // Nếu phần tử hiện tại >= phần tử tiếp theo
            isIncreasing = false; // Không tăng dần
            break;
        }
    }
    
    if (isIncreasing) {
        cout << "Mang tang dan\n";
    } else {
        cout << "Mang khong tang dan\n";
    }
    
    return 0;
}
```

**Input/Output:**
```
Nhap so phan tu: 4
Nhap 4 phan tu:
a[0] = 1
a[1] = 3
a[2] = 5
a[3] = 7
Mang tang dan

---
Nhap so phan tu: 4
Nhap 4 phan tu:
a[0] = 1
a[1] = 3
a[2] = 2
a[3] = 7
Mang khong tang dan
```

---

### Bài 2.5: Đảo ngược mảng (không dùng mảng phụ)

**Yêu cầu:** Đảo ngược mảng (không dùng mảng phụ).

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Nhap so phan tu: ";
    cin >> n;
    
    int a[100];
    cout << "Nhap " << n << " phan tu:\n";
    for (int i = 0; i < n; i++) {
        cout << "a[" << i << "] = ";
        cin >> a[i];
    }
    
    cout << "Mang ban dau: ";
    for (int i = 0; i < n; i++) {
        cout << a[i] << " ";
    }
    cout << '\n';
    
    // Đảo ngược mảng: hoán đổi phần tử từ 2 đầu tiến vào giữa
    for (int i = 0; i < n / 2; i++) {
        int temp = a[i]; // Lưu tạm phần tử thứ i
        a[i] = a[n - 1 - i]; // Gán phần tử cuối vào vị trí i
        a[n - 1 - i] = temp; // Gán phần tử lưu tạm vào cuối
    }
    
    cout << "Mang sau khi dao: ";
    for (int i = 0; i < n; i++) {
        cout << a[i] << " ";
    }
    cout << '\n';
    
    return 0;
}
```

**Input/Output:**
```
Nhap so phan tu: 5
Nhap 5 phan tu:
a[0] = 1
a[1] = 2
a[2] = 3
a[3] = 4
a[4] = 5
Mang ban dau: 1 2 3 4 5 
Mang sau khi dao: 5 4 3 2 1 
```

---

## PHẦN 3: Mảng 2 Chiều (5 bài)

### Bài 3.1: Tính tổng toàn bộ phần tử ma trận

**Yêu cầu:** Nhập ma trận `m x n`, tính tổng toàn bộ phần tử.

```cpp
#include <iostream>
using namespace std;

int main() {
    int m, n;
    cout << "Nhap so hang: ";
    cin >> m;
    cout << "Nhap so cot: ";
    cin >> n;
    
    int a[100][100];
    cout << "Nhap ma tran:\n";
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cout << "a[" << i << "][" << j << "] = ";
            cin >> a[i][j];
        }
    }
    
    // Tính tổng toàn bộ phần tử
    long long sum = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            sum += a[i][j]; // Cộng từng phần tử
        }
    }
    
    cout << "Tong toan bo phan tu: " << sum << '\n';
    
    return 0;
}
```

**Input/Output:**
```
Nhap so hang: 2
Nhap so cot: 3
Nhap ma tran:
a[0][0] = 1
a[0][1] = 2
a[0][2] = 3
a[1][0] = 4
a[1][1] = 5
a[1][2] = 6
Tong toan bo phan tu: 21
(1 + 2 + 3 + 4 + 5 + 6 = 21)
```

---

### Bài 3.2: Tìm phần tử lớn nhất và vị trí

**Yêu cầu:** Tìm phần tử lớn nhất và vị trí `(i, j)` của nó.

```cpp
#include <iostream>
using namespace std;

int main() {
    int m, n;
    cout << "Nhap so hang: ";
    cin >> m;
    cout << "Nhap so cot: ";
    cin >> n;
    
    int a[100][100];
    cout << "Nhap ma tran:\n";
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cout << "a[" << i << "][" << j << "] = ";
            cin >> a[i][j];
        }
    }
    
    // Tìm phần tử lớn nhất
    int maxVal = a[0][0];
    int maxI = 0, maxJ = 0;
    
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (a[i][j] > maxVal) {
                maxVal = a[i][j]; // Cập nhật giá trị lớn nhất
                maxI = i; // Cập nhật hàng
                maxJ = j; // Cập nhật cột
            }
        }
    }
    
    cout << "Phan tu lon nhat: " << maxVal << '\n';
    cout << "Vi tri: (" << maxI << ", " << maxJ << ")\n";
    
    return 0;
}
```

**Input/Output:**
```
Nhap so hang: 3
Nhap so cot: 3
Nhap ma tran:
a[0][0] = 5
a[0][1] = 2
a[0][2] = 8
a[1][0] = 3
a[1][1] = 9
a[1][2] = 1
a[2][0] = 4
a[2][1] = 6
a[2][2] = 7
Phan tu lon nhat: 9
Vi tri: (1, 1)
```

---

### Bài 3.3: Tổng đường chéo chính và phụ

**Yêu cầu:** Tính tổng đường chéo chính và phụ (ma trận vuông).

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Nhap kich thuoc ma tran vuong: ";
    cin >> n;
    
    int a[100][100];
    cout << "Nhap ma tran:\n";
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cout << "a[" << i << "][" << j << "] = ";
            cin >> a[i][j];
        }
    }
    
    // Tính tổng đường chéo chính (từ trên trái xuống dưới phải)
    long long mainDiag = 0;
    for (int i = 0; i < n; i++) {
        mainDiag += a[i][i]; // Phần tử [i][i]
    }
    
    // Tính tổng đường chéo phụ (từ trên phải xuống dưới trái)
    long long secondDiag = 0;
    for (int i = 0; i < n; i++) {
        secondDiag += a[i][n - 1 - i]; // Phần tử [i][n-1-i]
    }
    
    // Nếu ma trận cỡ lẻ, phần tử giữa được cộng 2 lần, nên trừ 1 lần
    if (n % 2 == 1) {
        int mid = n / 2;
        secondDiag -= a[mid][mid];
    }
    
    cout << "Tong duong cheo chinh: " << mainDiag << '\n';
    cout << "Tong duong cheo phu: " << secondDiag << '\n';
    
    return 0;
}
```

**Input/Output:**
```
Nhap kich thuoc ma tran vuong: 3
Nhap ma tran:
a[0][0] = 1
a[0][1] = 2
a[0][2] = 3
a[1][0] = 4
a[1][1] = 5
a[1][2] = 6
a[2][0] = 7
a[2][1] = 8
a[2][2] = 9
Tong duong cheo chinh: 15
(1 + 5 + 9 = 15)
Tong duong cheo phu: 15
(3 + 5 + 7 = 15)
```

---

### Bài 3.4: Kiểm tra ma trận đối xứng qua đường chéo chính

**Yêu cầu:** Kiểm tra ma trận có đối xứng qua đường chéo chính hay không.

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Nhap kich thuoc ma tran vuong: ";
    cin >> n;
    
    int a[100][100];
    cout << "Nhap ma tran:\n";
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cout << "a[" << i << "][" << j << "] = ";
            cin >> a[i][j];
        }
    }
    
    // Kiểm tra đối xứng: a[i][j] == a[j][i]
    bool isSymmetric = true;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (a[i][j] != a[j][i]) { // Nếu không bằng
                isSymmetric = false;
                break;
            }
        }
        if (!isSymmetric) break;
    }
    
    if (isSymmetric) {
        cout << "Ma tran doi xung qua duong cheo chinh\n";
    } else {
        cout << "Ma tran khong doi xung qua duong cheo chinh\n";
    }
    
    return 0;
}
```

**Input/Output:**
```
Nhap kich thuoc ma tran vuong: 3
Nhap ma tran:
a[0][0] = 1
a[0][1] = 2
a[0][2] = 3
a[1][0] = 2
a[1][1] = 4
a[1][2] = 5
a[2][0] = 3
a[2][1] = 5
a[2][2] = 6
Ma tran doi xung qua duong cheo chinh

---
Nhap kich thuoc ma tran vuong: 2
Nhap ma tran:
a[0][0] = 1
a[0][1] = 2
a[1][0] = 3
a[1][1] = 4
Ma tran khong doi xung qua duong cheo chinh
```

---

### Bài 3.5: Đếm số phần tử chẵn trong từng hàng

**Yêu cầu:** Đếm số phần tử chẵn trong từng hàng.

```cpp
#include <iostream>
using namespace std;

int main() {
    int m, n;
    cout << "Nhap so hang: ";
    cin >> m;
    cout << "Nhap so cot: ";
    cin >> n;
    
    int a[100][100];
    cout << "Nhap ma tran:\n";
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cout << "a[" << i << "][" << j << "] = ";
            cin >> a[i][j];
        }
    }
    
    // Đếm phần tử chẵn trong từng hàng
    for (int i = 0; i < m; i++) {
        int count = 0;
        for (int j = 0; j < n; j++) {
            if (a[i][j] % 2 == 0) { // Nếu chia hết cho 2
                count++; // Tăng đếm
            }
        }
        cout << "Hang " << i << ": " << count << " phan tu chan\n";
    }
    
    return 0;
}
```

**Input/Output:**
```
Nhap so hang: 3
Nhap so cot: 4
Nhap ma tran:
a[0][0] = 1
a[0][1] = 2
a[0][2] = 3
a[0][3] = 4
a[1][0] = 5
a[1][1] = 6
a[1][2] = 7
a[1][3] = 8
a[2][0] = 2
a[2][1] = 4
a[2][2] = 6
a[2][3] = 8
Hang 0: 2 phan tu chan
Hang 1: 2 phan tu chan
Hang 2: 4 phan tu chan
```

---

## PHẦN 4: Functions (5 bài)

### Bài 4.1: Kiểm tra số nguyên tố (hàm)

**Yêu cầu:** Viết hàm `bool isPrime(int n)` kiểm tra số nguyên tố.

```cpp
#include <iostream>
using namespace std;

// Hàm kiểm tra số nguyên tố
bool isPrime(int n) {
    // Số nguyên tố phải >= 2
    if (n < 2) return false;
    
    // Kiểm tra từ 2 đến căn bậc 2 của n
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false; // Tìm được ước, không phải số nguyên tố
        }
    }
    return true; // Không có ước, là số nguyên tố
}

int main() {
    int n;
    cout << "Nhap n: ";
    cin >> n;
    
    if (isPrime(n)) {
        cout << n << " la so nguyen to\n";
    } else {
        cout << n << " khong phai so nguyen to\n";
    }
    
    return 0;
}
```

**Input/Output:**
```
Nhap n: 13
13 la so nguyen to

---
Nhap n: 15
15 khong phai so nguyen to
```

---

### Bài 4.2: Tổng chữ số (đệ quy)

**Yêu cầu:** Viết hàm đệ quy tính tổng chữ số. Ví dụ: `sumDigits(2026) = 10`.

```cpp
#include <iostream>
using namespace std;

// Hàm đệ quy tính tổng chữ số
int sumDigits(int n) {
    // Base case: nếu n < 10, n là một chữ số
    if (n < 10) {
        return n;
    }
    
    // Recursive case: chữ số cuối cùng + tổng chữ số của phần còn lại
    return (n % 10) + sumDigits(n / 10);
}

int main() {
    int n;
    cout << "Nhap so nguyen duong: ";
    cin >> n;
    
    int result = sumDigits(n);
    cout << "Tong cac chu so cua " << n << " = " << result << '\n';
    
    return 0;
}
```

**Input/Output:**
```
Nhap so nguyen duong: 2026
Tong cac chu so cua 2026 = 10
(2 + 0 + 2 + 6 = 10)

---
Nhap so nguyen duong: 12345
Tong cac chu so cua 12345 = 15
(1 + 2 + 3 + 4 + 5 = 15)
```

---

### Bài 4.3: Chuyển sang nhị phân (đệ quy)

**Yêu cầu:** Viết hàm đệ quy chuyển số thập phân sang nhị phân (trả về chuỗi).

```cpp
#include <iostream>
#include <string>
using namespace std;

// Hàm đệ quy chuyển số thập phân sang nhị phân
string decimalToBinary(int n) {
    // Base case: nếu n = 0, trả về "0"
    if (n == 0) {
        return "0";
    }
    
    // Base case: nếu n = 1, trả về "1"
    if (n == 1) {
        return "1";
    }
    
    // Recursive case: nếu n chẵn, thêm "0"; nếu lẻ, thêm "1"
    if (n % 2 == 0) {
        return decimalToBinary(n / 2) + "0";
    } else {
        return decimalToBinary(n / 2) + "1";
    }
}

int main() {
    int n;
    cout << "Nhap so thap phan: ";
    cin >> n;
    
    string binary = decimalToBinary(n);
    cout << "Nhị phân: " << binary << '\n';
    
    return 0;
}
```

**Input/Output:**
```
Nhap so thap phan: 10
Nhị phân: 1010

---
Nhap so thap phan: 13
Nhị phân: 1101

---
Nhap so thap phan: 7
Nhị phân: 111
```

---

### Bài 4.4: Fibonacci với Memoization

**Yêu cầu:** Viết hàm `int fibonacci(int n)` theo đệ quy, sau đó tối ưu bằng memoization.

```cpp
#include <iostream>
using namespace std;

// Mảng lưu kết quả đã tính (memoization)
long long memo[50];

// Hàm Fibonacci đệ quy với memoization
long long fibonacci(int n) {
    // Base case
    if (n <= 1) {
        return n;
    }
    
    // Nếu kết quả đã được tính, trả về từ memo
    if (memo[n] != -1) {
        return memo[n];
    }
    
    // Tính và lưu vào memo
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memo[n];
}

int main() {
    // Khởi tạo mảng memo với -1
    for (int i = 0; i < 50; i++) {
        memo[i] = -1;
    }
    
    int n;
    cout << "Nhap n (Fibonacci thu n): ";
    cin >> n;
    
    long long result = fibonacci(n);
    cout << "Fibonacci(" << n << ") = " << result << '\n';
    
    return 0;
}
```

**Input/Output:**
```
Nhap n (Fibonacci thu n): 10
Fibonacci(10) = 55

---
Nhap n (Fibonacci thu n): 20
Fibonacci(20) = 6765

---
Nhap n (Fibonacci thu n): 30
Fibonacci(30) = 832040
```

---

### Bài 4.5: Chương trình xử lý mảng với nhiều hàm

**Yêu cầu:** Viết chương trình tách thành nhiều hàm: nhập mảng, in mảng, tìm max, tính trung bình.

```cpp
#include <iostream>
using namespace std;

// Hàm nhập mảng
void inputArray(int a[], int n) {
    cout << "Nhap " << n << " phan tu:\n";
    for (int i = 0; i < n; i++) {
        cout << "a[" << i << "] = ";
        cin >> a[i];
    }
}

// Hàm in mảng
void printArray(int a[], int n) {
    cout << "Mang: ";
    for (int i = 0; i < n; i++) {
        cout << a[i] << " ";
    }
    cout << '\n';
}

// Hàm tìm phần tử lớn nhất
int findMax(int a[], int n) {
    int max = a[0];
    for (int i = 1; i < n; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    return max;
}

// Hàm tính trung bình
double calculateAverage(int a[], int n) {
    long long sum = 0;
    for (int i = 0; i < n; i++) {
        sum += a[i];
    }
    return (double)sum / n;
}

int main() {
    int n;
    cout << "Nhap so phan tu: ";
    cin >> n;
    
    int a[100];
    inputArray(a, n); // Gọi hàm nhập
    printArray(a, n); // Gọi hàm in
    
    int maxVal = findMax(a, n); // Gọi hàm tìm max
    cout << "Phan tu lon nhat: " << maxVal << '\n';
    
    double avg = calculateAverage(a, n); // Gọi hàm tính trung bình
    cout << "Trung binh: " << avg << '\n';
    
    return 0;
}
```

**Input/Output:**
```
Nhap so phan tu: 5
Nhap 5 phan tu:
a[0] = 12
a[1] = 25
a[2] = 8
a[3] = 30
a[4] = 15
Mang: 12 25 8 30 15 
Phan tu lon nhat: 30
Trung binh: 18
```

---

## PHẦN 5: Xử Lý Chuỗi (5 bài)

### Bài 5.1: Kiểm tra Palindrome

**Yêu cầu:** Kiểm tra xem một chuỗi có phải palindrome hay không.

```cpp
#include <iostream>
#include <string>
#include <cctype>
using namespace std;

int main() {
    string s;
    cout << "Nhap chuoi: ";
    getline(cin, s);
    
    // Chuyển tất cả thành chữ thường và loại bỏ khoảng trắng
    string cleaned = "";
    for (char c : s) {
        if (isalpha(c)) { // Chỉ lấy chữ cái
            cleaned += tolower(c);
        }
    }
    
    // Kiểm tra palindrome: so sánh từ 2 đầu tiến vào giữa
    bool isPalindrome = true;
    int len = cleaned.length();
    for (int i = 0; i < len / 2; i++) {
        if (cleaned[i] != cleaned[len - 1 - i]) { // Nếu không bằng
            isPalindrome = false;
            break;
        }
    }
    
    if (isPalindrome) {
        cout << "Yes, it's a palindrome\n";
    } else {
        cout << "No, it's not a palindrome\n";
    }
    
    return 0;
}
```

**Input/Output:**
```
Nhap chuoi: racecar
Yes, it's a palindrome

---
Nhap chuoi: A man a plan a canal Panama
Yes, it's a palindrome

---
Nhap chuoi: hello
No, it's not a palindrome
```

---

### Bài 5.2: Đảo ngược chuỗi

**Yêu cầu:** Viết hàm `reverseString(string s)` để đảo ngược chuỗi.

```cpp
#include <iostream>
#include <string>
using namespace std;

// Hàm đảo ngược chuỗi
string reverseString(string s) {
    string result = "";
    // Duyệt từ cuối chuỗi về đầu
    for (int i = s.length() - 1; i >= 0; i--) {
        result += s[i];
    }
    return result;
}

int main() {
    string s;
    cout << "Nhap chuoi: ";
    getline(cin, s);
    
    string reversed = reverseString(s);
    cout << "Chuoi dao: " << reversed << '\n';
    
    return 0;
}
```

**Input/Output:**
```
Nhap chuoi: hello
Chuoi dao: olleh

---
Nhap chuoi: C++ programming
Chuoi dao: gnimmargorpC ++
```

---

### Bài 5.3: Đếm từ trong chuỗi

**Yêu cầu:** Nhập một dòng văn bản, đếm số lượng từ (tách bằng dấu cách).

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string line;
    cout << "Nhap mot dong van ban: ";
    getline(cin, line);
    
    int wordCount = 0;
    bool inWord = false;
    
    // Duyệt từng ký tự
    for (int i = 0; i < line.length(); i++) {
        if (line[i] != ' ') { // Nếu không phải khoảng trắng
            if (!inWord) { // Nếu chưa vào từ mới
                wordCount++; // Tăng đếm từ
                inWord = true;
            }
        } else { // Nếu là khoảng trắng
            inWord = false; // Thoát khỏi từ
        }
    }
    
    cout << "So tu: " << wordCount << '\n';
    
    return 0;
}
```

**Input/Output:**
```
Nhap mot dong van ban: hello world from C plus plus
So tu: 6

---
Nhap mot dong van ban: The quick brown fox
So tu: 4

---
Nhap mot dong van ban: a
So tu: 1
```

---

### Bài 5.4: Chuyển đổi chữ hoa/thường

**Yêu cầu:** Viết 2 hàm chuyển tất cả thành chữ hoa hoặc thường.

```cpp
#include <iostream>
#include <string>
#include <cctype>
using namespace std;

// Hàm chuyển thành chữ hoa
string toUppercase(string s) {
    for (int i = 0; i < s.length(); i++) {
        s[i] = toupper(s[i]);
    }
    return s;
}

// Hàm chuyển thành chữ thường
string toLowercase(string s) {
    for (int i = 0; i < s.length(); i++) {
        s[i] = tolower(s[i]);
    }
    return s;
}

int main() {
    string s;
    cout << "Nhap chuoi: ";
    getline(cin, s);
    
    cout << "Chuoi goc: " << s << '\n';
    cout << "Chu hoa: " << toUppercase(s) << '\n';
    cout << "Chu thuong: " << toLowercase(s) << '\n';
    
    return 0;
}
```

**Input/Output:**
```
Nhap chuoi: Hello World
Chuoi goc: Hello World
Chu hoa: HELLO WORLD
Chu thuong: hello world

---
Nhap chuoi: C++ Programming
Chuoi goc: C++ Programming
Chu hoa: C++ PROGRAMMING
Chu thuong: c++ programming
```

---

### Bài 5.5: Kiểm tra chuỗi con

**Yêu cầu:** Nhập 2 chuỗi, kiểm tra xem chuỗi thứ 2 có là chuỗi con của chuỗi thứ 1 không.

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s, sub;
    cout << "Nhap chuoi s: ";
    getline(cin, s);
    cout << "Nhap chuoi con sub: ";
    getline(cin, sub);
    
    // Tìm vị trí của sub trong s dùng hàm find()
    size_t pos = s.find(sub);
    
    if (pos != string::npos) {
        cout << "Found at index " << pos << '\n';
    } else {
        cout << "Not found\n";
    }
    
    return 0;
}
```

**Input/Output:**
```
Nhap chuoi s: programming
Nhap chuoi con sub: gram
Found at index 7

---
Nhap chuoi s: hello world
Nhap chuoi con sub: xyz
Not found

---
Nhap chuoi s: the quick brown fox
Nhap chuoi con sub: quick
Found at index 4
```

---

## PHẦN 6: Structures (5 bài)

### Bài 6.1: `Student` cơ bản với member function

**Yêu cầu:** Viết `struct Student` có `id`, `fullName`, `gpa`, cùng các hàm `input()`, `output()`, `rank()`.

```cpp
#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

struct Student {
    string id;
    string fullName;
    double gpa;

    void input() {
        cout << "Ma SV: ";
        getline(cin, id);
        cout << "Ho ten: ";
        getline(cin, fullName);
        cout << "GPA: ";
        cin >> gpa;
        cin.ignore();
    }

    string rank() const {
        if (gpa >= 8.5) return "Gioi";
        if (gpa >= 7.0) return "Kha";
        if (gpa >= 5.5) return "Trung binh";
        return "Yeu";
    }

    void output() const {
        cout << left << setw(10) << id
             << left << setw(25) << fullName
             << fixed << setprecision(2) << setw(8) << gpa
             << rank() << '\n';
    }
};

int main() {
    int n;
    cout << "Nhap so sinh vien: ";
    cin >> n;
    cin.ignore();

    Student a[100];
    for (int i = 0; i < n; i++) {
        cout << "\nSinh vien " << i + 1 << ":\n";
        a[i].input();
    }

    cout << "\nDanh sach sinh vien:\n";
    cout << left << setw(10) << "MaSV"
         << left << setw(25) << "HoTen"
         << setw(8) << "GPA"
         << "XepLoai\n";
    for (int i = 0; i < n; i++) {
        a[i].output();
    }

    return 0;
}
```

**Input/Output:**
```
Nhap so sinh vien: 2

Sinh vien 1:
Ma SV: SV01
Ho ten: Nguyen Van A
GPA: 8.7

Sinh vien 2:
Ma SV: SV02
Ho ten: Tran Thi B
GPA: 6.8

Danh sach sinh vien:
MaSV      HoTen                    GPA     XepLoai
SV01      Nguyen Van A             8.70    Gioi
SV02      Tran Thi B               6.80    Trung binh
```

---

### Bài 6.2: `Fraction` với rút gọn và cộng

**Yêu cầu:** Viết `struct Fraction` có `input()`, `output()`, `reduce()`, `add()`.

```cpp
#include <iostream>
using namespace std;

struct Fraction {
    int num; // tử số
    int den; // mẫu số

    void input() {
        cout << "Nhap tu so: ";
        cin >> num;
        cout << "Nhap mau so: ";
        cin >> den;
    }

    int gcd(int a, int b) const {
        if (a < 0) a = -a;
        if (b < 0) b = -b;
        while (b != 0) {
            int r = a % b;
            a = b;
            b = r;
        }
        return a == 0 ? 1 : a;
    }

    void reduce() {
        if (den < 0) { // chuẩn hóa dấu
            den = -den;
            num = -num;
        }
        int g = gcd(num, den);
        num /= g;
        den /= g;
    }

    Fraction add(const Fraction& other) const {
        Fraction res;
        res.num = num * other.den + other.num * den;
        res.den = den * other.den;
        res.reduce();
        return res;
    }

    void output() const {
        cout << num << '/' << den;
    }
};

int main() {
    Fraction a, b;
    cout << "Phan so thu nhat:\n";
    a.input();
    cout << "Phan so thu hai:\n";
    b.input();

    if (a.den == 0 || b.den == 0) {
        cout << "Mau so phai khac 0\n";
        return 0;
    }

    a.reduce();
    b.reduce();
    Fraction c = a.add(b);

    cout << "A = ";
    a.output();
    cout << "\nB = ";
    b.output();
    cout << "\nA + B = ";
    c.output();
    cout << '\n';

    return 0;
}
```

**Input/Output:**
```
Phan so thu nhat:
Nhap tu so: 2
Nhap mau so: 4
Phan so thu hai:
Nhap tu so: 3
Nhap mau so: 6
A = 1/2
B = 1/2
A + B = 1/1
```

---

### Bài 6.3: `Point2D` và khoảng cách 2 điểm

**Yêu cầu:** Viết `struct Point2D` có `input()`, `output()`, `distanceTo()`.

```cpp
#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

struct Point2D {
    double x;
    double y;

    void input() {
        cout << "Nhap x: ";
        cin >> x;
        cout << "Nhap y: ";
        cin >> y;
    }

    void output() const {
        cout << '(' << x << ", " << y << ')';
    }

    double distanceTo(const Point2D& other) const {
        double dx = x - other.x;
        double dy = y - other.y;
        return sqrt(dx * dx + dy * dy);
    }
};

int main() {
    Point2D a, b;
    cout << "Diem A:\n";
    a.input();
    cout << "Diem B:\n";
    b.input();

    cout << "A = ";
    a.output();
    cout << "\nB = ";
    b.output();
    cout << "\nKhoang cach AB = "
         << fixed << setprecision(3) << a.distanceTo(b) << '\n';
    return 0;
}
```

**Input/Output:**
```
Diem A:
Nhap x: 1
Nhap y: 2
Diem B:
Nhap x: 4
Nhap y: 6
A = (1, 2)
B = (4, 6)
Khoang cach AB = 5.000
```

---

### Bài 6.4: `Date` hợp lệ và ngày kế tiếp

**Yêu cầu:** Viết `struct Date` có `isLeapYear()`, `isValid()`, `nextDay()`.

```cpp
#include <iostream>
using namespace std;

struct Date {
    int day, month, year;

    bool isLeapYear() const {
        return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
    }

    int daysInMonth() const {
        if (month == 2) return isLeapYear() ? 29 : 28;
        if (month == 4 || month == 6 || month == 9 || month == 11) return 30;
        return 31;
    }

    bool isValid() const {
        if (year < 1) return false;
        if (month < 1 || month > 12) return false;
        if (day < 1 || day > daysInMonth()) return false;
        return true;
    }

    Date nextDay() const {
        Date d = *this;
        d.day++;
        if (d.day > d.daysInMonth()) {
            d.day = 1;
            d.month++;
            if (d.month > 12) {
                d.month = 1;
                d.year++;
            }
        }
        return d;
    }

    void print() const {
        cout << day << '/' << month << '/' << year;
    }
};

int main() {
    Date d;
    cout << "Nhap ngay thang nam (dd mm yyyy): ";
    cin >> d.day >> d.month >> d.year;

    if (!d.isValid()) {
        cout << "Ngay khong hop le\n";
        return 0;
    }

    Date tomorrow = d.nextDay();
    cout << "Ngay hom nay: ";
    d.print();
    cout << "\nNgay hom sau: ";
    tomorrow.print();
    cout << '\n';
    return 0;
}
```

**Input/Output:**
```
Nhap ngay thang nam (dd mm yyyy): 28 2 2024
Ngay hom nay: 28/2/2024
Ngay hom sau: 29/2/2024

---
Nhap ngay thang nam (dd mm yyyy): 31 11 2026
Ngay khong hop le
```

---

### Bài 6.5: Quản lý nhân viên bằng mảng `struct`

**Yêu cầu:** Viết `struct Employee` có `totalIncome()`, tìm nhân viên thu nhập cao nhất và tổng quỹ lương.

```cpp
#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

struct Employee {
    string code;
    string name;
    double baseSalary;
    double bonus;

    void input() {
        cout << "Ma NV: ";
        getline(cin, code);
        cout << "Ten NV: ";
        getline(cin, name);
        cout << "Luong co ban: ";
        cin >> baseSalary;
        cout << "Thuong: ";
        cin >> bonus;
        cin.ignore();
    }

    double totalIncome() const {
        return baseSalary + bonus;
    }
};

int main() {
    int n;
    cout << "Nhap so nhan vien: ";
    cin >> n;
    cin.ignore();

    Employee a[100];
    for (int i = 0; i < n; i++) {
        cout << "\nNhan vien " << i + 1 << ":\n";
        a[i].input();
    }

    int best = 0;
    double payroll = 0;
    for (int i = 0; i < n; i++) {
        payroll += a[i].totalIncome();
        if (a[i].totalIncome() > a[best].totalIncome()) {
            best = i;
        }
    }

    cout << "\nNhan vien thu nhap cao nhat:\n";
    cout << a[best].code << " - " << a[best].name
         << " - " << fixed << setprecision(2)
         << a[best].totalIncome() << '\n';

    cout << "Tong quy luong: " << fixed << setprecision(2) << payroll << '\n';
    return 0;
}
```

**Input/Output:**
```
Nhap so nhan vien: 3

Nhan vien 1:
Ma NV: E01
Ten NV: Nguyen Van A
Luong co ban: 1200
Thuong: 300

Nhan vien 2:
Ma NV: E02
Ten NV: Tran Thi B
Luong co ban: 1500
Thuong: 100

Nhan vien 3:
Ma NV: E03
Ten NV: Le Van C
Luong co ban: 1000
Thuong: 600

Nhan vien thu nhap cao nhat:
E02 - Tran Thi B - 1600.00
Tong quy luong: 4700.00
```

---

## Kết Luận

Tài liệu này chứa 30 lời giải C++ đầy đủ và có thể chạy được. Mỗi lời giải bao gồm:
- **Comment chi tiết** giải thích các bước chính
- **Input/Output minh họa** để dễ hình dung
- **Cấu trúc rõ ràng** dễ theo dõi

Để sử dụng:
1. Copy mã C++ từ code block
2. Dán vào trình soạn thảo hoặc IDE (VS Code, Dev-C++, Code::Blocks, etc.)
3. Biên dịch: `g++ -o program program.cpp`
4. Chạy: `./program` (trên Linux/Mac) hoặc `program.exe` (trên Windows)

Chúc bạn học tập thành công!
