import Vue from "vue";
import VueRouter from "vue-router";
import routers from './router.js';
import  titleController  from "@/utils/TitleController.js";
console.log(titleController);
Vue.use(VueRouter);

const routes = routers

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.afterEach((to, from) => {
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title);
  }
});

export default router;
