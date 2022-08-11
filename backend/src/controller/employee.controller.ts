import express, { Request, Response, NextFunction } from 'express';
import container from '../../inversify.config';
import { Employee } from '../domain/employee';
import { EmployeeService } from '../service/employee.service';
import { TYPES, Employee as tEmployee } from '../utils/types';

const router = express.Router();

const employeeService: EmployeeService = container.get<EmployeeService>(
  TYPES.EmployeeService
);

router.get('/', async (request: Request, response: Response) => {
  const employees = await employeeService.findAll();
  response.status(200).json({
    message: 'Employees found',
    data: employees,
    isSuccess: true,
  });
});

router.post(
  '/',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const temployee = request.body as tEmployee;
      const employee = new Employee(
        temployee.identification,
        temployee.firstName,
        temployee.lastName,
        temployee.age,
        temployee.position,
        temployee.phone
      );
      const created = await employeeService.createEmployee(employee);
      response.status(201).json({
        message: 'Employee created successfully.',
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
      const employee = await employeeService.findByCedula(id);
      response.status(200).json({
        message: 'Employee found.',
        data: employee,
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
      const temployee = request.body as tEmployee;
      const employee = new Employee(
        temployee.identification,
        temployee.firstName,
        temployee.lastName,
        temployee.age,
        temployee.position,
        temployee.phone
      );
      const updatedEmployee = await employeeService.updateEmployee(
        id,
        employee
      );
      response.status(200).json({
        message: 'Employee updated successfully.',
        data: updatedEmployee,
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
      await employeeService.deleteEmployee(id);
      response.status(200).json({
        message: 'Employee deleted successfully.',
        data: null,
        isSuccess: true,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
