import { Module } from "@nestjs/common";
import { ReceiveCommentService } from "./api/receive-comment/receive-comment.service";
import { ReceiveCommentController } from "./api/receive-comment/receive-comment.controller";
import { SendCommentService } from "./api/send-comment/send-comment.service";
import { SendCommentController } from "./api/send-comment/send-comment.controller";
import { SendCommentGateway } from "./api/send-comment/send-comment.gateway";
import { ReceiveCommentGateway } from "./api/receive-comment/receive-comment.gateway";
import { ReplyCommentService } from "./api/reply-comment/reply-comment.service";
import { ReplyCommentGateway } from "./api/reply-comment/reply-comment.gateway";
import { ReplyCommentController } from "./api/reply-comment/reply-comment.controller";

@Module({
  providers: [
    ReceiveCommentService,
    SendCommentService,
    ReplyCommentService,
    SendCommentGateway,
    ReceiveCommentGateway,
    ReplyCommentGateway,
  ],
  controllers: [ReceiveCommentController, SendCommentController, ReplyCommentController],
})
export class CommentModule {}
