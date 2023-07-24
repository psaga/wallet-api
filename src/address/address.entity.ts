import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'address_id',
  })
  id: number;

  @Column({
    nullable: false,
  })
  account: string;

  @Column({
    nullable: false,
    default: false,
  })
  isFavorite: boolean;

  @Column({
    nullable: false,
    default: false,
  })
  isOld: boolean;
}
