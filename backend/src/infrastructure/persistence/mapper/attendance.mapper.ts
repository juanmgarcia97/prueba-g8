import Attendance from '../../../domain/attendance';
import AttendanceEntity from '../entity/attendance.entity';

export default class AttendanceMapper {
  static toDomain(entity: AttendanceEntity): Attendance {
    return new Attendance(
      entity.id,
      entity.employee,
      entity.startTime,
      entity.endTime,
      entity.date
    );
  }

  static toEntity(domain: Attendance): AttendanceEntity {
    const entity = new AttendanceEntity();
    entity.id = domain.getId;
    entity.employee = domain.getEmployee;
    entity.startTime = domain.getStartTime;
    entity.endTime = domain.getEndTime;
    entity.date = domain.getDate;
    return entity;
  }

  static toDomainList(entities: AttendanceEntity[]): Attendance[] {
    return entities.map(this.toDomain);
  }
}
