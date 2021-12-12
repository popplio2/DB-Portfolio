import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/Projects.vue"),
  },
  {
    path: "/projects/scrappy-notes",
    name: "ScrappyNotes",
    component: () => 
      import(/* webpackChunkName: "project" */ "../views/ScrappyNotes.vue"),
  },
  {
    path: "/projects/portfolio",
    name: "Portfolio",
    component: () => 
      import(/* webpackChunkName: "project" */ "../views/Portfolio.vue"),
  },
  {
    path: "/projects/poké-catch",
    name: "PokeCatch",
    component: () => 
      import(/* webpackChunkName: "project" */ "../views/PokeCatch.vue"),
  },
  {
    path: "/projects/tech-times",
    name: "TechTimes",
    component: () => 
      import(/* webpackChunkName: "project" */ "../views/TechTimes.vue"),
  },
  {
    path: "/projects/d&d-one-shot",
    name: "DndOneShot",
    component: () => 
      import(/* webpackChunkName: "project" */ "../views/DndOneShot.vue"),
  },
  {
    path: "/projects/choose-your-own-adventure",
    name: "Adventure",
    component: () => 
      import(/* webpackChunkName: "project" */ "../views/Adventure.vue"),
  },
  {
    path: "/projects/kingdom-of-galgudd",
    name: "Galgudd",
    component: () => 
      import(/* webpackChunkName: "project" */ "../views/Galgudd.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
