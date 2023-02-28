<template>
  <div class="bg-[#252836]">
    <aside
      class="pl-[13px] bg-[#1F1D2B] w-[108px] h-screen flex flex-col gap-8 rounded-r-lg"
    >
      <RouterLink
        to="/"
        class="w-[95px] h-[80px] mt-[12px] flex justify-center items-center"
        ><i
          class="bx text-[#EA7C69] bxs-store-alt rounded-lg bg-[#eb956a4f] w-[56px] h-[56px] flex justify-center items-center text-[24px]"
        ></i
      ></RouterLink>
      <ul class="flex flex-col gap-8">
        <li v-for="item in navLink">
          <RouterLink
            class="w-[95px] h-[80px] flex justify-center items-center"
            :to="item.path"
            ><i
              :class="`bx text-[#EA7C69] ${item.icon} rounded-lg w-[56px] h-[56px]  flex justify-center items-center text-[24px]`"
            ></i
          ></RouterLink>
        </li>
      </ul>
      <RouterLink
        class="w-[95px] h-[80px] flex justify-center items-center"
        to="/exit"
        ><i
          class="bx text-[#EA7C69] bxs-exit rounded-lg w-[56px] h-[56px] flex justify-center items-center text-[24px]"
        ></i
      ></RouterLink>
    </aside>
  </div>
</template>
<script>
import { navLinks } from "../../constants/navLinks";

export default {
  name: "Sidebar",
  data() {
    return {
      navLink: navLinks,
    };
  },
};
</script>
<style scoped>
.router-link-active {
  border-radius: 12px 0px 0px 12px;
  background-color: #252836 !important;
  position: relative;
}

.router-link-active > i {
  color: white !important;
  background-color: #ea7c69;
  box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.32);
}

.router-link-active::after {
  display: block;
  content: "";
  clip-path: polygon(
    79% 56%,
    93% 25%,
    100% 0,
    100% 100%,
    0 100%,
    40% 87%,
    63% 74%
  );
  background-color: #252836;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 0px;
  right: 0px;
  transform: translateY(-100%);
}

.router-link-active::before {
  display: block;
  content: "";
  clip-path: polygon(
    79% 56%,
    93% 25%,
    100% 0,
    100% 100%,
    0 100%,
    40% 87%,
    63% 74%
  );
  background-color: #252836;
  width: 12px;
  height: 12px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  transform: translateY(100%) rotate(-90deg);
}

.router-link-active i {
  color: #fff !important;
  background-color: #ea7c69;
  box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.32);
  border-radius: 8px;
}
</style>
