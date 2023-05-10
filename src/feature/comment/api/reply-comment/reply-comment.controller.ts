import { Controller, Post, Body, Headers } from '@nestjs/common';
import { ReplyCommentRequestDto, ReplyCommentResponseDto } from './dto';
import { ReplyCommentGateway } from './reply-comment.gateway';
import { ReplyCommentService } from './reply-comment.service';

@Controller()
export class ReplyCommentController {
  constructor(
    private readonly replyCommentGateway: ReplyCommentGateway,
    private readonly replyCommentService: ReplyCommentService,
  ) { }
  @Post('reply')
  async sendComment(
    @Body() replyCommentRequestDto: ReplyCommentRequestDto,
    @Headers('X-Api-Key') apiKey: string,
  ): Promise<ReplyCommentResponseDto> {
    var replyCommentResponseDto: ReplyCommentResponseDto =
      await this.replyCommentService.sendComment(replyCommentRequestDto, apiKey);
    this.replyCommentGateway.server.emit(`receive-comment-${replyCommentRequestDto.parent_id}`,
      replyCommentResponseDto.data);
    return replyCommentResponseDto;
  }
}

