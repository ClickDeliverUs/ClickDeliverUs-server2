"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserEntity = void 0;
var typeorm_1 = require("typeorm");
var UserEntity = /** @class */ (function (_super) {
    __extends(UserEntity, _super);
    function UserEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' })
    ], UserEntity.prototype, "uid");
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ type: 'binary', length: 16 })
    ], UserEntity.prototype, "uuid");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 10 })
    ], UserEntity.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 10 })
    ], UserEntity.prototype, "nickName");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 14, unique: true })
    ], UserEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 14 })
    ], UserEntity.prototype, "password");
    __decorate([
        (0, typeorm_1.Column)({ type: 'date', nullable: false })
    ], UserEntity.prototype, "birth");
    __decorate([
        (0, typeorm_1.Column)({ type: 'boolean', nullable: false })
    ], UserEntity.prototype, "gender");
    __decorate([
        (0, typeorm_1.Column)({ length: 50, type: 'varchar', nullable: false })
    ], UserEntity.prototype, "address");
    __decorate([
        (0, typeorm_1.Column)({ type: 'date', nullable: false })
    ], UserEntity.prototype, "createdDT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'boolean', nullable: false })
    ], UserEntity.prototype, "isAdult");
    UserEntity = __decorate([
        (0, typeorm_1.Entity)()
    ], UserEntity);
    return UserEntity;
}(typeorm_1.BaseEntity));
exports.UserEntity = UserEntity;
