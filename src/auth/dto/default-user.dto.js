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
exports.__esModule = true;
exports.SignInDto = exports.DefaultUserDto = void 0;
var DefaultUserDto = /** @class */ (function () {
    function DefaultUserDto(email, password) {
        Object.assign(email, password);
    }
    return DefaultUserDto;
}());
exports.DefaultUserDto = DefaultUserDto;
var SignInDto = /** @class */ (function (_super) {
    __extends(SignInDto, _super);
    function SignInDto(id, password, tel, address) {
        var _this = _super.call(this, id, password) || this;
        Object.assign(id, password, tel, address);
        return _this;
    }
    return SignInDto;
}(DefaultUserDto));
exports.SignInDto = SignInDto;
