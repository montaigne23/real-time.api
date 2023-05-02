import { SendCommentRequestDto, SendCommentResponseDto } from './dto';
import { Injectable } from '@nestjs/common';
import { WsResponse } from '@nestjs/websockets';
import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig } from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SendCommentService {
  constructor(private readonly httpService: HttpService) { }
/**
 * 
 * @param data 
 * @param token 
 * @returns 
 */  
  async sendComment(
    data:SendCommentRequestDto,
    token:string
  ){
    const axiosConfig: AxiosRequestConfig = {
      headers: {
        'X-Api-Key': token,
        'Content-Type': 'multipart/form-data',
      },
    }; 
    console.log(data);
    const formData = new FormData();
    // formData.append('title', 'Mon titre');
    formData.append('comment', "test");
    formData.append('_comment', "test");
    formData.append('post_id', "701");

    return this.httpService
      .post<SendCommentResponseDto>(
        `https://apidevtest.mendolearn.com/web/v2/posts/comments`,
        data,
      axiosConfig
      )
      .toPromise()
      .then((r) => ({ success: true, data: r.data }));
    return;
  }
}
