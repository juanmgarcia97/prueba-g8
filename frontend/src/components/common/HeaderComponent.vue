<template>
  <div id="header">
    <v-app-bar color="blue" app dark>
      <v-toolbar-title>
        <h2 style="color: white">Control de asistencias - Grupo G8</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" class="button">Home</v-btn>
      <v-btn to="/employees" class="button">Empleados</v-btn>
      <v-btn to="/attendances" class="button">Asistencias</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style>
header {
  color: white;
}

.button {
  color: white
}
</style>
