import { createApp } from 'vue';
import { VueRouter } from 'vue-router';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/employees',
    // component: 
  }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
const app = createApp(App);

app.use(router);

app.mount('#app');
