import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('EMPLEADO')
export default class EmployeeEntity {
  @PrimaryColumn({
    name: 'CEDULA',
    length: 12
  })
  id!: string;

  @Column({
    name: 'NOMBRES',
    nullable: false,
    length: 45
  })
  firstName!: string;

  @Column({
    name: 'APELLIDOS',
    nullable: false,
    length: 45
  })
  lastName!: string;

  @Column({
    name: 'EDAD',
    nullable: false,
    unsigned: true
  })
  age!: number;

  @Column({
    name: 'CARGO',
    nullable: false,
  })
  position!: string;

  @Column({
    name: 'NoCelular',
    nullable: false,
    unsigned: true
  })
  phone!: string;
}
