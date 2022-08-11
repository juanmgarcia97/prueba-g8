import { Employee } from './employee';

export default class Attendance {
  constructor(
    private id: string,
    private employee: string,
    private startTime: string,
    private endTime: string,
    private date: Date
  ) {}

  get getId() {
    return this.id;
  }

  set setId(value: string) {
    this.id = value;
  }

  get getEmployee() {
    return this.employee;
  }

  set setEmployee(value: string) {
    this.employee = value;
  }

  get getStartTime() {
    return this.startTime;
  }

  set setStartTime(value: string) {
    this.startTime = value;
  }

  get getEndTime() {
    return this.endTime;
  }

  set setEndTime(value: string) {
    this.endTime = value;
  }

  get getDate() {
    return this.date;
  }

  set setDate(value: Date) {
    this.date = value;
  }
}
