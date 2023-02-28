<template>
  <div class="flex w-full">
    <Sidebar class="fixed" />
    <RouterView
      class="bg-[#252836] w-[62%] text-white p-6 ml-[108px] min-h-screen"
    />
    <Order class="ml-[1288px] fixed" />
  </div>
</template>
<script>
import { RouterView, RouterLink } from "vue-router";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Order from "./components/Order/Order.vue";
export default {
  name: "App",
  components: {
    Sidebar,
    Order,
  },
};
</script>
<style></style>
