"use strict";
exports.__esModule = true;
exports.SignInResDto = void 0;
var SignInResDto = /** @class */ (function () {
    function SignInResDto(uuid, id, password, address, 
    //tel: string,
    uid, age, name, gender, createdDT, isAdult) {
        this.uid = uid;
        this.uuid = uuid;
        this.name = name;
        this.id = id;
        //this.tel = tel;
        this.password = password;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.createdDT = createdDT;
        this.isAdult = isAdult;
    }
    return SignInResDto;
}());
exports.SignInResDto = SignInResDto;
