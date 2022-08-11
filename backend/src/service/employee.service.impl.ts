import { Employee } from '../domain/employee';
import { EmployeeService } from './employee.service';
import { inject, injectable } from 'inversify';
import { EmployeeRepository } from '../repository/employee.repository';
import { TYPES } from '../utils/types';
import EmployeeAlreadyExists from '../domain/exceptions/employeeAlreadyExists';

@injectable()
export default class EmployeeServiceImpl implements EmployeeService {
  @inject(TYPES.EmployeeRepository) employeeRepository!: EmployeeRepository;

  async findAll(): Promise<Employee[]> {
    return await this.employeeRepository.findAll();
  }

  async findByCedula(cedula: string): Promise<Employee> {
    return await this.employeeRepository.findByCedula(cedula);
  }

  async createEmployee(employee: Employee): Promise<Employee> {
    try {
      const exist = await this.employeeRepository.findByCedula(employee.id);
      if (exist) throw new EmployeeAlreadyExists();
    } catch (e) {
      undefined;
    }
    return await this.employeeRepository.createEmployee(employee);
  }

  async updateEmployee(cedula: string, employee: Employee): Promise<Employee> {
    return await this.employeeRepository.updateEmployee(cedula, employee);
  }

  async deleteEmployee(cedula: string): Promise<void> {
    await this.employeeRepository.deleteEmployee(cedula);
  }
}
