import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const PORT = configService.get<number>('APP_PORT');

  await app.listen(PORT, () =>
    console.log(`Application bootstrap on port ${PORT} `),
  );
}
bootstrap().then();
