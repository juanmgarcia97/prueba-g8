<template>
  <div class="max-w-lg mx-5 text-left">
    <form @submit.prevent="$emit('submit-form', employee)">
      <!-- <div class="mb-6">
        <label for="id" class="text-sm font-medium text-gray-900 block mb-2"
          >Cedula</label
        >
        <input
          type="text"
          id="id"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Cedula"
          v-model="form.id"
          required=""
        />
      </div>
      <div class="mb-6">
        <label
          for="firstName"
          class="text-sm font-medium text-gray-900 block mb-2"
          >Nombres</label
        >
        <input
          type="text"
          id="firstName"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Nombres"
          v-model="form.firstName"
          required=""
        />
      </div>
      <div class="mb-6">
        <label
          for="lastName"
          class="text-sm font-medium text-gray-900 block mb-2"
          >Apellidos</label
        >
        <input
          type="text"
          id="lastName"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Apellidos"
          v-model="form.firstName"
          required=""
        />
      </div>
      <div class="mb-6">
        <label for="age" class="text-sm font-medium text-gray-900 block mb-2"
          >Edad</label
        >
        <input
          type="number"
          id="age"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Edad"
          v-model="form.email"
          required=""
        />
      </div>
      <div class="mb-6">
        <label
          for="position"
          class="text-sm font-medium text-gray-900 block mb-2"
          >Cargo</label
        >
        <input
          type="text"
          id="position"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Cargo"
          v-model="form.position"
          required=""
        />
      </div>
      <div class="mb-6">
        <label for="phone" class="text-sm font-medium text-gray-900 block mb-2"
          >Celular</label
        >
        <input
          type="text"
          id="phone"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Celular"
          v-model="form.phone"
          required=""
        />
      </div> -->
      <v-text-field
        v-model="employee.id"
        :error-messages="idErrors"
        :counter="12"
        label="Cedula"
        required
        @input="$v.employee.id.$touch()"
        @blur="$v.employee.id.$touch()"
      ></v-text-field>
      <!-- <v-text-field
        v-model="form.firstName"
        :error-messages="firstNameErrors"
        label="Nombres"
        required
        @input="$v.form.firstName.$touch()"
        @blur="$v.form.firstName.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="form.lastName"
        :error-messages="lastNameErrors"
        label="Apellidos"
        required
        @input="$v.form.lastName.$touch()"
        @blur="$v.form.lastName.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="form.age"
        :error-messages="ageErrors"
        label="Edad"
        required
        @input="$v.form.age.$touch()"
        @blur="$v.form.age.$touch()"
      ></v-text-field>
      <v-select
        v-model="form.position"
        :items="positions"
        :error-messages="positionErrors"
        label="Cargo"
        required
        @change="$v.form.position.$touch()"
        @blur="$v.form.position.$touch()"
      ></v-select> -->
      <!-- <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox> -->
      <v-btn class="mr-4" @click="submit"> Submit </v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EmployeeForm',
  props: {
    employee: Object,
  },
  data: () => ({
    // form: {
    //   id: this.employee.id ?? '',
    //   firstName: this.employee.firstName ?? '',
    //   lastName: this.employee.lastName ?? '',
    //   age: this.employee.age ?? 0,
    //   position: this.employee.position ?? '',
    //   phone: this.employee.phone ?? '',
    // },
    positions: ['Gerente', 'Subgerente', 'Empleado', 'Contratista', 'Director'],
  }),
  computed: {
    idErrors() {
      const errors = [];
      if (!this.$v.employee.id.$dirty) return errors;
      !this.$v.employee.id.maxLength &&
        errors.push('La cedula no puede ser mayor a 12 caracteres.');
      !this.$v.employee.id.required && errors.push('La cedula es obligatoria');
      return errors;
    },
    firstNameErrors() {
      const errors = []
        if (!this.$v.employee.firstName.$dirty) return errors
        !this.$v.employee.firstName.required && errors.push('El nombre es obligatorio')
        return errors
    },
    lastNameErrors() {
      const errors = []
        if (!this.$v.employee.lastName.$dirty) return errors
        !this.$v.employee.lastName.required && errors.push('El apellido es obligatorio')
        return errors
    },
    ageErrors() {
      const errors = []
        if (!this.$v.employee.firstName.$dirty) return errors
        !this.$v.employee.firstName.required && errors.push('El nombre es obligatorio')
        return errors
    },
    positionErrors() {},
    phoneErrors() {},
  },
};
</script>
