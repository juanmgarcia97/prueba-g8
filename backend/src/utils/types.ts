export const TYPES = {
  EmployeeRepository: Symbol.for('EmployeeRepository'),
  EmployeeService: Symbol.for('EmployeeService'),
  AttendanceRepository: Symbol.for('AttendanceRepository'),
  AttendanceService: Symbol.for('AttendanceService'),
};

export type Employee = {
  identification: string;
  firstName: string;
  lastName: string;
  age: number;
  position: string;
  phone: string;
};

export type Attendance = {
  id: string;
  employee: string;
  startTime: string;
  endTime: string;
  date: Date;
};
