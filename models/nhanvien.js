function nhanvien(_taikhoan, _hoten, _email, _matkhau, _ngaylamviec, _luong, _chucvu, _giolamviec){
    this.taikhoan = _taikhoan;
    this.hoten = _hoten;
    this.email = _email;
    this.matkhau = _matkhau;
    this.ngaylamviec = _ngaylamviec;
    this.luong = _luong;
    this.chucvu = _chucvu;
    this.giolamviec = _giolamviec;


    //method
    this.tongluong = function(){
        if(this.chucvu == "Sếp"){
            return this.luong*3;
        }else if(this.chucvu =="Trưởng phòng"){
            return this.luong*2;
        }else return this.luong;
    }

    this.xeploai = function(){
        if(this.giolamviec < 160){
            return 'nhân viên trung bình';
        }else if(this.giolamviec >= 160 && this.giolamviec < 176){
            return 'nhân viên khá';
        }else if(this.giolamviec >= 176 && this.giolamviec < 192){
            return 'nhân viên giỏi';
        }else return 'nhân viên xuất sắc';
    }
}