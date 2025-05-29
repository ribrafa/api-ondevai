import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '50.116.112.16',
        port: 3306,
        username: 'vitali04_root_ondevai',
        password: 'ondevai123456789',
        database: 'vitali04_ondevai',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: false,
      });
      
      return dataSource.initialize();
    },
  },
];