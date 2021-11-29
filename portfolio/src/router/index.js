import { createRouter, createWebHistory } from "vue-router";
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
    path: "/scrappy-notes",
    name: "ScrappyNotes",
    component: () => 
      import(/* webpackChunkName: "project" */ "../views/ScrappyNotes.vue"),
  },
  {
    path: "/poké-catch",
    name: "PokeCatch",
    component: () => 
      import(/* webpackChunkName: "project" */ "../views/PokeCatch.vue"),
  },
  {
    path: "/tech-times",
    name: "TechTimes",
    component: () => 
      import(/* webpackChunkName: "project" */ "../views/TechTimes.vue"),
  },
  {
    path: "/d&d-one-shot",
    name: "DndOneShot",
    component: () => 
      import(/* webpackChunkName: "project" */ "../views/DndOneShot.vue"),
  },
  {
    path: "/choose-your-own-adventure",
    name: "Adventure",
    component: () => 
      import(/* webpackChunkName: "project" */ "../views/Adventure.vue"),
  },
  {
    path: "/kingdom-of-galgudd",
    name: "Galgudd",
    component: () => 
      import(/* webpackChunkName: "project" */ "../views/Galgudd.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
