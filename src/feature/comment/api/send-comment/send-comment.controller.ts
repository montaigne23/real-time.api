import { Controller, Post, Body, Headers} from '@nestjs/common';
import { FormDataRequest} from 'nestjs-form-data';
import { SendCommentRequestDto, SendCommentResponseDto } from './dto';
import { SendCommentGateway } from './send-comment.gateway';
import { SendCommentService } from './send-comment.service';

@Controller()
export class SendCommentController {
  constructor(
    private readonly sendCommentGateway: SendCommentGateway,
    private readonly sendCommentService: SendCommentService,
  ) { }
  @Post('send')
  //@FormDataRequest()
  async sendComment(
    @Body() sendCommentRequestDto: SendCommentRequestDto,
    @Headers('X-Api-Key') apiKey: string,
  ): Promise<SendCommentResponseDto> {
    console.log(sendCommentRequestDto);
    
    var sendCommentResponseDto: SendCommentResponseDto =
      await this.sendCommentService.sendComment(sendCommentRequestDto, apiKey);
    this.sendCommentGateway.server.emit(`receive-comment-${sendCommentRequestDto.post_id}`,
      sendCommentResponseDto.data);
    return sendCommentResponseDto.data;
  }
}

