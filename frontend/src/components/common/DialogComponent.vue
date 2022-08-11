<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent>
      <v-card>
        <v-card-title class="text-h5">
          {{ title }}
        </v-card-title>
        <v-card-text>{{ message }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="green darken-1" text @click="$emit('click')"> Ok </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'DialogComponent',
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: 'Dialog message',
    },
    title: {
      type: String,
      default: 'Dialog title',
    },
  },
  // methods: {
  //   actionButton(event) {
  //     this.$emit('click', event);
  //     // this.dialog = false;
  //     // console.log(event.$emit());
  //   },
  // },
};
</script>
