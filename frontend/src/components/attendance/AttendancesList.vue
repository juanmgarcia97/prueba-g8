<template>
  <div class="list-container">
    <alert-component
      :show="alert"
      :success="success"
      :message="message"
    ></alert-component>
    <div style="display: flex; justify-content: space-around">
      <h1>Listado de asistencias</h1>
      <v-btn prepend-icon="mdi-plus" to="/employees/create"
        >Crear asistencia
      </v-btn>
    </div>
    <v-table fixed-header>
      <thead>
        <tr>
          <th class="text-center" v-for="header in headers">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="attendance in attendances"
          :key="attendance.id"
          class="text-center"
        >
          <td>{{ attendance.id }}</td>
          <td>{{ attendance.employee }}</td>
          <td>{{ attendance.startTime }}</td>
          <td>{{ attendance.endTime }}</td>
          <td>{{ attendance.date }}</td>
          <td>
            <v-btn size="small" icon="mdi-delete" color="error"></v-btn>
            <v-btn size="small" icon="mdi-pencil" color="info"></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <dialog-component
      title="Eliminar asistencia"
      message="¿Seguro que deseas eliminar esta asistencia?"
      :dialog="dialog"
      v-if="dialog"
      @click="deleteEmployee"
    ></dialog-component>
  </div>
</template>

<script>
import AlertComponent from '../common/AlertComponent.vue';
import DialogComponent from '../common/DialogComponent.vue';
export default {
  name: 'AttendancesList',
  data() {
    return {
      attendances: [],
      headers: [
        'Id',
        'Empleado',
        'Hora ingreso',
        'Hora salida',
        'Fecha',
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
    async deleteAttendance() {
      fetch(`${process.env.VUE_APP_BACKEND_API_ATTENDANCES}/${this.id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          this.success = data.isSuccess;
          this.message = data.message;
          this.alert = true;
          this.dialog = false;
          const index = this.employees.findIndex(
            (employee) => employee.identification === this.id
          );
          this.employees.splice(index, 1);
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
    formatDate(date) {
      const { year, month, day } = date.split('T')[0].split('-');
      return day + '/' + month + '/' + year;
    },
  },
  mounted() {
    fetch(process.env.VUE_APP_BACKEND_API_ATTENDANCES)
      .then((res) => res.json())
      .then((data) => (this.attendances = data.data))
      .catch((err) => {
        console.log(err);
      });
  },
  components: { AlertComponent, DialogComponent },
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
