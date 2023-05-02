import { SendCommentRequestDto, SendCommentResponseDto } from './dto';
import { HttpService } from '@nestjs/axios';
export declare class SendCommentService {
    private readonly httpService;
    constructor(httpService: HttpService);
    sendComment(data: SendCommentRequestDto, token: string): Promise<{
        success: boolean;
        data: SendCommentResponseDto;
    }>;
}
