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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCommentGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const dto_1 = require("./dto");
const reply_comment_service_1 = require("./reply-comment.service");
let ReplyCommentGateway = class ReplyCommentGateway {
    constructor(replyCommentService) {
        this.replyCommentService = replyCommentService;
    }
    async sendComment(data) {
        const replyCommentResponseDto = await this.replyCommentService.replyComment(data);
        return { event: "receive-comment", data: replyCommentResponseDto };
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ReplyCommentGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)("receive-comment"),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ReplyCommentRequestDto]),
    __metadata("design:returntype", Promise)
], ReplyCommentGateway.prototype, "sendComment", null);
ReplyCommentGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: { origin: "*" } }),
    __metadata("design:paramtypes", [reply_comment_service_1.ReplyCommentService])
], ReplyCommentGateway);
exports.ReplyCommentGateway = ReplyCommentGateway;
//# sourceMappingURL=reply-comment.gateway.js.map