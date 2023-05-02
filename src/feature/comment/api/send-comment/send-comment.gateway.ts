import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
  ConnectedSocket,
} from '@nestjs/websockets';
import { SendCommentRequestDto, SendCommentResponseDto } from './dto';
import { Server, Socket } from 'socket.io';
import { SendCommentService } from './send-comment.service';
import { OnApplicationBootstrap } from '@nestjs/common';
import { AuthService } from 'src/feature/auth/AuthService';

@WebSocketGateway({ cors: { origin: '*' } })
export class SendCommentGateway implements OnGatewayInit, OnGatewayConnection {
  constructor(
    private readonly sendCommentService: SendCommentService,
    // private readonly authService: AuthService
  ) { }

  afterInit() {
    //  console.log('WebSocket initialized');
  }

  // async onApplicationBootstrap() {
  //   this.server.use((socket, next) => {
  //     const apiKey = socket.handshake.headers['x-api-key'];
  //     if (!apiKey || !this.authService.isValidApiKey((Array.isArray(apiKey) ? apiKey[0] : apiKey))) {
  //       return next(new Error('Unauthorized'));
  //     }
  //     return next();
  //   });
  // }

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

  @SubscribeMessage('send-comment')
  async sendComment(
    @MessageBody() data:SendCommentRequestDto,
    @ConnectedSocket() client: Socket,
  ): Promise<WsResponse<SendCommentResponseDto>> {
    return
  }
}
