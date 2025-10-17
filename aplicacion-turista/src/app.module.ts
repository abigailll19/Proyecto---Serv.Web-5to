import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'test',
      entities: [Usuario],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
