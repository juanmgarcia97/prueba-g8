import Attendance from '../domain/attendance'

export interface AttendanceService {
  findAll(): Promise<Attendance[]>
  findById(id: string): Promise<Attendance>
  createAttendance(attendance: Attendance): Promise<Attendance>
  updateAttendance(id: string, attendance: Attendance): Promise<Attendance>
  deleteAttendance(id: string): Promise<void>
}