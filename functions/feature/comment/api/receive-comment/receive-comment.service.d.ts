import { HttpService } from "@nestjs/axios";
import { ReceiveCommentRequestDto, ReceiveCommentResponseDto } from "./dto";
export declare class ReceiveCommentService {
    private readonly httpService;
    constructor(httpService: HttpService);
    receiveComment(receiveCommentRequestDto: ReceiveCommentRequestDto): Promise<ReceiveCommentResponseDto>;
}
