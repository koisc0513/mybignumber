# MyBigNumber - Cộng 2 số lớn

Cài đặt thuật toán cộng 2 số lớn (biểu diễn dưới dạng chuỗi) theo cách học sinh Tiểu học.

## Yêu cầu

- Node.js (bất kỳ phiên bản nào, không cần cài thêm thư viện)

## Cài đặt & Chạy

### 1. Clone project về máy

```bash
# Ví dụ clone từ GitHub
git clone https://github.com/youraccount/mybignumber.git

# Di chuyển vào thư mục project
cd mybignumber
```

### 2. Cấu trúc thư mục

```
mybignumber/
├── src/
│   └── MyBigNumber.js      ← Code chính (class MyBigNumber)
├── tests/
│   └── MyBigNumber.test.js ← Unit tests
├── package.json
└── README.md
```

### 3. Chạy Unit Test

```bash
node tests/MyBigNumber.test.js
```

Kết quả mẫu:

```
============================================================
  UNIT TEST - MyBigNumber.sum()
============================================================

  ✅ PASS: Ví dụ đề bài: 1234 + 897
     1234 + 897 = 2131

  ✅ PASS: Hai số cùng độ dài: 123 + 456
     ...

============================================================
  KẾT QUẢ: 8 PASS  |  0 FAIL
============================================================
```

### 4. Dùng trong code của bạn

```javascript
const MyBigNumber = require('./src/MyBigNumber');

const myBigNumber = new MyBigNumber();
const result = myBigNumber.sum("1234", "897");
console.log(result); // "2131"
```

## Ví dụ Log từng bước

Khi gọi `sum("1234", "897")`, chương trình sẽ log:

```
===========================================
[LOG] Bắt đầu tính: 1234 + 897
===========================================
[BƯỚC 1]
  Lấy 4 cộng với 7 được 11
  Lưu 1 vào kết quả → kết quả hiện tại: "1"
  Ghi nhớ 1 cho bước tiếp theo
-------------------------------------------
[BƯỚC 2]
  Lấy 3 cộng với 9 được 12
  Cộng tiếp với nhớ 1 được 13
  Lưu 3 vào kết quả → kết quả hiện tại: "31"
  Ghi nhớ 1 cho bước tiếp theo
-------------------------------------------
[BƯỚC 3]
  Lấy 2 cộng với 8 được 10
  Cộng tiếp với nhớ 1 được 11
  Lưu 1 vào kết quả → kết quả hiện tại: "131"
  Ghi nhớ 1 cho bước tiếp theo
-------------------------------------------
[BƯỚC 4]
  Lấy 1 cộng với 0 được 1
  Cộng tiếp với nhớ 1 được 2
  Lưu 2 vào kết quả → kết quả hiện tại: "2131"
  Không có nhớ
-------------------------------------------
[LOG] Kết quả cuối: 1234 + 897 = 2131
===========================================
```

## Phiên bản

- **0.0.1** - Cài đặt thuật toán cơ bản, có logging từng bước, có unit test