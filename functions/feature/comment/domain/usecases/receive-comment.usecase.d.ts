import { IUsecase } from '../../../../core/ports/usecase/IUsecase';
import { ReceiveCommentRequestDto, ReceiveCommentResponseDto } from '../../api/receive-comment/dto';
export declare class ReceiveCommentUsecase implements IUsecase<ReceiveCommentRequestDto, ReceiveCommentResponseDto> {
    execute(input: ReceiveCommentRequestDto): Promise<ReceiveCommentResponseDto>;
}
