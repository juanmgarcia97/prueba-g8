import { injectable } from 'inversify';
import { Repository } from 'typeorm';
import { Employee } from '../domain/employee';
import EmployeeNotFound from '../domain/exceptions/employeeNotFound';
import { EmployeeRepository } from '../repository/employee.repository';
import { AppDataSource } from './persistence/db.config';
import AttendanceEntity from './persistence/entity/attendance.entity';
import EmployeeEntity from './persistence/entity/employee.entity';
import AttendanceMapper from './persistence/mapper/attendance.mapper';
import EmployeeMapper from './persistence/mapper/employee.mapper';

@injectable()
export default class EmployeeRepositoryImpl implements EmployeeRepository {
  private repositoryORM: Repository<EmployeeEntity>;
  private attendanceORM: Repository<AttendanceEntity>;
  constructor() {
    this.repositoryORM = AppDataSource.getRepository(EmployeeEntity);
    this.attendanceORM = AppDataSource.getRepository(AttendanceEntity);
  }

  async findAll(): Promise<Employee[]> {
    const entities = await this.repositoryORM.find();
    return EmployeeMapper.toDomainList(entities);
  }

  async findByCedula(cedula: string): Promise<Employee> {
    const employee = await this.repositoryORM.findOne({
      where: { id: cedula },
    });
    if(!employee) throw new EmployeeNotFound();
    return EmployeeMapper.toDomain(employee);
  }

  async createEmployee(employee: Employee): Promise<Employee> {
    const entity = await this.repositoryORM.save(EmployeeMapper.toEntity(employee));
    return EmployeeMapper.toDomain(entity);
  }

  async updateEmployee(cedula: string, employee: Employee): Promise<Employee> {
    await this.findByCedula(cedula);
    employee.setId = cedula;
    await this.repositoryORM.update({id: cedula}, EmployeeMapper.toEntity(employee));
    return employee;
  }

  async deleteEmployee(cedula: string): Promise<void> {
    const employee = await this.findByCedula(cedula);
    const attendances = await this.attendanceORM.find({where: {employee: cedula}});
    await this.attendanceORM.remove(attendances);
    await this.repositoryORM.remove(EmployeeMapper.toEntity(employee));
  }
}
