# Bài giảng: Arrays (Mảng) trong C++

## 1) Mảng 1 chiều (1D Array)

### Ý tưởng
Mảng 1 chiều là một tập hợp nhiều phần tử **cùng kiểu dữ liệu**, được đặt liên tiếp trong bộ nhớ và dùng chung một tên.

Ví dụ: lưu điểm của 5 sinh viên thay vì tạo 5 biến riêng lẻ.

```cpp
int scores[5] = {8, 7, 9, 10, 6};
```

---

### Tính chất của mảng 1 chiều
1. Các phần tử cùng kiểu (`int`, `double`, `char`, ...).
2. Kích thước thường cố định tại thời điểm khai báo (mảng tĩnh).
3. Truy cập ngẫu nhiên nhanh qua chỉ số (index).
4. Bộ nhớ liên tiếp nên phù hợp duyệt vòng lặp.

---

### Index là gì?
**Index** là vị trí của phần tử trong mảng.

Với `int a[5];`:
- `a[0]` là phần tử đầu tiên.
- `a[4]` là phần tử cuối cùng.

### Tính chất quan trọng của index
1. Bắt đầu từ **0**, không phải 1.
2. Miền hợp lệ: từ `0` đến `n-1`.
3. Truy cập sai index (âm hoặc >= n) gây lỗi logic, có thể hành vi không xác định.

---

### Các cách sử dụng mảng 1 chiều

#### 1. Nhập và xuất mảng
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a[100];

    for (int i = 0; i < n; i++) 
        cin >> a[i];
    for (int i = 0; i < n; i++) 
        cout << a[i] << " ";
}
```

#### 2. Tính tổng, trung bình, tìm max/min
```cpp
int sum = 0, mx = a[0], mn = a[0];
for (int i = 0; i < n; i++) {
    sum += a[i];
    if (a[i] > mx) mx = a[i];
    if (a[i] < mn) mn = a[i];
}
double avg = 1.0 * sum / n;
```

#### 3. Đếm theo điều kiện
```cpp
int countEven = 0;
for (int i = 0; i < n; i++) {
    if (a[i] % 2 == 0) countEven++;
}
```

#### 4. Cập nhật phần tử theo index
```cpp
a[2] = 100; // đổi giá trị phần tử thứ 3
```

---

### Ví dụ minh họa (1D)
**Bài toán:** Nhập `n` số nguyên, in ra số lớn nhất và vị trí của nó.

```cpp
#include <iostream>
using namespace std;

int main() {
    int n, a[100];
    cin >> n;
    for (int i = 0; i < n; i++) 
        cin >> a[i];

    int maxVal = a[0], pos = 0;
    for (int i = 1; i < n; i++) {
        if (a[i] > maxVal) {
            maxVal = a[i];
            pos = i;
        }
    }

    cout << "Max = " << maxVal 
         << ", index = " << pos;
}
```

**Input:**
```
5
3 8 2 10 5
```

**Output:**
```
Max = 10, index = 3
```

---

### Bài tập mảng 1 chiều

#### Bài 1: In ra các số âm và đếm số lượng
Nhập mảng `n` phần tử, in ra các số âm và đếm số lượng.

##### Lời giải tham khảo
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a[100];
    
    for (int i = 0; i < n; i++) cin >> a[i];
    
    cout << "Cac so am: ";
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (a[i] < 0) {
            cout << a[i] << " ";
            count++;
        }
    }
    cout << '\n' << "So luong: " << count << '\n';
    
    return 0;
}
```

**Input/Output:**
```
5
3 -5 8 -2 0
Cac so am: -5 -2
So luong: 2
```

---

#### Bài 2: Tính tổng các phần tử ở vị trí chẵn
Tính tổng các phần tử ở vị trí chẵn (`i % 2 == 0`).

##### Lời giải tham khảo
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a[100];
    
    for (int i = 0; i < n; i++) cin >> a[i];
    
    int sum = 0;
    for (int i = 0; i < n; i += 2) {
        sum += a[i];
    }
    
    cout << "Tong vi tri chan: " << sum << '\n';
    
    return 0;
}
```

**Input/Output:**
```
5
1 2 3 4 5
Tong vi tri chan: 1 + 3 + 5 = 9
```

---

#### Bài 3: Tìm phần tử nhỏ nhất và lớn nhất
Tìm phần tử nhỏ nhất và lớn nhất trong mảng.

##### Lời giải tham khảo
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a[100];
    
    for (int i = 0; i < n; i++) cin >> a[i];
    
    int minVal = a[0], maxVal = a[0];
    for (int i = 1; i < n; i++) {
        if (a[i] < minVal) minVal = a[i];
        if (a[i] > maxVal) maxVal = a[i];
    }
    
    cout << "Min = " << minVal << ", Max = " << maxVal << '\n';
    
    return 0;
}
```

**Input/Output:**
```
5
3 8 2 10 5
Min = 2, Max = 10
```

---

#### Bài 4: Kiểm tra mảng có tăng dần không
Kiểm tra mảng có tăng dần hay không.

##### Lời giải tham khảo
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a[100];
    
    for (int i = 0; i < n; i++) cin >> a[i];
    
    bool isIncreasing = true;
    for (int i = 1; i < n; i++) {
        if (a[i] <= a[i-1]) {
            isIncreasing = false;
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
4
1 3 5 7
Mang tang dan

---

4
1 3 2 5
Mang khong tang dan
```

---

#### Bài 5: Đảo ngược mảng (không dùng mảng phụ)
Đảo ngược mảng (không dùng mảng phụ).

##### Lời giải tham khảo
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a[100];
    
    for (int i = 0; i < n; i++) cin >> a[i];
    
    // Đảo ngược bằng cách hoán đổi từ hai đầu
    for (int i = 0; i < n/2; i++) {
        int temp = a[i];
        a[i] = a[n-1-i];
        a[n-1-i] = temp;
    }
    
    cout << "Mang sau dao: ";
    for (int i = 0; i < n; i++) cout << a[i] << " ";
    cout << '\n';
    
    return 0;
}
```

**Input/Output:**
```
5
1 2 3 4 5
Mang sau dao: 5 4 3 2 1
```

---

## 2) Mảng 2 chiều (2D Array)

### Ý tưởng
Mảng 2 chiều là “mảng của các mảng”, thường dùng để biểu diễn **bảng** gồm hàng và cột.

Ví dụ:
```cpp
int a[3][4]; // 3 hàng, 4 cột
```

---

### Tính chất của mảng 2 chiều
1. Các phần tử cùng kiểu dữ liệu.
2. Mỗi phần tử xác định bởi 2 index: `a[i][j]` (hàng `i`, cột `j`).
3. Vẫn có bộ nhớ liên tiếp theo quy tắc lưu trữ của C++ (row-major).
4. Duyệt bằng 2 vòng lặp lồng nhau.

---

### Index trong mảng 2 chiều
Với `a[m][n]`:
- Chỉ số hàng `i`: `0 .. m-1`
- Chỉ số cột `j`: `0 .. n-1`

Ví dụ với `a[2][3]`:
- `a[0][0]` là phần tử đầu.
- `a[1][2]` là phần tử cuối.

> Sai một trong hai index đều có thể gây truy cập ngoài phạm vi.

**Trực quan index (ví dụ `a[3][4]`):**

| i\\j | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| 0 | a[0][0] | a[0][1] | a[0][2] | a[0][3] |
| 1 | a[1][0] | a[1][1] | a[1][2] | a[1][3] |
| 2 | a[2][0] | a[2][1] | a[2][2] | a[2][3] |

---

### Các cách sử dụng mảng 2 chiều

#### 1. Nhập/xuất ma trận
```cpp
for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        cin >> a[i][j];
    }
}

for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        cout << a[i][j] << " ";
    }
    cout << '\n';
}
```

#### 2. Tính tổng từng hàng / từng cột
```cpp
for (int i = 0; i < m; i++) {
    int rowSum = 0;
    for (int j = 0; j < n; j++) rowSum += a[i][j];
    cout << "Tong hang " << i << " = " << rowSum << '\n';
}
```

#### 3. Duyệt đường chéo chính (ma trận vuông)
```cpp
int diagSum = 0;
for (int i = 0; i < n; i++) {
    diagSum += a[i][i];
}
```

#### 4. Tìm phần tử lớn nhất toàn ma trận
```cpp
int mx = a[0][0];
for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        if (a[i][j] > mx) mx = a[i][j];
    }
}
```

---

### Ví dụ minh họa (2D)
**Bài toán:** Nhập ma trận `m x n`, in tổng mỗi cột.

```cpp
#include <iostream>
using namespace std;

int main() {
    int m, n, a[100][100];
    cin >> m >> n;

    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            cin >> a[i][j];

    for (int j = 0; j < n; j++) {
        int colSum = 0;
        for (int i = 0; i < m; i++) 
        colSum += a[i][j];
        cout << "Tong cot " << j 
             << " = " << colSum << '\n';
    }
}
```

**Input:**
```
3 4
1 2 3 4
5 6 7 8
9 10 11 12
```

**Trực quan ma trận của input:**

| i\\j | 0 | 1 | 2 | 3 |
|---|---:|---:|---:|---:|
| 0 | 1 | 2 | 3 | 4 |
| 1 | 5 | 6 | 7 | 8 |
| 2 | 9 | 10 | 11 | 12 |

**Trực quan cộng theo cột:**
```text
Cot 0: 1 + 5 + 9  = 15
Cot 1: 2 + 6 + 10 = 18
Cot 2: 3 + 7 + 11 = 21
Cot 3: 4 + 8 + 12 = 24
```

**Output:**
```
Tong cot 0 = 15
Tong cot 1 = 18
Tong cot 2 = 21
Tong cot 3 = 24
```

---

### Bài tập mảng 2 chiều

#### Bài 1: Tính tổng toàn bộ phần tử
Nhập ma trận `m x n`, tính tổng toàn bộ phần tử.

##### Lời giải tham khảo
```cpp
#include <iostream>
using namespace std;

int main() {
    int m, n, a[100][100];
    cin >> m >> n;
    
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            cin >> a[i][j];
    
    int sum = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            sum += a[i][j];
        }
    }
    
    cout << "Tong toan bo phan tu: " << sum << '\n';
    
    return 0;
}
```

**Input/Output:**
```
2 3
1 2 3
4 5 6
Tong toan bo phan tu: 21
```

---

#### Bài 2: Tìm phần tử lớn nhất và vị trí
Tìm phần tử lớn nhất và vị trí `(i, j)` của nó.

##### Lời giải tham khảo
```cpp
#include <iostream>
using namespace std;

int main() {
    int m, n, a[100][100];
    cin >> m >> n;
    
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            cin >> a[i][j];
    
    int maxVal = a[0][0], maxI = 0, maxJ = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (a[i][j] > maxVal) {
                maxVal = a[i][j];
                maxI = i;
                maxJ = j;
            }
        }
    }
    
    cout << "Max = " << maxVal << " tai (" << maxI << ", " << maxJ << ")\n";
    
    return 0;
}
```

**Input/Output:**
```
3 3
1 5 3
2 8 4
6 7 2
Max = 8 tai (1, 1)
```

---

#### Bài 3: Tính tổng đường chéo chính và phụ
Tính tổng đường chéo chính và phụ (ma trận vuông).

##### Lời giải tham khảo
```cpp
#include <iostream>
using namespace std;

int main() {
    int n, a[100][100];
    cin >> n;
    
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            cin >> a[i][j];
    
    int diag1 = 0, diag2 = 0;
    // Đường chéo chính: a[i][i]
    // Đường chéo phụ: a[i][n-1-i]
    for (int i = 0; i < n; i++) {
        diag1 += a[i][i];
        diag2 += a[i][n-1-i];
    }
    
    cout << "Tong duong cheo chinh: " << diag1 << '\n';
    cout << "Tong duong cheo phu: " << diag2 << '\n';
    
    return 0;
}
```

**Input/Output:**
```
3
1 2 3
4 5 6
7 8 9
Tong duong cheo chinh: 15 (1+5+9)
Tong duong cheo phu: 15 (3+5+7)
```

---

#### Bài 4: Kiểm tra ma trận đối xứng qua đường chéo chính
Kiểm tra ma trận có đối xứng qua đường chéo chính hay không.

##### Lời giải tham khảo
```cpp
#include <iostream>
using namespace std;

int main() {
    int n, a[100][100];
    cin >> n;
    
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            cin >> a[i][j];
    
    bool isSymmetric = true;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (a[i][j] != a[j][i]) {
                isSymmetric = false;
                break;
            }
        }
        if (!isSymmetric) break;
    }
    
    if (isSymmetric) {
        cout << "Ma tran doi xung qua duong cheo chinh\n";
    } else {
        cout << "Ma tran khong doi xung\n";
    }
    
    return 0;
}
```

**Input/Output:**
```
3
1 2 3
2 4 5
3 5 6
Ma tran doi xung qua duong cheo chinh
```

---

#### Bài 5: Đếm số phần tử chẵn trong từng hàng
Đếm số phần tử chẵn trong từng hàng.

##### Lời giải tham khảo
```cpp
#include <iostream>
using namespace std;

int main() {
    int m, n, a[100][100];
    cin >> m >> n;
    
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            cin >> a[i][j];
    
    for (int i = 0; i < m; i++) {
        int count = 0;
        for (int j = 0; j < n; j++) {
            if (a[i][j] % 2 == 0) {
                count++;
            }
        }
        cout << "Hang " << i << ": " << count << " phan tu chan\n";
    }
    
    return 0;
}
```

**Input/Output:**
```
3 4
1 2 3 4
5 6 7 8
9 10 11 12
Hang 0: 2 phan tu chan
Hang 1: 2 phan tu chan
Hang 2: 2 phan tu chan
```

---

## Kết luận ngắn
Mảng 1 chiều giúp xử lý danh sách dữ liệu tuyến tính; mảng 2 chiều giúp xử lý dữ liệu dạng bảng/ma trận.  
Nắm chắc **index** và phạm vi hợp lệ là nền tảng để làm đúng mọi bài toán về mảng.
