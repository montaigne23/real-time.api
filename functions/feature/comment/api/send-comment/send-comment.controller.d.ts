import { SendCommentRequestDto, SendCommentResponseDto } from './dto';
import { SendCommentGateway } from './send-comment.gateway';
import { SendCommentService } from './send-comment.service';
export declare class SendCommentController {
    private readonly sendCommentGateway;
    private readonly sendCommentService;
    constructor(sendCommentGateway: SendCommentGateway, sendCommentService: SendCommentService);
    sendComment(sendCommentRequestDto: SendCommentRequestDto, apiKey: string): Promise<SendCommentResponseDto>;
}
