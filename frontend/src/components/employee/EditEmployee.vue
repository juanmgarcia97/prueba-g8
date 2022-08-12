<template>
  <h2 style="padding: 1rem">Editar empleado</h2>
  <div class="v-container">
    <AlertComponent
      :message="message"
      :show="alert"
      :success="success"
    ></AlertComponent>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="employee.identification"
        :rules="idRules"
        label="Cedula"
        required
        readonly
        disabled
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
      <v-btn class="mr-4" @click="editEmployee(employee)"> Actualizar </v-btn>
    </v-form>
  </div>
</template>

<script>
import AlertComponent from '../common/AlertComponent.vue';
import { useRoute } from 'vue-router';
export default {
  name: 'EditEmployee',
  components: {
    AlertComponent,
  },
  data() {
    return {
      success: false,
      alert: false,
      message: '',
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
  created() {
    const id = useRoute().params.id;
    fetch(`${process.env.VUE_APP_BACKEND_API_EMPLOYEES}/${id}`)
      .then((res) => res.json())
      .then((data) => (this.employee = data.data));
  },
  methods: {
    async editEmployee(employee) {
      fetch(
        `${process.env.VUE_APP_BACKEND_API_EMPLOYEES}/${employee.identification}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(employee),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          this.success = data.isSuccess;
          this.message = data.message;
          this.alert = true;
        })
        .catch((error) => {
          this.success = error.isSuccess;
          this.message = error.message;
          this.alert = true;
        });
    },
  },
};
</script>
