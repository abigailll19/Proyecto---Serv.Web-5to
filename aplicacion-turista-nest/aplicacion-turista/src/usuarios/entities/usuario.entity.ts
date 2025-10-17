import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  nombre!: string;

  @Column()
  correo!: string

  @Column()
  contraseña!: string;

  @Column()
  tipo!: string;

  @Column()
  idiomaPreferido!: string;
}
