"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInResDto = void 0;
class SignInResDto {
    constructor(uuid, id, password, address, uid, age, name, gender, createdDT, isAdult) {
        this.uid = uid;
        this.uuid = uuid;
        this.name = name;
        this.id = id;
        this.password = password;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.createdDT = createdDT;
        this.isAdult = isAdult;
    }
}
exports.SignInResDto = SignInResDto;
//# sourceMappingURL=signin-res.dto.js.map