"use strict";
exports.__esModule = true;
exports.binToUuid = exports.uuidToBin = exports.generateNewUuidV1 = void 0;
var uuid_1 = require("uuid");
var generateNewUuidV1 = function () {
    return (0, uuid_1.v1)();
};
exports.generateNewUuidV1 = generateNewUuidV1;
var uuidToBin = function (uuid) {
    return Buffer.from(uuid.replace(/-/g, ''), 'hex');
};
exports.uuidToBin = uuidToBin;
var binToUuid = function (binaryUuid) {
    var hexUuid = binaryUuid.toString('hex');
    return "".concat(hexUuid.slice(0, 8), "-").concat(hexUuid.slice(8, 12), "-").concat(hexUuid.slice(12, 16), "-").concat(hexUuid.slice(16, 20), "-").concat(hexUuid.slice(20));
};
exports.binToUuid = binToUuid;
