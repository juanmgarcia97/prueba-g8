export default class AttendanceNotFound extends Error {
  constructor() {
    super('Attendance does not exist.')
  }
}