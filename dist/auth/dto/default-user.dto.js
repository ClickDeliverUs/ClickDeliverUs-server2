"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInDto = exports.DefaultUserDto = void 0;
class DefaultUserDto {
    constructor(email, password) {
        Object.assign(email, password);
    }
}
exports.DefaultUserDto = DefaultUserDto;
class SignInDto extends DefaultUserDto {
    constructor(id, password, tel, address) {
        super(id, password);
        Object.assign(id, password, tel, address);
    }
}
exports.SignInDto = SignInDto;
//# sourceMappingURL=default-user.dto.js.map