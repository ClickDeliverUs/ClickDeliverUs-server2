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
exports.MemberCRUD = void 0;
const common_1 = require("@nestjs/common");
const auth_entity_1 = require("../auth.entity");
const typeorm_1 = require("typeorm");
const uuid_util_1 = require("../../util/uuid.util");
let MemberCRUD = class MemberCRUD extends typeorm_1.Repository {
    constructor(dataSource) {
        super(auth_entity_1.UserEntity, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async saveUser(signUpReqDto) {
        const { uuid, name, nickName, id, password, birth, gender, address, isAdult } = signUpReqDto;
        const UuidToBin = (0, uuid_util_1.uuidToBin)(uuid);
        try {
            const test = this.create({
                name,
                nickName,
                id,
                password,
                birth: new Date(birth),
                address,
                gender,
                isAdult,
                uuid: UuidToBin,
                createdDT: new Date(),
            });
            await test.save();
            return true;
        }
        catch (err) {
            if (err.code == 'ER_DUP_ENTRY') {
                return null;
            }
            else {
                throw new common_1.InternalServerErrorException('DB error ocurred');
            }
        }
    }
    async findUser(id) {
        try {
            const user = await this.findOneBy({ id });
            if (user) {
                return true;
            }
            else {
                return null;
            }
        }
        catch (err) {
            console.log('DB error ocurred(User finding process): ${id}');
            throw new common_1.InternalServerErrorException('DB error ocurred');
        }
    }
};
MemberCRUD = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], MemberCRUD);
exports.MemberCRUD = MemberCRUD;
//# sourceMappingURL=auth.repository.js.map