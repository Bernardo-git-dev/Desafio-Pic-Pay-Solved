import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Ativa validação automática com base nos DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              // Remove campos não definidos no DTO
      forbidNonWhitelisted: true,  // Erro se enviar campo extra
      transform: true,             // Transforma string para number, etc.
    }),
  );

  await app.listen(3000);
  console.log(`🚀 API rodando em http://localhost:3000`);
}
bootstrap();
