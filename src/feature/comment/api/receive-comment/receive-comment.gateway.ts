import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from "@nestjs/websockets";
import { Server } from "socket.io";
import { ReceiveCommentRequestDto, ReceiveCommentResponseDto } from "./dto";
import { ReceiveCommentService } from "./receive-comment.service";

@WebSocketGateway({ cors: { origin: "*" } })
export class ReceiveCommentGateway {
  constructor(private readonly receiveCommentService: ReceiveCommentService) {}

  @WebSocketServer() server: Server;

  @SubscribeMessage("reply-comment")
  async sendComment(
    @MessageBody() data: ReceiveCommentRequestDto,
  ): Promise<WsResponse<ReceiveCommentResponseDto>> {
    const receiveCommentResponseDto: ReceiveCommentResponseDto =
      await this.receiveCommentService.receiveComment(data);

    return { event: "reply-comment", data: receiveCommentResponseDto };
  }
}
