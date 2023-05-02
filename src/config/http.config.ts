import { IBaseConfig } from './base/i-base-config';
import { ConfigService } from '@nestjs/config';
import { HttpModuleOptions } from '@nestjs/axios';

export class HttpConfig
  implements IBaseConfig<{ configService: ConfigService }, HttpModuleOptions>
{
  get(deps: { configService: ConfigService }): HttpModuleOptions {
    return {
      url: deps.configService.get<'string'>('MAIN_API_URL'),
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'e83ee7cbe6d2ed3d897c9583d2f221cd',
      },
    };
  }
}
