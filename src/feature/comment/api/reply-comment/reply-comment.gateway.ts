import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
  ConnectedSocket ,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { ReplyCommentRequestDto, ReplyCommentResponseDto } from "./dto";
import { ReplyCommentService } from "./reply-comment.service";

@WebSocketGateway({ cors: { origin: "*" } })
export class ReplyCommentGateway {
  constructor(private readonly replyCommentService: ReplyCommentService) {}
  @WebSocketServer() server: Server;

  @SubscribeMessage("receive-comment")
  async sendComment(
    @MessageBody() data: ReplyCommentRequestDto,
  ): Promise<WsResponse<ReplyCommentResponseDto>> {
    const replyCommentResponseDto: ReplyCommentResponseDto =
      await this.replyCommentService.replyComment(data);
    return { event: "receive-comment", data: replyCommentResponseDto };
  }
}
