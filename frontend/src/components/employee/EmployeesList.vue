<template>
  <div class="list-container">
    <alert-component
      :show="alert"
      :success="success"
      :message="message"
    ></alert-component>
    <div style="display: flex; justify-content: space-around">
      <h1>Listado de empleados</h1>
      <v-btn prepend-icon="mdi-plus" to="/employees/create"
        >Crear empleado</v-btn
      >
    </div>
    <v-table fixed-header>
      <thead>
        <tr>
          <th class="text-center" v-for="header in headers">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="employee in employees"
          :key="employee.id"
          class="text-center"
        >
          <td>{{ employee.identification }}</td>
          <td>{{ employee.firstName }}</td>
          <td>{{ employee.lastName }}</td>
          <td>{{ employee.age }}</td>
          <td>{{ employee.position }}</td>
          <td>{{ employee.phone }}</td>
          <td>
            <v-btn
              size="small"
              icon="mdi-pencil"
              color="info"
              :to="`/employees/edit/${employee.identification}`"
            ></v-btn>
            <v-btn
              size="small"
              icon="mdi-delete"
              color="error"
              v-on:click="openDialog(employee.identification)"
            ></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <DialogComponent
      title="Eliminar empleado"
      message="¿Seguro que deseas eliminar este empleado?"
      :dialog="dialog"
      v-if="dialog"
      @click="deleteEmployee"
    ></DialogComponent>
  </div>
</template>

<script>
import DialogComponent from '../common/DialogComponent.vue';
import AlertComponent from '../common/AlertComponent.vue';
export default {
  name: 'EmployeesList',
  data() {
    return {
      employees: [],
      headers: [
        'Cedula',
        'Nombres',
        'Apellidos',
        'Edad',
        'Cargo',
        'Celular',
        'Acciones',
      ],
      dialog: false,
      success: false,
      alert: false,
      message: '',
      id: '',
    };
  },
  methods: {
    async deleteEmployee() {
      fetch(`${process.env.VUE_APP_BACKEND_API_EMPLOYEES}/${this.id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          this.success = data.isSuccess;
          this.message = data.message;
          this.alert = true;
          this.dialog = false;
          if(data.isSuccess) {
            const index = this.employees.findIndex(
              (employee) => employee.identification === this.id
            );
            this.employees.splice(index, 1);
          }
        })
        .catch((error) => {
          this.success = error.isSuccess;
          this.message = error.message;
          this.alert = true;
        });
    },
    openDialog(id) {
      this.id = id;
      this.dialog = !this.dialog;
    },
  },
  mounted() {
    fetch(process.env.VUE_APP_BACKEND_API_EMPLOYEES)
      .then((res) => res.json())
      .then((data) => (this.employees = data.data))
      .catch((error) => {
        this.success = error.isSuccess;
        this.message = error.message;
        this.alert = true;
      });
  },
  components: { DialogComponent, AlertComponent },
};
</script>

<style>
.list-container {
  padding: 1rem;
}
.actions {
  text-align: center;
}
</style>
