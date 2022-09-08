import { createApp } from 'vue';
import './style.scss';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './main.component.vue';
import Pascal from './routes/pascal/pascal.component.vue';

const routes = [
  {
    component: Pascal,
    path: '/pascal',
  },
];

const app = createApp(App);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

app.use(router);

app.mount('#app');
