import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { Servicio } from "./servicio.model";

@Entity("resenas")
export class Resena {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 200 })
  autor!: string;

  @Column({ type: "varchar", length: 300 })
  destino!: string; // Lugar o servicio reseñado

  @Column({ type: "text" })
  mensaje!: string;

  @Column({ type: "int", default: 5 })
  calificacion!: number; // 1 a 5 estrellas

  @CreateDateColumn()
  fecha!: Date;

  // 🔗 Relación con Servicio
  @ManyToOne(() => Servicio, (servicio) => servicio.resenas)
  servicio!: Servicio;
}
