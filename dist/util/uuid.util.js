"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binToUuid = exports.uuidToBin = exports.generateNewUuidV1 = void 0;
const uuid_1 = require("uuid");
const generateNewUuidV1 = () => {
    return (0, uuid_1.v1)();
};
exports.generateNewUuidV1 = generateNewUuidV1;
const uuidToBin = (uuid) => {
    return Buffer.from(uuid.replace(/-/g, ''), 'hex');
};
exports.uuidToBin = uuidToBin;
const binToUuid = (binaryUuid) => {
    const hexUuid = binaryUuid.toString('hex');
    return `${hexUuid.slice(0, 8)}-${hexUuid.slice(8, 12)}-${hexUuid.slice(12, 16)}-${hexUuid.slice(16, 20)}-${hexUuid.slice(20)}`;
};
exports.binToUuid = binToUuid;
//# sourceMappingURL=uuid.util.js.map