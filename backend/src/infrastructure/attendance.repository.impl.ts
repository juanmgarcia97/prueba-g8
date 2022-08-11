import { injectable } from 'inversify';
import { Repository } from 'typeorm';
import Attendance from '../domain/attendance';
import AttendanceNotFound from '../domain/exceptions/attendanceNotFound';
import { AttendanceRepository } from '../repository/attendance.repository';
import { AppDataSource } from './persistence/db.config';
import AttendanceEntity from './persistence/entity/attendance.entity';
import AttendanceMapper from './persistence/mapper/attendance.mapper';

@injectable()
export default class AttendanceRepositoryImpl implements AttendanceRepository {
  private repositoryORM: Repository<AttendanceEntity>;
  constructor() {
    this.repositoryORM = AppDataSource.getRepository(AttendanceEntity);
  }

  async findAll(): Promise<Attendance[]> {
    const attendances = await this.repositoryORM.find();
    return AttendanceMapper.toDomainList(attendances);
  }
  async findById(id: string): Promise<Attendance> {
    const attendance = await this.repositoryORM.findOne({ where: { id: id } });
    if (!attendance) throw new AttendanceNotFound();
    return AttendanceMapper.toDomain(attendance);
  }
  async createAttendance(attendance: Attendance): Promise<Attendance> {
    const newAttendance = await this.repositoryORM.save(
      AttendanceMapper.toEntity(attendance)
    );
    return AttendanceMapper.toDomain(newAttendance);
  }
  async updateAttendance(
    id: string,
    attendance: Attendance
  ): Promise<Attendance> {
    await this.findById(id);
    attendance.setId = id;
    await this.repositoryORM.update(id, AttendanceMapper.toEntity(attendance));
    return attendance;
  }
  async deleteAttendance(id: string): Promise<void> {
    const attendance = await this.findById(id);
    await this.repositoryORM.remove(AttendanceMapper.toEntity(attendance));
  }
}
