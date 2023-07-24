import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExchangeRate {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'exchange_rate_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
    unique: true,
  })
  currency: string;

  @Column({
    nullable: false,
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  rate: number;
}
