/**
 * MyBigNumber - Lớp cộng 2 số lớn (biểu diễn dưới dạng chuỗi)
 * Thuật toán: giống học sinh Tiểu học - cộng từ phải sang trái, có nhớ
 * Version: 0.0.1
 */
class MyBigNumber {

  /**
   * Cộng 2 số lớn được truyền vào dưới dạng chuỗi
   * @param {string} stn1 - Số thứ nhất (ví dụ: "1234")
   * @param {string} stn2 - Số thứ hai (ví dụ: "897")
   * @returns {string} - Tổng (ví dụ: "2131")
   */
  sum(stn1, stn2) {
    console.log("===========================================");
    console.log(`[LOG] Bắt đầu tính: ${stn1} + ${stn2}`);
    console.log("===========================================");

    // Kết quả lưu dưới dạng chuỗi, ban đầu rỗng
    let ketQua = "";

    // Số nhớ, ban đầu là 0
    let nho = 0;

    // Chỉ số duyệt từ phải sang trái
    // i là vị trí cuối của stn1, j là vị trí cuối của stn2
    let i = stn1.length - 1;
    let j = stn2.length - 1;

    // Bước đếm để log cho dễ đọc
    let buoc = 1;

    // Lặp khi còn ký số ở stn1 hoặc stn2, hoặc còn nhớ
    while (i >= 0 || j >= 0 || nho > 0) {

      // Lấy ký số hiện tại của stn1 (nếu hết thì lấy 0)
      let kyso1 = 0;
      if (i >= 0) {
        kyso1 = parseInt(stn1[i]); // Chuyển ký tự → ký số
        i--;
      }

      // Lấy ký số hiện tại của stn2 (nếu hết thì lấy 0)
      let kyso2 = 0;
      if (j >= 0) {
        kyso2 = parseInt(stn2[j]);
        j--;
      }

      // Tính tổng = kyso1 + kyso2 + nhớ từ bước trước
      let tong = kyso1 + kyso2 + nho;

      // Lấy chữ số để lưu vào kết quả (phần đơn vị)
      let luuVaoKetQua = tong % 10;

      // Cập nhật số nhớ cho bước tiếp theo (phần hàng chục)
      let nhoMoi = Math.floor(tong / 10);

      // Ghi lại kết quả mới (thêm vào đầu vì đang đi từ phải sang trái)
      ketQua = luuVaoKetQua.toString() + ketQua;

      // --- LOGGING từng bước ---
      console.log(`[BƯỚC ${buoc}]`);
      console.log(`  Lấy ${kyso1} cộng với ${kyso2} được ${kyso1 + kyso2}`);
      if (nho > 0) {
        console.log(`  Cộng tiếp với nhớ ${nho} được ${tong}`);
      }
      console.log(`  Lưu ${luuVaoKetQua} vào kết quả → kết quả hiện tại: "${ketQua}"`);
      if (nhoMoi > 0) {
        console.log(`  Ghi nhớ ${nhoMoi} cho bước tiếp theo`);
      } else {
        console.log(`  Không có nhớ`);
      }
      console.log("-------------------------------------------");

      // Cập nhật số nhớ
      nho = nhoMoi;
      buoc++;
    }

    console.log(`[LOG] Kết quả cuối: ${stn1} + ${stn2} = ${ketQua}`);
    console.log("===========================================\n");

    return ketQua;
  }
}

// Export để dùng ở nơi khác (unit test, v.v.)
module.exports = MyBigNumber;