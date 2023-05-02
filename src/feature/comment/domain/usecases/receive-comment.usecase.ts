import { IUsecase } from '../../../../core/ports/usecase/IUsecase';
import {
  ReceiveCommentRequestDto,
  ReceiveCommentResponseDto,
} from '../../api/receive-comment/dto';

export class ReceiveCommentUsecase
  implements IUsecase<ReceiveCommentRequestDto, ReceiveCommentResponseDto>
{
  execute(input: ReceiveCommentRequestDto): Promise<ReceiveCommentResponseDto> {
    return Promise.resolve(undefined);
  }
}
