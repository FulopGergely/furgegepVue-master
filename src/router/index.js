import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomeTest.vue";


Vue.use(VueRouter);

const routes = [
  {path: "/home", redirect: "/"}, //visszairányít a /home a gyökérbe
  {
    path: "/",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/homeTest",
    component: Home,
  },
  {
    path: "/gepkolcsonzes",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Gepkolcsonzes.vue"),
  },
  {
    path: "/ozon",
    component: () =>
        import("../views/ozon.vue"),
  },{
    path: "/arlista",
    component: () =>
        import("../views/arlista.vue"),
  },{
    path: "/kapcsolat",
    component: () =>
        import("../views/kapcsolat.vue"),
  },{
    path: "/palyazat",
    component: () =>
        import("../views/palyazat.vue"),
  },{
    path: "/table",
    component: () =>
        import("../views/table.vue"),
  },{
    path: "/machines/:id",
    component: () =>
        import("../views/machines.vue"),
  },



];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
