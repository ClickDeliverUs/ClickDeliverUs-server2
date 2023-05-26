"use strict";
exports.__esModule = true;
exports.TypeOrmConfig = void 0;
var auth_entity_1 = require("../auth/auth.entity");
var typeorm_naming_strategy_1 = require("typeorm-naming-strategy");
exports.TypeOrmConfig = {
    type: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    namingStrategy: new typeorm_naming_strategy_1["default"](),
    entities: [auth_entity_1.UserEntity]
};
exports["default"] = exports.TypeOrmConfig;
