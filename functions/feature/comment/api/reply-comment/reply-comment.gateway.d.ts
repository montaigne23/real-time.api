import { WsResponse } from "@nestjs/websockets";
import { Server } from "socket.io";
import { ReplyCommentRequestDto, ReplyCommentResponseDto } from "./dto";
import { ReplyCommentService } from "./reply-comment.service";
export declare class ReplyCommentGateway {
    private readonly replyCommentService;
    constructor(replyCommentService: ReplyCommentService);
    server: Server;
    sendComment(data: ReplyCommentRequestDto): Promise<WsResponse<ReplyCommentResponseDto>>;
}
