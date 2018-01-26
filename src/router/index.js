import Vue from "vue";
import Router from "vue-router";
import Hello from "@/components/Hello";
import OrgChart from "@/views/orgchart";
import Vuex from "@/views/vuex";
import Vuerouter from "@/views/vuerouter";
import Es from "@/views/es";
import Home from "@/views/Home";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      component: Hello,
      children: [
        {
          path: "",
          name: "Home",
          component: Home,
          meta:{
            rName:'我的主页'
          }
        },
        {
          path: "vuex",
          name: "vuex",
          component: Vuex,
          meta:{
            rName:'Vuex'
          }
        },
        {
          path: "vuerouter",
          name: "vuerouter",
          component: Vuerouter,
          meta:{
            rName:'vuerouter'
          }
        },
        {
          path: "es",
          name: "es",
          component: Es,
          meta:{
            rName:'es'
          }
        },
        {
          path: "orgchart",
          name: "orgchart",
          component: OrgChart
        }
      ]
    }
  ]
});
