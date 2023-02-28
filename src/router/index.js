import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Notification from "../views/Notification.vue";
import Message from "../views/Message.vue";
import Discount from "../views/Discount.vue";
import Dashboard from "../views/Dashboard.vue";
import Setting from "../views/Setting.vue";
import Exit from "../views/Exit.vue";
import Logo from "../views/Logo.vue";
import HotDishes from "../views/Home/HotDishes.vue";
import ColdDishes from "../views/Home/ColdDishes.vue";
import Soup from "../views/Home/Soup.vue";
import Grill from "../views/Home/Grill.vue";
import Appetizer from "../views/Home/Appetizer.vue";
import Dessert from "../views/Home/Dessert.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "logo",
      component: Logo,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      children: [
        {
          path: "hotdishes",
          name: "hotdishes",
          component: HotDishes,
        },
        {
          path: "colddishes",
          name: "colddishes",
          component: ColdDishes,
        },
        {
          path: "soup",
          name: "soup",
          component: Soup,
        },
        {
          path: "grill",
          name: "grill",
          component: Grill,
        },
        {
          path: "appetizer",
          name: "appetizer",
          component: Appetizer,
        },
        {
          path: "dessert",
          name: "dessert",
          component: Dessert,
        },
      ],
    },
    {
      path: "/discount",
      name: "discount",
      component: Discount,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/message",
      name: "message",
      component: Message,
    },
    {
      path: "/notification",
      name: "notification",
      component: Notification,
    },
    {
      path: "/setting",
      name: "setting",
      component: Setting,
    },
    {
      path: "/exit",
      name: "exit",
      component: Exit,
    },
  ],
});

export default router;
