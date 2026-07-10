import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix("api/v1");

  const config = new DocumentBuilder()
    .setTitle('TaskSphere API')
    .setDescription('The TaskSphere Todo application REST API documentation.')
    .setVersion('1.0')
    .addTag('Todo')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  console.log("Application is running on port :", process.env.PORT);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
