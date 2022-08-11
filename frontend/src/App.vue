<template>
  <v-app id="app">
    <HeaderComponent>
      </HeaderComponent>
      <v-main id="main">
        <router-view></router-view>
      </v-main>
    <FooterComponent id="footer"></FooterComponent>
  </v-app>
</template>

<script>
import FooterComponent from './components/common/FooterComponent.vue';
import HeaderComponent from './components/common/HeaderComponent.vue';
export default {
    name: "App",
    component: {
        FooterComponent
    },
    data: () => ({
    //
    }),
    components: { FooterComponent, HeaderComponent }
};
</script>

<style lang="css">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
app {
  grid-template-areas: 'header header header' '. main .' 'footer footer footer';
}
main {
  grid-area: main;
}
footer {
  grid-area: footer;
}
</style>
