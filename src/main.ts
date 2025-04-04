import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita o CORS
  app.enableCors({
    origin: 'http://localhost:5173', // Adapte o URL para o seu frontend (por exemplo, onde está rodando o seu frontend local)
    methods: 'GET,PUT,POST,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Accept', // Cabeçalhos permitidos
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
