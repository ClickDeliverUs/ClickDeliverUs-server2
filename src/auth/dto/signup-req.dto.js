"use strict";
exports.__esModule = true;
exports.SignUpReqDto = void 0;
//name, nickName, id, password, birth, address, tel, gender, isAdult
var SignUpReqDto = /** @class */ (function () {
    function SignUpReqDto(name, nickName, id, password, age, birth, address, tel, gender, isAdult, uuid) {
        this.name = name;
        this.nickName = nickName;
        this.id = id;
        this.password = password;
        this.age = age;
        this.birth = birth;
        this.address = address;
        this.tel = tel;
        this.gender = gender;
        this.isAdult = isAdult;
        this.uuid = uuid;
    }
    return SignUpReqDto;
}());
exports.SignUpReqDto = SignUpReqDto;
