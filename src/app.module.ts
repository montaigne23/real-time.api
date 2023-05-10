import { Global, Module } from '@nestjs/common';
import { CommentModule } from './feature/comment/comment.module';
import { RouterModule } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { HttpConfig } from './config/http.config';
import { MemoryStoredFile, NestjsFormDataModule } from 'nestjs-form-data';

@Global()
@Module({
  imports: [
    NestjsFormDataModule.config({ storage: MemoryStoredFile }),
    HttpModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        new HttpConfig().get({ configService }),
    }),
    CommentModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      expandVariables: true,
    }),
    RouterModule.register([{ module: CommentModule, path: 'api/comments' }]),
  ],
  exports: [HttpModule],
})
export class AppModule {}
