import { HttpService } from "@nestjs/axios";
import { ReplyCommentRequestDto, ReplyCommentResponseDto } from "./dto";
export declare class ReplyCommentService {
    private readonly httpService;
    constructor(httpService: HttpService);
    replyComment(replyCommentRequestDto: ReplyCommentRequestDto): Promise<ReplyCommentResponseDto>;
}
