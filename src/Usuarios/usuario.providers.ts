import { DataSource } from 'typeorm';
import { USUARIO } from './usuarios.entity';

export const usuarioProviders = [
  {
    provide: 'USUARIO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(USUARIO),
    inject: ['DATA_SOURCE'],
  },
];