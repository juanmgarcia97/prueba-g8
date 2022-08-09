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
      </div>
      <ButtonComponent></ButtonComponent>
    </form>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
export default {
    name: "EmployeeForm",
    props: {
        employee: Object,
    },
    components: {
      ButtonComponent
    },
    data() {
        return {
            form: {
                id: this.employee ? this.employee.id : "",
                firstName: this.employee ? this.employee.firstName : "",
                lastName: this.employee ? this.employee.lastName : "",
                age: this.employee ? this.employee.age : 0,
                position: this.employee ? this.employee.position : "",
                phone: this.employee ? this.employee.phone : "",
            },
        };
    },
};
</script>
