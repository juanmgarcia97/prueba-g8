import { inject, injectable } from 'inversify';
import attendance from '../domain/attendance';
import { AttendanceRepository } from '../repository/attendance.repository';
import { TYPES } from '../utils/types';
import { AttendanceService } from './attendance.service';

@injectable()
export default class AttendanceServiceImpl implements AttendanceService {
  @inject(TYPES.AttendanceRepository)
  attendanceRepository!: AttendanceRepository;

  async findAll(): Promise<attendance[]> {
    return await this.attendanceRepository.findAll();
  }

  async findById(id: string): Promise<attendance> {
    return await this.attendanceRepository.findById(id);
  }

  async createAttendance(attendance: attendance): Promise<attendance> {
    return await this.attendanceRepository.createAttendance(attendance);
  }

  async updateAttendance(
    id: string,
    attendance: attendance
  ): Promise<attendance> {
    return await this.attendanceRepository.updateAttendance(id, attendance);
  }

  async deleteAttendance(id: string): Promise<void> {
    await this.attendanceRepository.deleteAttendance(id);
  }
}
