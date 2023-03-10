import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import connectionOptions from './database.config';
import { PersonModule } from './modules/person.module';


@Module({
  imports: [PersonModule, TypeOrmModule.forRoot(connectionOptions)],
})
export class AppModule {}
