import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useContainer } from 'class-validator'
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();


  app.useGlobalPipes(
    new ValidationPipe ({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true
    })
  )


  const config = new DocumentBuilder()
  .setTitle('API Eventos - OndeVaiEventosAPI')
  .setDescription(
    'A presente API tem como objetivo registrar Eventos no site OndeVai',
  )
  .setVersion('1.0')
  .addTag('evento')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
 
  useContainer(app.select(AppModule),{fallbackOnErrors: true})

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
