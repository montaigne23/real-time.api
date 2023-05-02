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
exports.SendCommentGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const dto_1 = require("./dto");
const socket_io_1 = require("socket.io");
const send_comment_service_1 = require("./send-comment.service");
let SendCommentGateway = class SendCommentGateway {
    constructor(sendCommentService) {
        this.sendCommentService = sendCommentService;
        this.connectedClients = [];
    }
    afterInit() {
    }
    handleConnection(client, ...args) {
        console.log(`Client connected: ${client.id}`);
        this.connectedClients.push(client);
    }
    handleDisconnect(client) {
        console.log(`Client disconnected: ${client.id}`);
        this.connectedClients = this.connectedClients.filter((c) => c !== client);
    }
    async sendComment(data, client) {
        return;
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], SendCommentGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('send-comment'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SendCommentRequestDto,
        socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], SendCommentGateway.prototype, "sendComment", null);
SendCommentGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: { origin: '*' } }),
    __metadata("design:paramtypes", [send_comment_service_1.SendCommentService])
], SendCommentGateway);
exports.SendCommentGateway = SendCommentGateway;
//# sourceMappingURL=send-comment.gateway.js.map