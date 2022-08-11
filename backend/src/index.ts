import 'reflect-metadata';
import 'dotenv/config';
import express, { json } from 'express';
import { errorHandler } from './infrastructure/middlewares/error-handler';
import { AppDataSource } from './infrastructure/persistence/db.config';
import EmployeeController from './controller/employee.controller';
import AttendanceController from './controller/attendance.controller';
import cors from 'cors';
const app = express();
const port = 3_000;

app.use(json());
app.use(cors());
app.use('/employees', EmployeeController);
app.use('/attendances', AttendanceController);
app.use(errorHandler);

AppDataSource.initialize().then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });
});
