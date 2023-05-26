"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConfig = void 0;
const auth_entity_1 = require("../auth/auth.entity");
const typeorm_naming_strategy_1 = __importDefault(require("typeorm-naming-strategy"));
exports.TypeOrmConfig = {
    type: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    namingStrategy: new typeorm_naming_strategy_1.default(),
    entities: [auth_entity_1.UserEntity],
};
exports.default = exports.TypeOrmConfig;
//# sourceMappingURL=typeorm.config.js.map