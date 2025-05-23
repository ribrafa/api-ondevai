import { DataSource } from 'typeorm';
import { CIDADE } from './cidade.entity';

export const cidadeProviders = [
  {
    provide: 'CIDADE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CIDADE),
    inject: ['DATA_SOURCE'],
  },
];