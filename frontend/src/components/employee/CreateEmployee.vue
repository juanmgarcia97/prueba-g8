<template>
  <div class="px-5">
    <SuccessAlert :message="message" v-show="success"></SuccessAlert>
    <EmployeeForm @submit-form="saveEmployee"></EmployeeForm>
  </div>
</template>

<script>
import SuccessAlert from './common/SuccessAlert.vue';
import EmployeeForm from './common/EmployeeForm.vue';
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
    };
  },
  methods: {
    async saveEmployee() {
      this.success = true;
      this.message = 'Employee saved successfully.';
    },
  },
};
</script>
