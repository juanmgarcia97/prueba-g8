<template>
  <h2 style="padding: 1rem">Ingresar asistencia</h2>
  <div class="v-container" style="display: flex">
    <alert-component
      :message="message"
      :success="success"
      :show="alert"
    ></alert-component>
    <v-form ref="form" v-model="valid" lazy-validation class="form">
      <v-select
        v-model="attendance.employee"
        :items="employees"
        item-title="name"
        item-value="id"
        label="Cedula"
        required
      ></v-select>
      <div>
        <label
          for="date-picker"
          class="v-label v-field-label v-field-label--floating"
          >Fecha</label
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
      <!-- <v-btn class="mr-4" @click="saveEmployee(employee)"> Create </v-btn> -->
    </v-form>
  </div>
</template>

<script>
import AlertComponent from '../common/AlertComponent.vue';
export default {
  name: 'CreateAttendance',
  data: () => ({
    valid: true,
    attendance: {
      employee: '',
      startTime: '',
      endTime: '',
      date: '',
    },
    employees: [
      {
        id: '1143873318',
        firstName: 'Juan Martin',
        lastName: 'Garcia',
        age: 24,
        position: 'Empleado',
        phone: '3174382620',
      },
      {
        id: '1143873319',
        firstName: 'Test',
        lastName: 'Garcia',
        age: 24,
        position: 'Empleado',
        phone: '3174382620',
      },
    ].map((employee) => {
      return {
        id: employee.id,
        name: employee.firstName + ' ' + employee.lastName,
      };
    }),
  }),
  components: { AlertComponent },
};
</script>

<style>
.form {
  width: 20rem;
  justify-content: center;
  align-content: center;
}
</style>
