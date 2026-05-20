# Bài giảng: `function` trong C++

## 1) Ý tưởng và tính chất của function

Trong C++, **function (hàm)** là một khối lệnh có tên, nhận dữ liệu đầu vào (tham số), xử lý và có thể trả về kết quả.

### Vì sao cần function?
- **Tái sử dụng**: viết 1 lần, gọi nhiều lần.
- **Chia nhỏ bài toán**: chương trình lớn được tách thành các phần nhỏ dễ quản lý.
- **Dễ kiểm thử và sửa lỗi**: lỗi thường nằm trong một hàm cụ thể.
- **Tăng tính đọc hiểu**: tên hàm thể hiện ý nghĩa xử lý.

### Cấu trúc cơ bản
```cpp
return_type functionName(parameter_list) {
    // thân hàm
    return value; // nếu return_type khác void
}
```

Ví dụ:
```cpp
int add(int a, int b) {
    return a + b;
}
```

Sử dụng:
```cpp
int result = add(3, 5); // result = 8
```

### Hàm không trả về (`void`)
Khi một hàm chỉ thực hiện hành động (in ra màn hình, cập nhật dữ liệu, ghi log...) và **không cần trả kết quả**, ta dùng kiểu `void`.

```cpp
#include <iostream>

void printLine() {
    std::cout << "----------------\n";
}
```

Gọi hàm:
```cpp
printLine(); // chỉ thực thi, không gán được vào biến
```

### Một vài tính chất quan trọng
- **Mỗi hàm có kiểu trả về rõ ràng** (`int`, `double`, `void`, ...).
- **Phạm vi biến cục bộ**: biến khai báo trong hàm chỉ dùng trong hàm đó.
- **Tham số truyền vào** có thể theo giá trị, tham chiếu hoặc hằng tham chiếu.

---

## 2) Các hàm được khai báo sẵn trong C++ (thư viện chuẩn)

C++ có rất nhiều hàm có sẵn trong thư viện chuẩn. Bạn chỉ cần `#include` đúng thư viện.

### 2.1. Nhóm toán học (`<cmath>`)
```cpp
#include <cmath>
double x = std::sqrt(25.0);  // 5
double y = std::pow(2.0, 3); // 8
double z = std::round(3.6);  // 4
```

### 2.2. Nhóm thuật toán (`<algorithm>`)
```cpp
#include <algorithm>
int a = std::max(10, 20); // 20
int b = std::min(10, 20); // 10
```

Với mảng/vector:
```cpp
#include <algorithm>
#include <vector>
std::vector<int> v = {4, 1, 3, 2};
std::sort(v.begin(), v.end()); // 1 2 3 4
```

### 2.3. Nhóm ký tự (`<cctype>`)
```cpp
#include <cctype>
bool ok = std::isdigit('7');       // true
char c = std::toupper('a');        // 'A'
```

### 2.4. Chuyển đổi chuỗi-số (`<string>`)
```cpp
#include <string>
int n = std::stoi("123");          // 123
std::string s = std::to_string(45);// "45"
```

> Lưu ý: đa số hàm chuẩn nằm trong namespace `std::`, vì vậy thường gọi theo dạng `std::ten_ham`.

---

## 3) Dùng function hiệu quả

1. **Mỗi hàm chỉ nên làm một việc chính** (single responsibility).
2. **Đặt tên rõ nghĩa**: `calculateTotal`, `isPrime`, `printMenu`...
3. **Chọn cách truyền tham số phù hợp**:
   - Dữ liệu nhỏ: truyền giá trị.
   - Dữ liệu lớn (string, vector): ưu tiên `const &` để tránh copy.
4. **Hạn chế tác dụng phụ**: hàm tính toán nên trả kết quả thay vì sửa biến toàn cục.
5. **Ưu tiên thư viện chuẩn**: thường tối ưu và đáng tin cậy hơn tự viết lại.

Ví dụ truyền tham chiếu hằng:
```cpp
#include <string>

int lengthOf(const std::string& s) { // không copy chuỗi
    return static_cast<int>(s.size());
}
```

---

## 4) Hàm đệ quy (recursion)

**Đệ quy** là hàm tự gọi lại chính nó để giải bài toán lớn bằng các bài toán nhỏ hơn.

Một hàm đệ quy đúng phải có:
1. **Base case** (điều kiện dừng).
2. **Recursive case** (bước gọi lại với bài toán nhỏ hơn).

### Ví dụ 1: Giai thừa `n!`
```cpp
int factorial(int n) {
    if (n <= 1) return 1;      // base case
    return n * factorial(n-1); // recursive case
}
```

### Ví dụ 2: UCLN bằng Euclid (đệ quy)
```cpp
int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}
```

### Khi nào nên dùng đệ quy?
- Duyệt cây, đồ thị.
- Chia để trị (merge sort, quick sort).
- Quay lui (backtracking).

### Lưu ý
- Đệ quy sâu có thể gây **tràn ngăn xếp** (stack overflow).
- Nếu có bài toán con lặp lại nhiều lần (như Fibonacci), cân nhắc quy hoạch động/memoization.

---

## 5) Bài tập luyện tập

### Bài 1: Viết hàm kiểm tra số nguyên tố
Viết hàm `bool isPrime(int n)` kiểm tra số nguyên tố.

#### Lời giải tham khảo
```cpp
#include <iostream>
using namespace std;

bool isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    cout << isPrime(17) << '\n';  // 1 (true)
    cout << isPrime(12) << '\n';  // 0 (false)
    
    return 0;
}
```

**Output:**
```
1
0
```

---

### Bài 2: Tính tổng chữ số bằng đệ quy
Viết hàm đệ quy tính tổng chữ số của một số nguyên dương.
Ví dụ: `sumDigits(2026) = 10`.

#### Lời giải tham khảo
```cpp
#include <iostream>
using namespace std;

int sumDigits(int n) {
    if (n == 0) return 0;  // base case
    return n % 10 + sumDigits(n / 10);  // recursive case
}

int main() {
    cout << "Tong chu so cua 2026: " << sumDigits(2026) << '\n';
    cout << "Tong chu so cua 123: " << sumDigits(123) << '\n';
    
    return 0;
}
```

**Output:**
```
Tong chu so cua 2026: 10
Tong chu so cua 123: 6
```

---

### Bài 3: Chuyển số thập phân sang nhị phân
Viết hàm đệ quy chuyển số thập phân sang nhị phân (trả về chuỗi).

#### Lời giải tham khảo
```cpp
#include <iostream>
#include <string>
using namespace std;

string toBinary(int n) {
    if (n == 0) return "0";
    if (n == 1) return "1";
    return toBinary(n / 2) + (char)('0' + n % 2);
}

int main() {
    cout << "10 = " << toBinary(10) << " (binary)\n";
    cout << "15 = " << toBinary(15) << " (binary)\n";
    
    return 0;
}
```

**Output:**
```
10 = 1010 (binary)
15 = 1111 (binary)
```

---

### Bài 4: Fibonacci với memoization
Viết hàm `int fibonacci(int n)` theo đệ quy, sau đó tối ưu bằng memoization.

#### Lời giải tham khảo
```cpp
#include <iostream>
using namespace std;

int memo[100] = {0};

int fibonacci(int n) {
    if (n <= 1) return n;
    if (memo[n] != 0) return memo[n];  // Kiểm tra cache
    memo[n] = fibonacci(n-1) + fibonacci(n-2);  // Lưu vào cache
    return memo[n];
}

int main() {
    cout << "fib(10) = " << fibonacci(10) << '\n';
    cout << "fib(20) = " << fibonacci(20) << '\n';
    
    return 0;
}
```

**Output:**
```
fib(10) = 55
fib(20) = 6765
```

---

### Bài 5: Xử lý mảng với nhiều hàm
Viết chương trình tách thành nhiều hàm: nhập mảng, in mảng, tìm max, tính trung bình.

#### Lời giải tham khảo
```cpp
#include <iostream>
using namespace std;

void inputArray(int a[], int n) {
    for (int i = 0; i < n; i++) {
        cout << "a[" << i << "] = ";
        cin >> a[i];
    }
}

void printArray(const int a[], int n) {
    cout << "Mang: ";
    for (int i = 0; i < n; i++) {
        cout << a[i] << " ";
    }
    cout << '\n';
}

int findMax(const int a[], int n) {
    int max = a[0];
    for (int i = 1; i < n; i++) {
        if (a[i] > max) max = a[i];
    }
    return max;
}

double calculateAverage(const int a[], int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += a[i];
    }
    return (double)sum / n;
}

int main() {
    int n;
    cout << "Nhap n: ";
    cin >> n;
    
    int a[100];
    inputArray(a, n);
    printArray(a, n);
    
    cout << "Max = " << findMax(a, n) << '\n';
    cout << "Trung binh = " << calculateAverage(a, n) << '\n';
    
    return 0;
}
```

**Input/Output:**
```
Nhap n: 4
a[0] = 5
a[1] = 3
a[2] = 8
a[3] = 2
Mang: 5 3 8 2
Max = 8
Trung binh = 4.5
```

---

## Kết luận ngắn

Nắm vững function giúp bạn viết chương trình **rõ ràng, tái sử dụng tốt, dễ mở rộng**.  
Bắt đầu từ hàm thường, dùng tốt thư viện chuẩn, sau đó học đệ quy để giải các bài toán nâng cao.
