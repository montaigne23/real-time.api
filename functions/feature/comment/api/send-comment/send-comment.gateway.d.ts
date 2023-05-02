import { OnGatewayConnection, OnGatewayInit, WsResponse } from '@nestjs/websockets';
import { SendCommentRequestDto, SendCommentResponseDto } from './dto';
import { Server, Socket } from 'socket.io';
import { SendCommentService } from './send-comment.service';
export declare class SendCommentGateway implements OnGatewayInit, OnGatewayConnection {
    private readonly sendCommentService;
    constructor(sendCommentService: SendCommentService);
    afterInit(): void;
    server: Server;
    connectedClients: Socket[];
    handleConnection(client: Socket, ...args: any[]): void;
    handleDisconnect(client: Socket): void;
    sendComment(data: SendCommentRequestDto, client: Socket): Promise<WsResponse<SendCommentResponseDto>>;
}
