<template>
  <div class="max-w-lg mx-5 text-left">
    <form @submit.prevent="$emit('submit-form', form)">
      <div class="mb-6">
        <label for="id" class="text-sm font-medium text-gray-900 block mb-2"
          >Cedula</label
        >
        <input
          type="text"
          id="id"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Cedula"
          v-model="form.employee"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="startTime"
          class="text-sm font-medium text-gray-900 block mb-2"
          >Hora ingreso</label
        >
        <input
          type="time"
          id="startTime"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Hora ingreso"
          v-model="form.startTime"
          required=""
        />
      </div>
      <div class="mb-6">
        <label
          for="endTime"
          class="text-sm font-medium text-gray-900 block mb-2"
          >Hora salida</label
        >
        <input
          type="text"
          id="endTime"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Hora salida"
          v-model="form.endTime"
          required=""
        />
      </div>
      <div class="mb-6">
        <label for="date" class="text-sm font-medium text-gray-900 block mb-2"
          >Fecha</label
        >
        <input
          type="number"
          id="date"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Fecha"
          v-model="form.date"
          required=""
        />
      </div>
      <ButtonComponent></ButtonComponent>
    </form>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
export default {
  name: 'AttendanceForm',
  props: {
    attendance: {
      type: Object,
    },
  },
  components: {
    ButtonComponent,
  },
  data() {
    return {
      form: {
        employee: this.attendance ? this.attendance.cedula : '',
        startTime: this.attendance ? this.attendance.startTime : '',
        endTime: this.attendance ? this.attendance.endTime : '',
        date: this.attendance ? this.attendance.date : '',
      },
    };
  },
};
</script>
