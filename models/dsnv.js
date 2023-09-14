function DSNV(){
    this.staff = [];

    this._themND = function(n){
        this.staff.push(n);
    }

    // Phương thức tìm vị trí nhân viên
    this._timvitriNV = function(taikhoan){
        // Tìm vị trí
        //     index = -1
        //     Duyệt mảng => lấy từng object nhân viên
        //                =>{taikhoan, hoten, email, ...}
        //                => so sánh cái tài khoản trong object bằng taikhoan truyền vào
        //                => gán lại vị trí index =i, break;
        //                => không tìm thấy sinh viên khi index = -1;
        var index = -1;
        for(var i = 0; i < this.staff.length; i++){
            var nv = this.staff[i];
            if(nv.taikhoan == taikhoan){
                index = i; 
                break;
            }
        }
        return index;
    }

    // button xoá nhân viên
    this._xoaNV = function(taikhoan){
        var index = this._timvitriNV(taikhoan);
        if(index !== 1){
            //xoá phần tử của mảng: dùng splice dựa vào vị trí và số lượng cần xoá
            this.staff.splice(index,1);
        }
    }

    this._LaythongtinNV = function(taikhoan){
        var index = this._timvitriNV(taikhoan);
        if(index !== -1){
            var nv = this.staff[index];
            return nv;
        }
    }

    this._CapNhatNV = function(Employee){
       var index = this._timvitriNV(Employee.taikhoan);
       
       if(index !== -1){
        this.staff[index] = Employee;
       }
    }
}