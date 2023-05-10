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
  connectedClients: Socket[] = [];

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
    this.connectedClients.push(client);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    this.connectedClients = this.connectedClients.filter((c) => c !== client);
  }

  @SubscribeMessage('reply-comment')
  async sendComment(
    @MessageBody() data:ReplyCommentRequestDto,
    @ConnectedSocket() client: Socket,
  ): Promise<WsResponse<ReplyCommentResponseDto>> {
    return
  }
}
