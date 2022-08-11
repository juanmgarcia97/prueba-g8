export default class AttendanceAlreadyExists extends Error {
  constructor() {
    super('Attendance already exist.')
  }
}