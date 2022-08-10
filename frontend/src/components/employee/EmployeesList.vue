<template>
  <v-table fixed-header height="300px">
    <thead>
      <tr>
        <th class="text-left" v-for="header in headers">{{header}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="employee in employees" :key="employee.id">
        <td>{{ employee.id }}</td>
        <td>{{ employee.firstName }}</td>
        <td>{{ employee.lastName }}</td>
        <td>{{ employee.age }}</td>
        <td>{{ employee.position }}</td>
        <td>{{ employee.phone }}</td>
      </tr>
    </tbody>
  </v-table>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'EmployeesList',
  data() {
    return {
      employees: [
        {
          id: '1143873318',
          firstName: 'Juan Martin',
          lastName: 'Garcia',
          age: 24,
          position: 'Empleado',
          phone: '3174382620',
        },
      ],
      headers: ['Cedula', 'Nombres', 'Apellidos', 'Edad', 'Cargo', 'Celular'],
    };
  },
};
</script>
