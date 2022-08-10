<template>
  <v-btn class="mr-4" @click="buttonClick">
    {{ message }}
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    message: {
      type: String,
      default: 'Submit',
    },
  },
  methods: {
    buttonClick(event) {
      $emit('click', event);
    },
  },
};
</script>
