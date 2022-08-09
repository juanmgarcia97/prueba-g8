
export class Employee {
  constructor(
    private identification: string,
    private firstName: string,
    private lastName: string,
    private age: number,
    private position: string,
    private phone: string
  ) {}

  get id() {
    return this.identification;
  }

  set setId(value: string) {
    this.identification = value;
  }

  get getFirstName() {
    return this.firstName;
  }

  set setFirstName(value: string) {
    this.firstName = value;
  }

  get getLastName() {
    return this.lastName;
  }

  set setLastName(value: string) {
    this.lastName = value;
  }

  get getAge() {
    return this.age;
  }

  set setAge(value: number) {
    this.age = value;
  }

  get getPosition() {
    return this.position;
  }

  set setPosition(value: string) {
    this.position = value;
  }

  get getPhone() {
    return this.phone;
  }

  set setPhone(value: string) {
    this.phone = value;
  }
}