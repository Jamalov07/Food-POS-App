<template>
  <div class="w-[300px] h-[430px] shadow-xl m-5 p-4 bg-white">
    <h1 class="text-2xl font-bold font-mono text-red-600">Card</h1>
    <h1>{{ $store.state.increment.number }}</h1>
    <button
      @click="($e) => $store.commit(`increment`)"
      class="px-3 py-2 bg-sky-700 rounded-md focus:ring-2 ring-sky-300 text-white"
    >
      Increment
    </button>
    <button
      @click="($e) => $store.commit(`decrement`)"
      class="px-3 py-2 bg-red-700 rounded-md focus:ring-2 ring-red-300 text-white"
    >
      Decrement
    </button>
  </div>
</template>
<script>
export default {
  name: "Card",
};
</script>
<style></style>
