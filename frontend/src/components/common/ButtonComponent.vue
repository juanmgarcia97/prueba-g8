<template>
  <button
    :type="type"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
  >
    {{ message }}
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    message: {
      type: String,
      default: 'Submit',
    },
    type: {
      type: String,
      default: 'submit',
    },
  },
};
</script>
