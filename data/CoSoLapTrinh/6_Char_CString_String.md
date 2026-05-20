# Bài giảng: `char`, `cstring` và `string` trong C++

## 1) `char` 

`char` là kiểu dữ liệu lưu **một ký tự đơn** (ví dụ: `'A'`, `'b'`, `'7'`, `'@'`).

```cpp
char c1 = 'A';
char c2 = 'z';
```

- Ký tự viết trong **nháy đơn** `' '`.
- Bên trong máy tính, `char` lưu mã số (ASCII/UTF-8 byte).

---

## 2) `cstring` (chuỗi kiểu C)

## 2.1. Thư viện

Để dùng các hàm xử lý chuỗi kiểu C, dùng:

```cpp
#include <cstring>
```

## 2.2. Bản chất của `cstring`

`cstring` thực chất là **mảng `char` kết thúc bằng ký tự đặc biệt `'\0'`** (null terminator).

Ví dụ:
```cpp
char s[] = "Hello";
```

Bộ nhớ thực tế gồm 6 phần tử:
`'H' 'e' 'l' 'l' 'o' '\0'`

> `'\0'` **đánh dấu kết thúc chuỗi**, không phải ký tự hiển thị.

## 2.3. Cách khai báo

```cpp
char s1[20];                // chuỗi rỗng, sức chứa tối đa 19 ký tự + '\0'
char s2[] = "Programming";  // tự tính kích thước đủ chứa cả '\0'
char s3[6] = {'H','e','l','l','o','\0'};
```

## 2.4. Lưu ý cực kỳ quan trọng về `'\0'`

1. Chuỗi kiểu C **phải có `'\0'` ở cuối**.
2. Nếu quên `'\0'`, các hàm như `strlen`, `strcpy`, `cout << s` có thể đọc tràn bộ nhớ.
3. Khai báo kích thước phải tính thêm 1:
   - Chuỗi dài tối đa `n` ký tự cần mảng `char[n + 1]`.
4. `strlen(s)` **không tính** ký tự `'\0'`.

---

## 2.5. Nhập, xuất và sửa đổi `cstring`

### Ví dụ nhập/xuất
```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main() {
    char name[50];

    cout << "Nhap ho ten: ";
    // nếu dùng cin >> name; thì chỉ đọc được dãy kí tự cho đến khi gặp khoảng trắng đầu tiên
    cin.getline(name, 50); // đọc cả khoảng trắng

    cout << "Ban vua nhap: " << name << '\n';
}
```

### Ví dụ sửa đổi ký tự trong chuỗi
```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main() {
    char s[20] = "hello";
    s[0] = 'H';        // đổi ký tự đầu
    s[4] = 'O';        // hello -> HellO

    cout << s << '\n'; // HellO
}
```

### Ví dụ nối chuỗi
```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main() {
    char a[30] = "Hello";
    char b[] = " C++";
    strcat(a, b); // a = "Hello C++"
    cout << a << '\n';
}
```

> Khi nối/copy, phải đảm bảo mảng đích đủ lớn để chứa kết quả và `'\0'`.

## 2.5.5. Câu hỏi: Khai báo mảng quá lớn nhưng nhập ít ký tự có lãng phí bộ nhớ?

**Câu trả lời: Có, đó là lãng phí.**

Ví dụ:
```cpp
char s[1000];     // cấp phát 1000 byte
cin.getline(s, 1000);
// nhập: "hello"
```

Trong trường hợp này:
- Mảng **vẫn chiếm 1000 byte** trong bộ nhớ ngăn xếp, dù chỉ dùng 6 byte ("hello" + `'\0'`).
- Đó là **lãng phí 994 byte**.

### Tại sao mảng tĩnh lãng phí?
Mảng khai báo kiểu `char s[n]` là **cấp phát tĩnh** - kích thước cố định tại thời compile, không thay đổi khi chạy. Dù bạn nhập 1 ký tự hay 999 ký tự, `n` byte vẫn được dành riêng.

### Giải pháp
1. **Dùng `string` (tốt nhất cho hầu hết trường hợp)**:
   ```cpp
   string s;
   getline(cin, s);
   // s chỉ chiếm bộ nhớ phù hợp với độ dài thực tế
   ```

2. **Cấp phát động (nâng cao)**:
   ```cpp
   char* s = new char[1000];
   cin.getline(s, 1000);
   // ...
   delete[] s; // giải phóng khi không dùng
   ```

3. **Khai báo vừa phải**:
   - Ước tính độ dài tối đa hợp lý, không quá lớn không quá nhỏ.
   - Ví dụ: tên người dùng, khai báo `char name[100]` là tương đối hợp lý.

---

## 2.6. Một số hàm có sẵn trong `<cstring>`

```cpp
strlen(s)      // độ dài chuỗi (không tính '\0')
strcpy(d, s)   // copy s sang d
strcat(d, s)   // nối s vào cuối d
strcmp(a, b)   // so sánh từ điển: <0 (a < b), =0 (a = b), >0 (a > b)
strchr(s, ch)  // tìm ký tự ch trong s
strstr(s, sub) // tìm chuỗi con sub trong s
```

Ví dụ:
```cpp
char a[20] = "abc";
char b[20] = "abd";
cout << strcmp(a, b); // số âm vì "abc" < "abd"
```

## 2.7. So sánh chuỗi trong `cstring`

### Không dùng `==` để so sánh chuỗi
```cpp
char a[] = "hello";
char b[] = "hello";
if (a == b)  // SAI! So sánh địa chỉ mảng, không phải nội dung
    cout << "Ban se khong phat hien day la dung, vi a va b o dia chi khac\n";
```

### Phải dùng `strcmp()`
```cpp
char a[] = "hello";
char b[] = "hello";
if (strcmp(a, b) == 0)  // DUNG! So sánh nội dung
    cout << "Hai chuoi bang nhau\n";
```

## 2.8. Lỗi liên quan `'\0'` khi dùng `cstring`

### Lỗi 1: Quên thêm `'\0'` khi duyệt tạo chuỗi
```cpp
char s[5];
for (int i = 0; i < 4; i++) {
    s[i] = "abcd"[i]; //"abcd" là một mảng các kí tự nên "abcd"[i] là các phần tử của mảng này
}
// s = ['a','b','c','d', ?] nhưng thiếu '\0'!
cout << s;  // Kết quả không xác định, có thể chạy tới ký tự rác
```

**Fix:**
```cpp
char s[6]; // chừa 1 chỗ cho '\0'
for (int i = 0; i < 4; i++) {
    s[i] = "abcd"[i];
}
s[4] = '\0'; // thêm vào cuối
cout << s;   // "abcd" - OK
```

### Lỗi 2: Sao chép vào mảng quá nhỏ
```cpp
char dest[5];
strcpy(dest, "Hello World"); // LỖI! "Hello World" dài 12 > 5
// gây tràn bộ nhớ (buffer overflow)
```

**Fix:**
```cpp
char dest[15]; // đủ lớn
strcpy(dest, "Hello World"); // OK
```

### Lỗi 3: Không tính `'\0'` khi khai báo kích thước
```cpp
char s[5];
cin.getline(s, 5); // chỉ đọc tối đa 4 ký tự (5 - 1)
// cần tính thêm 1 cho '\0'
```

---

## 3) `string` (chuỗi chuẩn C++)

## 3.1. Thư viện

```cpp
#include <string>
```

## 3.2. Bản chất của `string`

`std::string` là **lớp chuỗi của C++**, quản lý bộ nhớ tự động, không cần tự lo `'\0'` khi thao tác thông thường.

## 3.3. Khai báo và sử dụng

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "Hello";
    s += " C++";            // nối chuỗi
    cout << s << '\n';      // Hello C++
}
```

### Nhập/xuất `string`
```cpp
string name;
getline(cin, name);   // đọc cả khoảng trắng (dấu space)
cout << name << '\n';
```

### Sửa đổi `string`
```cpp
string s = "hello";
s[0] = 'H';                 // Hello
s.append(" world");         // Hello world
s.insert(5, ",");           // Hello, world
s.erase(5, 1);              // Hello world
```

## 3.4. Một số hàm thường dùng của `string`

```cpp
s.length() / s.size()   // độ dài
s.empty()               // rỗng?
s.substr(pos, len)      // cắt chuỗi con
s.find("abc")           // tìm vị trí
s.replace(pos, len, t)  // thay thế đoạn
```

## 3.5. So sánh chuỗi trong `string`

### Dùng toán tử so sánh trực tiếp
```cpp
string a = "hello";
string b = "hello";
if (a == b)  // DUNG! So sánh nội dung
    cout << "Hai chuoi bang nhau\n";

if (a < b)   // DUNG! So sánh từ điển
    cout << "a nho hon b\n";
```

### Ví dụ
```cpp
string a = "apple";
string b = "banana";
cout << (a < b);  // 1 (true), vì "apple" < "banana"
```

---

## 4) So sánh `string` và `cstring`

| Khía cạnh | `cstring` (`char[]`) | `string` (`std::string`) |
|---|---|---|
| Bộ nhớ | Tự quản lý thủ công, phải chừa chỗ cho `'\0'` | Tự quản lý động, an toàn hơn |
| Hiệu suất | Có thể rất nhanh, chi phí thấp, gần mức thấp | Thường đủ nhanh, có overhead nhỏ của class |
| Cách sử dụng | Dùng hàm C (`strcpy`, `strcat`...), dễ lỗi tràn | API trực quan (`+`, `append`, `find`...), dễ đọc |
| Tính tiện lợi | Thấp hơn, phải kiểm soát kích thước kỹ | Cao hơn, dễ viết và bảo trì |

### Khi nào dùng cái nào?
- Dùng **`string`** cho hầu hết bài toán C++ hiện đại.
- Dùng **`cstring`** khi làm việc với API C cũ, hệ thống nhúng, hoặc cần kiểm soát rất thấp mức.

---

## 5) Bài tập luyện tập xử lý chuỗi

### Bài 1: Kiểm tra palindrome
Viết chương trình kiểm tra xem một chuỗi có phải **palindrome** (đọc xuôi hoặc ngược đều giống nhau) hay không.

**Input:** `racecar`  
**Output:** `Yes, it's a palindrome`

#### Lời giải tham khảo (string)
```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    cout << "Nhap chuoi: ";
    cin >> s;
    
    bool isPalin = true;
    for (int i = 0; i < s.length() / 2; i++) {
        if (s[i] != s[s.length() - 1 - i]) {
            isPalin = false;
            break;
        }
    }
    
    if (isPalin) {
        cout << "Yes, it's a palindrome\n";
    } else {
        cout << "No, it's not a palindrome\n";
    }
    
    return 0;
}
```

#### Lời giải tham khảo (cstring)
```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main() {
    char s[100];
    cout << "Nhap chuoi: ";
    cin >> s;
    
    int len = strlen(s);  // lấy độ dài (không tính '\0')
    bool isPalin = true;
    
    for (int i = 0; i < len / 2; i++) {
        if (s[i] != s[len - 1 - i]) {
            isPalin = false;
            break;
        }
    }
    
    if (isPalin) {
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

Nhap chuoi: hello
No, it's not a palindrome
```

---

### Bài 2: Đảo ngược chuỗi
Viết hàm `reverseString(string s)` để đảo ngược chuỗi `s`.

**Input:** `hello`  
**Output:** `olleh`

#### Lời giải tham khảo (string)
```cpp
#include <iostream>
#include <string>
using namespace std;

string reverseString(string s) {
    string result = "";
    for (int i = s.length() - 1; i >= 0; i--) {
        result += s[i];
    }
    return result;
}

int main() {
    string s;
    cout << "Nhap chuoi: ";
    cin >> s;
    
    cout << "Chuoi dao: " << reverseString(s) << '\n';
    
    return 0;
}
```

#### Lời giải tham khảo (cstring)
```cpp
#include <iostream>
#include <cstring>
using namespace std;

void reverseString(const char* source, char* dest) {
    int len = strlen(source);
    for (int i = 0; i < len; i++) {
        dest[i] = source[len - 1 - i];
    }
    dest[len] = '\0';  // thêm '\0' ở cuối
}

int main() {
    char s[100], reversed[100];
    cout << "Nhap chuoi: ";
    cin >> s;
    
    reverseString(s, reversed);
    cout << "Chuoi dao: " << reversed << '\n';
    
    return 0;
}
```

**Input/Output:**
```
Nhap chuoi: hello
Chuoi dao: olleh
```

---

### Bài 3: Đếm từ trong chuỗi
Viết chương trình nhập một dòng văn bản, đếm số lượng từ (tách bằng dấu cách).

**Input:** `hello world from C plus plus`  
**Output:** `5`

#### Lời giải tham khảo (string)
```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string line;
    cout << "Nhap dong van ban: ";
    getline(cin, line);
    
    int wordCount = 0;
    bool inWord = false;
    
    for (int i = 0; i < line.length(); i++) {
        if (line[i] != ' ') {
            if (!inWord) {
                wordCount++;
                inWord = true;
            }
        } else {
            inWord = false;
        }
    }
    
    cout << "So tu: " << wordCount << '\n';
    
    return 0;
}
```

#### Lời giải tham khảo (cstring)
```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main() {
    char line[500];
    cout << "Nhap dong van ban: ";
    cin.getline(line, 500);  // đọc cả khoảng trắng
    
    int wordCount = 0;
    bool inWord = false;
    
    for (int i = 0; i < strlen(line); i++) {
        if (line[i] != ' ') {
            if (!inWord) {
                wordCount++;
                inWord = true;
            }
        } else {
            inWord = false;
        }
    }
    
    cout << "So tu: " << wordCount << '\n';
    
    return 0;
}
```

**Input/Output:**
```
Nhap dong van ban: hello world from C plus plus
So tu: 6
```

---

### Bài 4: Chuyển đổi chữ hoa/thường
Viết 2 hàm:
- `toUppercase(string s)`: chuyển tất cả thành chữ hoa.
- `toLowercase(string s)`: chuyển tất cả thành chữ thường.

**Input:** `Hello World`  
**Output (uppercase):** `HELLO WORLD`  
**Output (lowercase):** `hello world`

#### Lời giải tham khảo (string)
```cpp
#include <iostream>
#include <string>
#include <cctype>
using namespace std;

string toUppercase(string s) {
    for (int i = 0; i < s.length(); i++) {
        s[i] = toupper(s[i]);
    }
    return s;
}

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
    
    cout << "Chu hoa: " << toUppercase(s) << '\n';
    cout << "Chu thuong: " << toLowercase(s) << '\n';
    
    return 0;
}
```

#### Lời giải tham khảo (cstring)
```cpp
#include <iostream>
#include <cstring>
#include <cctype>
using namespace std;

void toUppercase(char* s) {
    for (int i = 0; s[i] != '\0'; i++) {
        s[i] = toupper(s[i]);
    }
}

void toLowercase(char* s) {
    for (int i = 0; s[i] != '\0'; i++) {
        s[i] = tolower(s[i]);
    }
}

int main() {
    char s[100];
    cout << "Nhap chuoi: ";
    cin.getline(s, 100);
    
    char upper[100], lower[100];
    strcpy(upper, s);
    strcpy(lower, s);
    
    toUppercase(upper);
    toLowercase(lower);
    
    cout << "Chu hoa: " << upper << '\n';
    cout << "Chu thuong: " << lower << '\n';
    
    return 0;
}
```

**Input/Output:**
```
Nhap chuoi: Hello World
Chu hoa: HELLO WORLD
Chu thuong: hello world
```

---

### Bài 5: Kiểm tra chuỗi con
Viết chương trình nhập 2 chuỗi `s` và `sub`, kiểm tra xem `sub` có phải chuỗi con của `s` không. Nếu có, in ra vị trí đầu tiên của nó.

**Input:** `s = "programming"`, `sub = "gram"`  
**Output:** `Found at index 7`

#### Lời giải tham khảo (string)
```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s, sub;
    cout << "Nhap s: ";
    getline(cin, s);
    cout << "Nhap chuoi con: ";
    getline(cin, sub);
    
    int pos = s.find(sub);
    
    if (pos != string::npos) {
        cout << "Found at index " << pos << '\n';
    } else {
        cout << "Khong tim thay\n";
    }
    
    return 0;
}
```

#### Lời giải tham khảo (cstring)
```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main() {
    char s[200], sub[100];
    cout << "Nhap s: ";
    cin.getline(s, 200);
    cout << "Nhap chuoi con: ";
    cin.getline(sub, 100);
    
    char* pos = strstr(s, sub);  // tìm vị trí xuất hiện đầu tiên (địa chỉ của vị trí xuất hiện đầu tiên)
    
    if (pos != NULL) {
        // pos - s cho ta vị trí index
        cout << "Found at index " << (pos - s) << '\n';
    } else {
        cout << "Khong tim thay\n";
    }
    
    return 0;
}
```

**Input/Output:**
```
Nhap s: programming
Nhap chuoi con: gram
Found at index 3

---

Nhap s: hello
Nhap chuoi con: xyz
Khong tim thay
```

---

## Kết luận ngắn

- `char`: lưu 1 ký tự.
- `cstring`: mảng `char` kết thúc bởi `'\0'`, mạnh nhưng dễ lỗi nếu quản lý sai.
- `string`: tiện lợi, an toàn, phù hợp đa số tình huống trong C++ hiện đại.
