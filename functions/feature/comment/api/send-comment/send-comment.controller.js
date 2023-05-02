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
exports.SendCommentController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
const send_comment_gateway_1 = require("./send-comment.gateway");
const send_comment_service_1 = require("./send-comment.service");
let SendCommentController = class SendCommentController {
    constructor(sendCommentGateway, sendCommentService) {
        this.sendCommentGateway = sendCommentGateway;
        this.sendCommentService = sendCommentService;
    }
    async sendComment(sendCommentRequestDto, apiKey) {
        var sendCommentResponseDto = await this.sendCommentService.sendComment(sendCommentRequestDto, apiKey);
        this.sendCommentGateway.server.emit(`receive-comment-${sendCommentRequestDto.post_id}`, sendCommentResponseDto.data);
        return sendCommentResponseDto;
    }
};
__decorate([
    (0, common_1.Post)('send'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('X-Api-Key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SendCommentRequestDto, String]),
    __metadata("design:returntype", Promise)
], SendCommentController.prototype, "sendComment", null);
SendCommentController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [send_comment_gateway_1.SendCommentGateway,
        send_comment_service_1.SendCommentService])
], SendCommentController);
exports.SendCommentController = SendCommentController;
//# sourceMappingURL=send-comment.controller.js.map