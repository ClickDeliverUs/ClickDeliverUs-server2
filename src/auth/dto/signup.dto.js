"use strict";
exports.__esModule = true;
exports.SignUpDto = void 0;
var SignUpDto = /** @class */ (function () {
    function SignUpDto(email, userName, password, isAdult, tel, birth, address) {
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.isAdult = isAdult;
        this.tel = tel;
        this.birth = birth;
        this.address = address;
    }
    return SignUpDto;
}());
exports.SignUpDto = SignUpDto;
