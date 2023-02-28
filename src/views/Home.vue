<template>
  <div>
    <div class="">
      <div class="flex justify-between items-center">
        <div class="flex flex-col justify-between h-full">
          <h1 class="text-[28px] font-semibold">Jaegar Resto</h1>
          <p class="text-[16px]">Tuesday 2 Feb 2021</p>
        </div>
        <div
          class="flex justify-between p-[14px] w-[320px] h-[48px] bg-[#2D303E] rounded-lg"
        >
          <i class="bx bx-search"></i>
          <input
            type="text"
            placeholder="Search for food, coffe etc..."
            class="ring-0 outline-none w-[264px] bg-transparent"
          />
        </div>
      </div>
      <ul class="flex gap-14 mt-6 pb-3 border-b-2 border-[#393C49]">
        <li v-for="item in navLinks">
          <RouterLink
            :to="item.path"
            class="text-[20px] font-semibold pt-6 pb-4"
            >{{ item.title }}</RouterLink
          >
        </li>
      </ul>
    </div>
    <RouterView class="py-6" />
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
import { homeNavLinks } from "../constants/homeNavLinks";

export default {
  name: "Home",
  data() {
    return {
      navLinks: homeNavLinks,
    };
  },
  methods: {},
  components: { RouterLink },
};
</script>
<style scoped>
.router-link-active {
  color: #ea7c69;
  border-bottom: 3px solid #ea7c69;
}
</style>
