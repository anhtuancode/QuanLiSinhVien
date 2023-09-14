function KiemTraRong(value, idError, message){
    if(value.trim() === ''){

        document.querySelector(idError).innerHTML = message;
        return false;
    }else{
        document.querySelector(idError).innerHTML = '';
        return true;
    }
}

function KiemTraEmail(value, idError, message){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var isEmail = re.test(value);
  if(isEmail){
    document.querySelector(idError).innerHTML = '';
    return true;
  }else{
    document.querySelector(idError).innerHTML = message;
    return false;
  }
}

function kiemTraMatKhau(value, idErr, message) {
  const re =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;

  var isPassword = re.test(value);
  if (isPassword) {
    document.querySelector(idErr).innerHTML = "";
    return true;
  } else {
    document.querySelector(idErr).innerHTML = message;
    return false;
  }
}

function kiemTraDoDai(value, min, max, idErr, message) {
  var length = value.length;
  if (length >= min && length <= max) {
    document.querySelector(idErr).innerHTML = "";
    return true;
  } else {
    document.querySelector(idErr).innerHTML = message;
    return false;
  }
}

function kiemTraTrung(id, dsnv, idErr, message) {
  // findIndex: tìm vị trí index, khi mà thỏa điều kiện tìm thấy thì trả về vị trí index, còn khi ko thỏa điều kiện/ko tìm thấy thì trả về về -1
  var viTri = dsnv.findIndex(function (nv) {
    return nv.taikhoan == id;
  });
  if (viTri != -1) {
    //  tìm thấy
    document.querySelector(idErr).innerHTML = message;
    return false;
  } else {
    document.querySelector(idErr).innerHTML = "";
    return true;
  }
}

function kiemTraSo(value, idErr, message) {
  const re = /^[0-9]+$/;

  var isString = re.test(value);
  console.log("isString: ", isString);
  if (isString) {
    document.querySelector(idErr).innerHTML = "";
    return true;
  } else {
    document.querySelector(idErr).innerHTML = message;
    return false;
  }
}


function kiemTraChu(value, idErr, message) {
  const re = /^[0-9]+$/;

  var isString = re.test(value);
  console.log("isString: ", isString);
  if (isString) {
    document.querySelector(idErr).innerHTML = message;
    return false;
  } else {
    document.querySelector(idErr).innerHTML = "";
    return true;
  }
}

function KiemtraChucVu(value, idErr, message){
  if(value === "Chọn chức vụ"){
    document.querySelector(idErr).innerHTML = message;
    return false; 
  }else{
    document.querySelector(idErr).innerHTML = "";
    return true;
  }
}

function KiemtraMinmax(value, min, max, idErr, message){
  if(value < min || value > max){
    document.querySelector(idErr).innerHTML = message;
    return false;
  }else{
    document.querySelector(idErr).innerHTML = "";
    return true;
  }
}


function Kiemtraluong(value, idErr, message){
  if(value === 0){
    document.querySelector(idErr).innerHTML = message;
    return false;
  }else{
    document.querySelector(idErr).innerHTML = "";
    return true;
  }
}
