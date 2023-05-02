import { IBaseConfig } from './base/i-base-config';
import { ConfigService } from '@nestjs/config';
import { HttpModuleOptions } from '@nestjs/axios';
export declare class HttpConfig implements IBaseConfig<{
    configService: ConfigService;
}, HttpModuleOptions> {
    get(deps: {
        configService: ConfigService;
    }): HttpModuleOptions;
}
