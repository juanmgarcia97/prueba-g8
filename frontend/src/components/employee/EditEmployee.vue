<template>
<div class="px-5">
  <SuccessAlert :message="message" v-show="success"></SuccessAlert>
  <EmployeeForm :employee="employee"></EmployeeForm>
</div>
</template>

<script>
import SuccessAlert from '../common/SuccessAlert.vue'
import EmployeeForm from '../common/EmployeeForm.vue'
export default {
  name: 'EditEmployee',
  components: {
    SuccessAlert,
    EmployeeForm
  },
  props: {
    employee: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      success: false,
      message: ''
    }
  },
  methods: {
    async editEmployee() {
      this.success = true
      this.message = "Employee updated successfully."
    }
  }
}
</script>