export default class EmployeeAlreadyExists extends Error {
  constructor() {
    super('Employee already exist.')
  }
}