import { Module } from '@nestjs/common';
import { Configmodule } from './config/config.module';
import { TypeormModule } from './typeorm/typeorm.module';
import { TodoModule } from './todo/todo.module';
import { AppController } from './app.controller';

@Module({
  imports: [Configmodule, TypeormModule, TodoModule],
  controllers: [AppController],
})

export class AppModule { }
