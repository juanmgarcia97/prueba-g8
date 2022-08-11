import express, { Request, Response, NextFunction } from 'express';
import container from '../../inversify.config';
import Attendance from '../domain/attendance';
import { AttendanceService } from '../service/attendance.service';
import { TYPES, Attendance as tAttendance } from '../utils/types';

const router = express.Router();

const attendanceService: AttendanceService = container.get(
  TYPES.AttendanceService
);

router.get('/', async (request: Request, response: Response) => {
  const attendances = await attendanceService.findAll();
  response.status(200).json({
    message: 'Attendances found.',
    data: attendances,
    isSuccess: true,
  });
});

router.post(
  '/',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const tattendance = request.body as tAttendance;
      const attendance = new Attendance(
        tattendance.id,
        tattendance.employee,
        tattendance.startTime,
        tattendance.endTime,
        tattendance.date
      );
      const created = await attendanceService.createAttendance(attendance);
      response.status(201).json({
        message: 'Attendance created successfully.',
        data: created,
        isSuccess: true,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { id } = request.params;
      const attendance = await attendanceService.findById(id);
      response.status(200).json({
        message: 'Attendance found.',
        data: attendance,
        isSuccess: true,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { id } = request.params;
      const tattendance = request.body as tAttendance;
      const attendance = new Attendance(
        tattendance.id,
        tattendance.employee,
        tattendance.startTime,
        tattendance.endTime,
        tattendance.date
      );
      const updatedAttendance = await attendanceService.updateAttendance(
        id,
        attendance
      );
      response.status(200).json({
        message: 'Attendance updated successfully.',
        data: updatedAttendance,
        isSuccess: true,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { id } = request.params;
      await attendanceService.deleteAttendance(id);
      response.status(200).json({
        message: 'Attendance deleted successfully.',
        data: null,
        isSuccess: true,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
