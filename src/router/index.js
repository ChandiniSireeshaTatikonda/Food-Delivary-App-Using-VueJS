import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import LoginPage from '../views/LoginPage.vue';
import Register from '../views/Register.vue';
import Cart from '../views/Cart.vue';
import Myaccount from '../views/Myaccount.vue';
import thanks from '../views/thanks.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/myaccount',
    name: 'Myaccount',
    component: Myaccount,
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: thanks,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
