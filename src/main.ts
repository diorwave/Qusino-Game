import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5000
  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle("Cusino Game Backend API")                  // API title
    .setDescription("This is Cusino Game backend API")
    .setVersion("1.0")
    .addTag("tests")                                 // Optional Tag
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document); // Swagger UI available at /api
  await app.listen(port);
  console.log(`Server is running on port ${port}`)

}
bootstrap();
