"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModule = void 0;
const common_1 = require("@nestjs/common");
const receive_comment_service_1 = require("./api/receive-comment/receive-comment.service");
const receive_comment_controller_1 = require("./api/receive-comment/receive-comment.controller");
const send_comment_service_1 = require("./api/send-comment/send-comment.service");
const send_comment_controller_1 = require("./api/send-comment/send-comment.controller");
const send_comment_gateway_1 = require("./api/send-comment/send-comment.gateway");
const receive_comment_gateway_1 = require("./api/receive-comment/receive-comment.gateway");
const reply_comment_service_1 = require("./api/reply-comment/reply-comment.service");
const reply_comment_gateway_1 = require("./api/reply-comment/reply-comment.gateway");
let CommentModule = class CommentModule {
};
CommentModule = __decorate([
    (0, common_1.Module)({
        providers: [
            receive_comment_service_1.ReceiveCommentService,
            send_comment_service_1.SendCommentService,
            reply_comment_service_1.ReplyCommentService,
            send_comment_gateway_1.SendCommentGateway,
            receive_comment_gateway_1.ReceiveCommentGateway,
            reply_comment_gateway_1.ReplyCommentGateway,
        ],
        controllers: [receive_comment_controller_1.ReceiveCommentController, send_comment_controller_1.SendCommentController],
    })
], CommentModule);
exports.CommentModule = CommentModule;
//# sourceMappingURL=comment.module.js.map