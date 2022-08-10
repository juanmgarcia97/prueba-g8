// import { VueRouter } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import EmployeesList from '../components/employee/EmployeesList.vue'
import CreateEmployee from '../components/employee/CreateEmployee.vue'
import EditEmployee from '../components/employee/EditEmployee.vue'
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/employees',
    component: EmployeesList,
    children: [
      {
        path: 'create',
        component: CreateEmployee
      },
      {
        path: 'edit/:id',
        component: EditEmployee
      }
    ]
  },
  
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
