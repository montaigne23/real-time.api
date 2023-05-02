import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
export declare class AuthService {
    private readonly configService;
    private readonly httpService;
    private readonly apiKey;
    constructor(configService: ConfigService, httpService: HttpService);
    isValidApiKey(apiKey: string): Promise<boolean>;
}
