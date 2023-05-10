import { ReplyCommentRequestDto, ReplyCommentResponseDto } from './dto';
import { Injectable } from '@nestjs/common';
import { WsResponse } from '@nestjs/websockets';
import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig } from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ReplyCommentService {
  constructor(private readonly httpService: HttpService, private configService: ConfigService) { }
  /**
   * 
   * @param token 
   * @param data 
   * @returns 
  */  
 async sendComment(
   data:ReplyCommentRequestDto,
   token:string
   ){
    
    const MAIN_API_URL = this.configService.get<string>('MAIN_API_URL');
    const axiosConfig: AxiosRequestConfig = {
      headers: {
        'X-Api-Key': token,
        'Content-Type': 'multipart/form-data',
      },
    }; 
    console.log(data);
    // const formData = new FormData();
    // // formData.append('title', 'Mon titre');
    // formData.append('comment', "test");
    // formData.append('_comment', "test");
    // formData.append('post_id', "701");

    return this.httpService
      .post<ReplyCommentResponseDto>(
        `${MAIN_API_URL}/posts/comments`,
        data,
      axiosConfig
      )
      .toPromise()
      .then((r) => ({ success: true, data: r.data }));
    return;
  }
}
