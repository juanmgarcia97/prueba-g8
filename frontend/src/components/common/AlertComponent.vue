<template>
  <v-alert v-model="show" :type="success ? 'success' : 'error'" closable>
    {{ message }}</v-alert
  >
</template>

<script>
export default {
  name: 'AlertComponent',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
    },
    success: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
