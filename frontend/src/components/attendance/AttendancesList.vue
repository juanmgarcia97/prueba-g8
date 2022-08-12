<template>
  <div class="list-container">
    <alert-component
      :show="alert"
      :success="success"
      :message="message"
    ></alert-component>
    <div style="display: flex; justify-content: space-around">
      <h1>Listado de asistencias</h1>
      <v-btn prepend-icon="mdi-plus" to="/attendances/create"
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
          <td>{{ attendance.employee }}</td>
          <td>{{ attendance.startTime }}</td>
          <td>{{ attendance.endTime }}</td>
          <td>{{ formatDate(attendance.date) }}</td>
          <td>
            <v-btn
              size="small"
              icon="mdi-pencil"
              color="info"
              :to="`/attendances/edit/${attendance.id}`"
            ></v-btn>
            <v-btn
              size="small"
              icon="mdi-delete"
              color="error"
              v-on:click="openDialog(attendance.id)"
            ></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <dialog-component
      title="Eliminar asistencia"
      message="¿Seguro que deseas eliminar esta asistencia?"
      :dialog="dialog"
      v-if="dialog"
      @click="deleteAttendance"
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
        'Cedula Empleado',
        'Hora Ingreso',
        'Hora Salida',
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
      fetch(`${process.env.VUE_APP_BACKEND_API}/attendances/${this.id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          this.success = data.isSuccess;
          this.message = data.message;
          this.alert = true;
          this.dialog = false;
          const index = this.attendances.findIndex(
            (attendance) => attendance.identification === this.id
          );
          this.attendances.splice(index, 1);
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
      const string = new Date(date);
      return string.toLocaleDateString();
    },
  },
  mounted() {
    fetch(`${process.env.VUE_APP_BACKEND_API}/attendances`)
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
