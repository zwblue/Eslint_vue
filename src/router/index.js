import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import OrgChart from "@/views/orgchart";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
      children: [
        {
          path: "orgchart",
          name: "orgchart",
          component: OrgChart
        }
      ]
    }
  ]
});
