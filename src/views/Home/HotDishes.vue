<template>
  <div>
    <div class="flex justify-between items-center">
      <h1 class="text-[20px] font-semibold">Choose Dishes</h1>
      <div
        class="flex justify-between w-[100px] h-[48px] bg-[#1F1D2B] p-[14px] rounded-lg border border-[#393C49]"
      >
        <i class="bx bx-chevron-down"></i>
        <h1 class="text-[14px] font-medium">Dine in</h1>
      </div>
    </div>
    <div
      class="grid grid-cols-4 pt-[68px] gap-14"
      v-if="$store.state.getProducts.foods.length"
    >
      <div
        v-for="item in $store.state.getProducts.foods"
        class="flex flex-col p-3 gap-2 h-full items-center shadow justify-end bg-[#1F1D2B] w-[242px] h-[238px] relative rounded-2xl"
      >
        <img
          :src="item.strMealThumb"
          alt="img"
          class="rounded-full w-[140px] h-[140px] absolute -top-9 left-[50px]"
        />
        <h1 class="text-[14px] font-medium text-center">
          {{ item.strMeal }}
        </h1>
        <p class="text-[14px] font-normal">$ 2.23</p>
        <p class="text-[14px] text-[#ABBBC2] font-normal">20 Bowis available</p>
      </div>
    </div>
    <div v-else="!$store.state.getProducts.foods.length">Not Found</div>
  </div>
</template>
<script>
export default {
  name: "HotDishes",
  mounted() {
    this.$store.commit("getFoods");
    setTimeout(() => {
      console.log(this.$store.state.getProducts.foods);
    }, 1000);
  },
};
</script>
<style></style>
