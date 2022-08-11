import HelloWorld from '../components/HelloWorld.vue';
import EmployeesList from '../components/employee/EmployeesList.vue'
import CreateEmployee from '../components/employee/CreateEmployee.vue'
import EditEmployee from '../components/employee/EditEmployee.vue'
import CreateAttendance from '../components/attendance/CreateAttendance.vue'
import AttendancesList from '../components/attendance/AttendancesList.vue'
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/employees/create',
    component: CreateEmployee
  },
  {
    path: '/employees/edit/:id',
    component: EditEmployee
  },
  {
    path: '/employees',
    component: EmployeesList,
  },
  {
    path: '/attendances/create',
    component: CreateAttendance
  },
  {
    path: '/attendances',
    component: AttendancesList
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
