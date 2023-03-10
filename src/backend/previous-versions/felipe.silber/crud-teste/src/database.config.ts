import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PersonModel } from './models/person.model';

const connectionOptions: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: './db.sql',
  entities: [PersonModel],
  synchronize: true,
};

export default connectionOptions;