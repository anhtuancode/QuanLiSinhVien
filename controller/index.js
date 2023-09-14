var dsnv = new DSNV();

var dataJson = localStorage.getItem("DSNV");
console.log("dataJson: ", dataJson);
if (dataJson !== null) {
  dsnv.staff = JSON.parse(dataJson).map(function (item) {
    return new nhanvien(
      item.taikhoan,
      item.hoten,
      item.email,
      item.matkhau,
      item.ngaylamviec,
      item.luong,
      item.chucvu,
      item.giolamviec
    );
  });
  rendertable(dsnv.staff);
}

function LayThongTinTuForm() {
  // Lấy thông tin từ form
  var taikhoan = getElm("#tknv").value;
  var hoten = getElm("#name").value;
  var email = getElm("#email").value;
  var matkhau = getElm("#password").value;
  var ngaylamviec = getElm("#datepicker").value;
  var luong = getElm("#luongCB").value;
  var chucvu = getElm("#chucvu").value;
  var giolamviec = getElm("#gioLam").value;

  return new nhanvien(
    taikhoan,
    hoten,
    email,
    matkhau,
    ngaylamviec,
    luong,
    chucvu,
    giolamviec
  );
}

function getElm(selector) {
  return document.querySelector(selector);
}

function rendertable(listArray) {
  //listArray là tham số có kiểu dữ liệu là mảng
  //innerHTML xuất ra màn hình list nhân viên
  var htmlString = "";

  for (var i = 0; i < listArray.length; i++) {
    var nhanVien = listArray[i];
    htmlString += `<tr>
            <td>${nhanVien.taikhoan}</td>
            <td>${nhanVien.hoten}</td>
            <td>${nhanVien.email}</td>
            <td>${nhanVien.ngaylamviec}</td>
            <td>${nhanVien.chucvu}</td>
            <td>${nhanVien.tongluong()}</td>
            <td>${nhanVien.xeploai()}</td>
            <td>
                <button class="btn btn-waring" data-toggle="modal"
									data-target="#myModal" onclick = "suaNV(${
                    nhanVien.taikhoan
                  })">Chỉnh sửa</button>
                <button class="btn btn-waring" onclick = "xoaNV('${
                  nhanVien.taikhoan
                }')">Xoá</button>
            </td>
        </tr>`;
  }

  getElm("#tableDanhSach").innerHTML = htmlString;
}

function themND() {
  var NV = LayThongTinTuForm();

  // //kiểm tra tất cả input hợp lệ thì mới thêm nhân viên
  var valid = true;

  valid &=
    KiemTraRong(NV.taikhoan, "#tbTKNV", "Tài khoản không được để trống !") &&
    kiemTraTrung(
      NV.taikhoan,
      dsnv.staff,
      "#tbTKNV",
      "Tài khoản này đã tồn tại"
    ) &&
    kiemTraDoDai(
      NV.taikhoan,
      4,
      6,
      "#tbTKNV",
      "Tài khoản tối đa là 4 - 6 ký số"
    );

  valid &=
    KiemTraRong(NV.hoten, "#tbTen", "Họ tên không được để trống") &&
    kiemTraChu(NV.hoten, "#tbTen", "Tên nhân viên phải là chữ");

  //kiểm tra định dạng của email
  valid &=
    KiemTraRong(NV.email, "#tbEmail", "Email không được để trống !") &&
    KiemTraEmail(NV.email, "#tbEmail", "Email phải đúng định dạng!");

  valid &=
    kiemTraDoDai(
      NV.matkhau,
      6,
      10,
      "#tbMatKhau",
      "Mật khẩu phải từ 6-10 kí tự"
    ) &&
    kiemTraMatKhau(
      NV.matkhau,
      "#tbMatKhau",
      "Chứa ít nhất 1 kí tự số, 1 ký tự in hoa, 1 ký tự đặt biệt"
    );

  valid &= KiemtraMinmax(
    NV.luong,
    1000000,
    20000000,
    "#tbLuongCB",
    "Lương cơ bản phải từ 1000000 - 20000000"
  );

  valid &= KiemtraChucVu(NV.chucvu, "#tbChucVu", "Vui lòng chọn chức vụ");

  valid &= KiemtraMinmax(
    NV.giolamviec,
    80,
    200,
    "#tbGiolam",
    "Số giờ làm việc trong tháng phải từ 80 - 200 giờ"
  );

  if (valid) {
    dsnv._themND(NV);
    var data = JSON.stringify(dsnv.staff);
    console.log("data: ", data);

    // lưu data xuống localStorage
    localStorage.setItem("DSNV", data);
    rendertable(dsnv.staff);
  }
}

function xoaNV(taikhoan) {
  dsnv._xoaNV(taikhoan);
  rendertable(dsnv.staff);
}

function suaNV(taikhoan) {
  var nv = dsnv._LaythongtinNV(taikhoan);
  if (nv) {
    getElm("#tknv").value = nv.taikhoan;
    getElm("#tknv").disabled = true;
    getElm("#name").value = nv.hoten;
    getElm("#email").value = nv.email;
    getElm("#password").value = nv.matkhau;
    getElm("#datepicker").value = nv.ngaylamviec;
    getElm("#luongCB").value = nv.luong;
    getElm("#chucvu").value = nv.chucvu;
    getElm("#gioLam").value = nv.giolamviec;
  }
}

function CapNhatNV() {
  var nv = LayThongTinTuForm();
  dsnv._CapNhatNV(nv);
  rendertable(dsnv.staff);
}

//tìm kiếm
document.querySelector("#btnTimNV").onclick = function () {
  var textSearch = document
    .querySelector("#searchName")
    .value.trim()
    ?.toLowerCase();
  var result = [];

  if (textSearch.length > 0) {
    result = dsnv.staff.filter(function (nv) {
      return nv.xeploai().toLowerCase().includes(textSearch);
    });

    rendertable(result);
  } else {
    rendertable(dsnv.staff);
  }
};
