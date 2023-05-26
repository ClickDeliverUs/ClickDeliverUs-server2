"use strict";
exports.__esModule = true;
exports.SignUpResDto = void 0;
var SignUpResDto = /** @class */ (function () {
    function SignUpResDto(uid, uuid, name, id, tel, password, age, gender, address, createdDT, isAdult) {
        this.uid = uid;
        this.uuid = uuid;
        this.name = name;
        this.id = id;
        this.tel = tel;
        this.password = password;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.createdDT = createdDT;
        this.isAdult = isAdult;
    }
    return SignUpResDto;
}());
exports.SignUpResDto = SignUpResDto;
