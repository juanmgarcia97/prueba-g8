<template>
  <h2 style="padding: 1rem">Crear empleado</h2>
  <div class="v-container">
    <alert-component
      :message="message"
      :success="success"
      :show="alert"
    ></alert-component>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="employee.identification"
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
import AlertComponent from '../common/AlertComponent.vue';
import EmployeeForm from '../common/EmployeeForm.vue';
export default {
  name: 'CreateEmployee',
  data() {
    return {
      success: false,
      alert: false,
      message: '',
      valid: true,
      employee: {
        identification: '',
        firstName: '',
        lastName: '',
        age: 0,
        position: '',
        phone: '',
      },
      positions: [
        'Gerente',
        'Subgerente',
        'Empleado',
        'Contratista',
        'Director',
      ],
      idRules: [
        (v) => !!v || 'La cedula es obligatoria',
        (v) =>
          (v && v.length <= 12) || 'La cedula debe ser menos de 12 caracteres',
        (v) => (v && /^\d+$/.test(v)) || 'La cedula debe ser numerica',
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
      fetch(process.env.VUE_APP_BACKEND_API_EMPLOYEES, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee),
      })
        .then((res) => res.json())
        .then((data) => {
          this.message = data.message;
          this.success = data.isSuccess;
          this.alert = true;
          this.$refs.form.reset();
          this.$refs.form.resetValidation();
        })
        .catch((data) => {
          this.alert = true;
          this.message = data.message;
          this.success = data.isSuccess;
        });
    },
  },
  components: { AlertComponent, EmployeeForm, },
};
</script>
