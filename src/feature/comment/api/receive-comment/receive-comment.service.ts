import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { ReceiveCommentRequestDto, ReceiveCommentResponseDto } from "./dto";
import {
  ApiResponse,
  TFetchItemsResponse,
} from "../../../../core/models/types";

@Injectable()
export class ReceiveCommentService {
  constructor(private readonly httpService: HttpService) {}

  async receiveComment(
    receiveCommentRequestDto: ReceiveCommentRequestDto,
  ): Promise<ReceiveCommentResponseDto> {
    return await this.httpService
      .get<ApiResponse<TFetchItemsResponse<Comment>>>(
        `/posts/comments/fetch-ids?id=${receiveCommentRequestDto.postId}`,
      )
      .toPromise()
      .then((r) => ({
        success: true,
        data: r.data.data.items[0],
      }));
  }
}
