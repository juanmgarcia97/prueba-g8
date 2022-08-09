export default class EmployeeNotFound extends Error {
  constructor() {
    super('Employee does not exist.')
  }
}