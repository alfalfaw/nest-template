import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  // set global prefix
  app.setGlobalPrefix('api/private/v1')
  const options = new DocumentBuilder()
    .setTitle('Title')
    .setDescription('description')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api-docs', app, document)
  global.console.log('http://localhost:3000/api-docs/')
  await app.listen(3000)
}
bootstrap()
