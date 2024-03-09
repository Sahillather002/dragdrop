import Vue from "vue";
import Router from "vue-router";
import TaskDetails from "./components/TaskDetails.vue";

Vue.use(Router);

export default new Router({
  routes: [
    // Existing routes
    {
      path: "/tasks/:id",
      name: "TaskDetails",
      component: TaskDetails,
    },
  ],
});
