"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const comment_module_1 = require("./feature/comment/comment.module");
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
const http_config_1 = require("./config/http.config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => new http_config_1.HttpConfig().get({ configService }),
            }),
            comment_module_1.CommentModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                expandVariables: true,
            }),
            core_1.RouterModule.register([{ module: comment_module_1.CommentModule, path: 'api/comments' }]),
        ],
        exports: [axios_1.HttpModule],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map