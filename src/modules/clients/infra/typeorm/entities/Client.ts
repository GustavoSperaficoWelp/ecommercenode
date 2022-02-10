import Order from "modules/orders/infra/typeorm/entities/Order";
import {
  Column,
  CreateDateColumn,
  Entity,
  //JoinColumn,
  //ManyToOne,
  OneToMany,
  //OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("clientes")
export default class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  telefone: string;

  @Column()
  data_nascimento: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Order, (order) => order.cliente)
  pedidos: Order[];
}
