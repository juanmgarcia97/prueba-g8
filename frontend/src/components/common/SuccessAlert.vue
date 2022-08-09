<template>
  <div
    class="w-full mx-4 text-green-300 p-2 mx-auto mb-6 bg-green-600 border border-green-700 rounded"
  >
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "SuccessAlert",
  props: {
    message: {
      type: String,
    },
  },
};
</script>