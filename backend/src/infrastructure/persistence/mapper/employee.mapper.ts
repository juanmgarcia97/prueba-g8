import { Employee } from '../../../domain/employee';
import EmployeeEntity from '../entity/employee.entity';

export default class EmployeeMapper {
  static toDomain(entity: EmployeeEntity): Employee {
    return new Employee(
      entity.id,
      entity.firstName,
      entity.lastName,
      entity.age,
      entity.position,
      entity.phone
    );
  }

  static toEntity(domain: Employee): EmployeeEntity {
    const entity = new EmployeeEntity();
    entity.id = domain.id;
    entity.firstName = domain.getFirstName;
    entity.lastName = domain.getLastName;
    entity.age = domain.getAge;
    entity.position = domain.getPosition;
    entity.phone = domain.getPhone;
    return entity;
  }

  static toDomainList(entities: EmployeeEntity[]): Employee[] {
    return entities.map(this.toDomain);
  }
}
