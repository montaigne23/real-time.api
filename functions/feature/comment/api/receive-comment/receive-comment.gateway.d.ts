import { WsResponse } from "@nestjs/websockets";
import { Server } from "socket.io";
import { ReceiveCommentRequestDto, ReceiveCommentResponseDto } from "./dto";
import { ReceiveCommentService } from "./receive-comment.service";
export declare class ReceiveCommentGateway {
    private readonly receiveCommentService;
    constructor(receiveCommentService: ReceiveCommentService);
    server: Server;
    sendComment(data: ReceiveCommentRequestDto): Promise<WsResponse<ReceiveCommentResponseDto>>;
}
