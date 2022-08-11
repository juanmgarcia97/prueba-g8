import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import EmployeeEntity from './employee.entity';

@Entity('ASISTENCIA')
export default class AttendanceEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    name: 'EMPLEADO',
  })
  @ManyToOne(() => EmployeeEntity, (employee: EmployeeEntity) => employee.id, {
    cascade: true,
  })
  employee!: string;

  @Column({
    name: 'HORA_INGRESO',
  })
  startTime!: string;

  @Column({
    name: 'HORA_SALIDA',
  })
  endTime!: string;

  @Column({
    name: 'FECHA',
  })
  date!: Date;
}
