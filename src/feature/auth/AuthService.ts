import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private readonly apiKey: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.apiKey = this.configService.get<string>('API_KEY');
  }

  async isValidApiKey(apiKey: string): Promise<boolean> {
    const url = this.configService.get<string>('API_KEY_VALIDATION_URL');
    const headers = {
      'X-Api-Key': this.apiKey,
    };
    const response = await this.httpService
      .post(url, {}, { headers })
      .pipe(map((res) => res.data))
      .toPromise();
    return response.isValid;
  }
}
