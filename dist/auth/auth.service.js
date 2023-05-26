"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const auth_repository_1 = require("./repository/auth.repository");
const uuid_util_1 = require("../util/uuid.util");
let AuthService = class AuthService {
    constructor(memberCRUD) {
        this.memberCRUD = memberCRUD;
    }
    async isDuplicateEmail(id) {
        const user = await this.memberCRUD.findUser(id);
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }
    async register(signUpReqDto) {
        const uuid = (0, uuid_util_1.generateNewUuidV1)();
        signUpReqDto.uuid = uuid;
        try {
            return await this.memberCRUD.saveUser(signUpReqDto);
        }
        catch (error) {
            throw new Error('회원가입에 실패했습니다.');
        }
    }
    async signIn(signInDto) {
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_repository_1.MemberCRUD])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map