<template>
  <div class="px-5">
    <SuccessAlert :message="message" v-show="success"></SuccessAlert>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="employee.id"
        :rules="idRules"
        label="Cedula"
        required
      ></v-text-field>
      <v-text-field
        v-model="employee.firstName"
        :rules="firstNameRules"
        label="Nombres"
        required
      ></v-text-field>
      <v-text-field
        v-model="employee.lastName"
        :rules="lastNameRules"
        label="Apellidos"
        required
      ></v-text-field>
      <v-text-field
        v-model="employee.age"
        :rules="ageRules"
        label="Edad"
        required
      ></v-text-field>
      <v-select
        v-model="employee.position"
        :items="positions"
        :rules="positionRules"
        label="Cargo"
        required
      ></v-select>
      <v-text-field
        v-model="employee.phone"
        :rules="phoneRules"
        label="Celular"
        required
      ></v-text-field>
      <v-btn class="mr-4" @click="saveEmployee(employee)"> Create </v-btn>
    </v-form>
  </div>
</template>

<script>
import SuccessAlert from '../common/SuccessAlert.vue';
import EmployeeForm from '../common/EmployeeForm.vue';
export default {
  name: 'CreateEmployee',
  components: {
    SuccessAlert,
    EmployeeForm,
  },
  data() {
    return {
      success: false,
      message: '',
      valid: true,
      employee: {
        id: '',
        firstName: '',
        lastName: '',
        age: 0,
        position: '',
        phone: '',
      },
      positions: ['Gerente', 'Subgerente', 'Empleado', 'Contratista', 'Director'],
      idRules: [
        (v) => !!v || 'La cedula es obligatoria',
        (v) =>
          (v && v.length <= 12) || 'La cedula debe ser menos de 12 caracteres',
          (v) => (v && /^\d+$/.test(v)) || 'La cedula debe ser numerica'
      ],
      firstNameRules: [
        (v) => !!v || 'El nombre es obligatorio',
        (v) =>
          (v && v.length <= 40) || 'El nombre debe ser menos de 40 caracteres',
      ],
      lastNameRules: [
        (v) => !!v || 'El apellido es obligatorio',
        (v) =>
          (v && v.length <= 40) ||
          'El apellido debe ser menos de 40 caracteres',
      ],
      ageRules: [
        (v) => !!v || 'La edad es obligatoria',
        (v) => (v && /^\d+$/.test(v)) || 'La edad debe ser numerica',
      ],
      positionRules: [
        (v) => !!v || 'El cargo es obligatorio',
        (v) =>
          (v && v.length <= 20) || 'El cargo debe ser menos de 20 caracteres',
      ],
      phoneRules: [
        (v) => !!v || 'El celular es obligatoria',
        (v) => (v && /^\d+$/.test(v)) || 'El celular debe ser numerico',
      ],
    };
  },
  methods: {
    async saveEmployee(employee) {
      this.success = true;
      this.message = 'Employee saved successfully.';
      console.log(employee);
    },
  },
};
</script>
