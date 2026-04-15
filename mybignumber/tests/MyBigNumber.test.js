/**
 * Unit Test cho MyBigNumber.sum()
 * Sử dụng module assert có sẵn của Node.js (không cần cài thêm gì)
 * Chạy: node tests/MyBigNumber.test.js
 */
const assert = require("assert");
const MyBigNumber = require("../src/MyBigNumber");

// Tạo đối tượng để test
const myBigNumber = new MyBigNumber();

// Đếm số test pass / fail
let passed = 0;
let failed = 0;

/**
 * Hàm helper để chạy từng test case
 * @param {string} tenTest - Tên mô tả test case
 * @param {string} stn1 - Đầu vào số 1
 * @param {string} stn2 - Đầu vào số 2
 * @param {string} expected - Kết quả mong đợi
 */
function testCase(tenTest, stn1, stn2, expected) {
  try {
    const actual = myBigNumber.sum(stn1, stn2);
    assert.strictEqual(actual, expected);
    console.log(`  ✅ PASS: ${tenTest}`);
    console.log(`     ${stn1} + ${stn2} = ${actual}\n`);
    passed++;
  } catch (err) {
    console.log(`  ❌ FAIL: ${tenTest}`);
    console.log(`     Đầu vào: ${stn1} + ${stn2}`);
    console.log(`     Mong đợi: ${err.expected}`);
    console.log(`     Thực tế:  ${err.actual}\n`);
    failed++;
  }
}

// ============================================================
// CÁC TEST CASE
// ============================================================

console.log("============================================================");
console.log("  UNIT TEST - MyBigNumber.sum()");
console.log("============================================================\n");

// Test 1: Ví dụ trong đề bài
testCase(
  "Ví dụ đề bài: 1234 + 897",
  "1234", "897",
  "2131"
);

// Test 2: Hai số cùng độ dài
testCase(
  "Hai số cùng độ dài: 123 + 456",
  "123", "456",
  "579"
);

// Test 3: Có nhớ qua nhiều bước
testCase(
  "Có nhớ nhiều bước: 999 + 1",
  "999", "1",
  "1000"
);

// Test 4: Số 0 cộng với số khác
testCase(
  "Số 0 cộng với số bình thường: 0 + 12345",
  "0", "12345",
  "12345"
);

// Test 5: Hai số đều là 0
testCase(
  "Hai số đều là 0: 0 + 0",
  "0", "0",
  "0"
);

// Test 6: Số rất lớn (vượt giới hạn số nguyên JS)
testCase(
  "Số rất lớn: 99999999999999999999 + 1",
  "99999999999999999999", "1",
  "100000000000000000000"
);

// Test 7: Độ dài khác nhau nhiều
testCase(
  "Độ dài rất khác nhau: 1 + 9999",
  "1", "9999",
  "10000"
);

// Test 8: Hai số lớn có nhớ
testCase(
  "Hai số lớn: 9999 + 9999",
  "9999", "9999",
  "19998"
);

// ============================================================
// KẾT QUẢ TỔNG HỢP
// ============================================================
console.log("============================================================");
console.log(`  KẾT QUẢ: ${passed} PASS  |  ${failed} FAIL`);
console.log("============================================================");

if (failed > 0) {
  process.exit(1); // Exit code 1 = có test thất bại
}