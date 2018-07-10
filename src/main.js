// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import { Tree } from 'element-ui';

Vue.component(Tree.name, Tree);
import iView from "iview";
import 'iview/dist/styles/iview.css';
import store from './store'
Vue.use(iView);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem('isLogin')) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    console.log(22222)
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
