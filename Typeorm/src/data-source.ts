import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { LugaresTuristicos } from './entities/lugares_turisticos.model';
import { Atraccion } from './entities/atraccion.model';
import { Hotel } from './entities/hoteles.model';
import { Restaurante } from './entities/restaurantes.model';
import { GuiaCultural } from './entities/guia_culturaal.model';
import { MedioTransporte } from './entities/medio_transporte.model';
import { Resena } from './entities/resena.model';
import { Servicio } from './entities/servicio.model';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite', 
  synchronize: true, 
  logging: true,
  entities: [LugaresTuristicos, Atraccion, Hotel, Restaurante, GuiaCultural, MedioTransporte, Resena, Servicio], 
  migrations: [],
  subscribers: [],
});
