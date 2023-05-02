import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { ReplyCommentRequestDto, ReplyCommentResponseDto } from "./dto";
import {
  ApiResponse,
  TFetchItemsResponse,
} from "../../../../core/models/types";
import { ConfigService } from "@nestjs/config";
import { HttpConfig } from "src/config/http.config";

@Injectable()
export class ReplyCommentService {
  constructor(private readonly httpService: HttpService,
    ) {
    }

  async replyComment(
    replyCommentRequestDto: ReplyCommentRequestDto,
  ): Promise<ReplyCommentResponseDto> {
    return this.httpService
      .get<ApiResponse<TFetchItemsResponse<Comment>>>(
        `/posts/comments/fetch-ids?comment_id=${replyCommentRequestDto.postId}`,
      )
      .toPromise()
      .then((r) => ({ success: true, data: r.data.data.items[0] }));
    return;
  }
}
