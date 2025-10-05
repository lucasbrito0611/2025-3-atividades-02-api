import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from '../../src/tasks/tasks.module';
import { AppController } from '../../src/app.controller';
import { AppService } from '../../src/app.service'; // <- importe o service

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [__dirname + '/../../src/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService], // <- adicione o service
})
export class TestAppModule {}
