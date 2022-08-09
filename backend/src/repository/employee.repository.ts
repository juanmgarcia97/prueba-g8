import { Employee } from '../domain/employee';

export interface EmployeeRepository {
  findAll(): Promise<Employee[]>;
  findByCedula(cedula: string): Promise<Employee>;
  createEmployee(employee: Employee): Promise<Employee>;
  updateEmployee(cedula: string, employee: Employee): Promise<Employee>;
  deleteEmployee(cedula: string): Promise<void>;
}
