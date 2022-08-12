<template>
  <h2 style="padding: 1rem">Editar asistencia</h2>
  <div class="v-container">
    <alert-component
      :message="message"
      :success="success"
      :show="alert"
    ></alert-component>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-select
        v-model="attendance.employee"
        :items="employees"
        item-title="name"
        item-value="id"
        label="Cedula"
        required
      ></v-select>
      <div>
        <v-label
          for="date-picker"
          class="v-label v-field-label v-field-label--floating"
          >Fecha</v-label
        >
        <input
          type="date"
          class="v-field__input"
          id="date-picker"
          v-model="attendance.date"
          placeholder="Fecha"
        />
      </div>
      <div>
        <label
          for="time-start-picker"
          class="v-label v-field-label v-field-label--floating"
          >Hora inicio</label
        >
        <input
          type="time"
          class="v-field__input"
          id="time-start-picker"
          v-model="attendance.startTime"
        />
      </div>
      <div>
        <label
          for="time-end-picker"
          class="v-label v-field-label v-field-label--floating"
          >Hora inicio</label
        >
        <input
          type="time"
          class="v-field__input"
          id="time-end-picker"
          v-model="attendance.endTime"
        />
      </div>
      <v-btn class="mr-4" @click="editAttendance(attendance)">
        Actualizar
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import AlertComponent from '../common/AlertComponent.vue';
export default {
  name: 'EditAttendance',
  data: () => ({
    valid: true,
    attendance: {
      employee: '',
      startTime: '',
      endTime: '',
      date: '',
    },
    employees: [],
    success: false,
    alert: false,
    message: '',
  }),
  components: { AlertComponent },
  created() {
    const id = useRoute().params.id;
    fetch(`${process.env.VUE_APP_BACKEND_API_ATTENDANCES}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.attendance = data.data;
        this.attendance.date = new Date(this.attendance.date);
      });
  },
  mounted() {
    fetch(process.env.VUE_APP_BACKEND_API_EMPLOYEES)
      .then((res) => res.json())
      .then(
        (data) =>
          (this.employees = data.data.map((employee) => {
            return {
              id: employee.identification,
              name:
                employee.identification +
                ', ' +
                employee.firstName +
                ' ' +
                employee.lastName,
            };
          }))
      )
      .catch((error) => {
        this.success = error.isSuccess;
        this.message = error.message;
        this.alert = true;
      });
  },
  methods: {
    async editAttendance(attendance) {
      fetch(`${process.env.VUE_APP_BACKEND_API_ATTENDANCES}/${attendance.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(attendance),
      })
        .then((res) => res.json())
        .then((data) => {
          this.message = data.message;
          this.success = data.isSuccess;
          this.alert = true;
        })
        .catch((data) => {
          this.alert = true;
          this.message = data.message;
          this.success = data.isSuccess;
        });
    },
  },
};
</script>

<style>
.form {
  width: 20rem;
  justify-content: center;
  align-content: center;
}
</style>
