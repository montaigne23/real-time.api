import { IUsecase } from '../../../../core/ports/usecase/IUsecase';
import { SendCommentRequestDto, SendCommentResponseDto } from '../../api/send-comment/dto';
export declare class SendCommentUsecase implements IUsecase<SendCommentRequestDto, SendCommentResponseDto> {
    execute(input: SendCommentRequestDto): Promise<SendCommentResponseDto>;
}
