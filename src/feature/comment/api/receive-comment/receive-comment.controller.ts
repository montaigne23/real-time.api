import { Controller, Post } from "@nestjs/common";
import { ReceiveCommentResponseDto } from "./dto";

@Controller()
export class ReceiveCommentController {
  @Post()
  receiveComment(): Promise<ReceiveCommentResponseDto> {
    return;
  }
}
