import { Container } from 'inversify';
import { type } from 'os';
import AttendanceRepositoryImpl from './src/infrastructure/attendance.repository.impl';
import EmployeeRepositoryImpl from './src/infrastructure/employee.repository.impl';
import { AttendanceRepository } from './src/repository/attendance.repository';
import { EmployeeRepository } from './src/repository/employee.repository';
import { AttendanceService } from './src/service/attendance.service';
import AttendanceServiceImpl from './src/service/attendance.service.impl';
import { EmployeeService } from './src/service/employee.service';
import EmployeeServiceImpl from './src/service/employee.service.impl';
import { TYPES } from './src/utils/types';

const container = new Container();

container.bind<EmployeeRepository>(TYPES.EmployeeRepository).to(EmployeeRepositoryImpl);
container.bind<EmployeeService>(TYPES.EmployeeService).to(EmployeeServiceImpl);
container.bind<AttendanceRepository>(TYPES.AttendanceRepository).to(AttendanceRepositoryImpl);
container.bind<AttendanceService>(TYPES.AttendanceService).to(AttendanceServiceImpl);

export default container;

